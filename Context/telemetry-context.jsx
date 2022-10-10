import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

const TelemetryContext = createContext();

export const TelemetryContextProvider = (props) => {
  const [update, setUpdate] = useState(false); // If context need force update
  const [telemetryData, setTelemetryData] = useState([]); // Object with updated telemetry data
  const [telemetry, setTelemetry] = useState(); // Recieved telemetry data with every heartbeat
  const signalR = require('@microsoft/signalr');
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // Takes telemetry data and apply it to state telemetryData
  useEffect(() => {
    if (telemetry) {
      if (telemetryData) {
        if (
          telemetryData.some((obj) => obj.deviceId === telemetry[0].deviceId)
        ) {
          // Checks if deviceId already exist and replace if th id aready is in the object (telemetryData)
          const newTelemetryData = telemetryData.map((obj) => {
            if (obj.deviceId === telemetry[0].deviceId) {
              return telemetry[0];
            }
            return obj;
          });
          setTelemetryData(newTelemetryData); // Replace old object with the new
        } else {
          setTelemetryData((telemetryData) => [...telemetryData, telemetry[0]]); // If no object with the same deviceId
        }
      } else {
        setTelemetryData(telemetry[0]); // If telemetryData is null (at start)
      }
    }
  }, [telemetry]);

  useEffect(() => {
    // Handshake with AD to get SignalR token and url
    if (isAuthenticated) {
      handshake = axios.create({
        baseURL: 'https://smarthut.azurewebsites.net/api/negotiate',
        headers: { 'X-MS-SIGNALR-USERID': accounts[0].username },
      });
      (async () => {
        try {
          response = await handshake.get();
        } catch (error) {
          console.log(error);
        }
        // New SignalR connection configuration
        var connection = new signalR.HubConnectionBuilder()
          .withUrl(response.data.url, {
            accessTokenFactory: () => response.data.accessToken,
          })
          .configureLogging(signalR.LogLevel.Information)
          .build();
        // Recieve SignalR data when connection is established
        connection.on('newTelemetry', (telemetry) => {
          setTelemetry(telemetry);
        });
        // Logs to the client when the alarm has been neutralized
        connection.on('alarmNeutralized', (neutral) => {
          console.log(neutral);
        });
        // Starts the connection and tries again after five seconds if not connected first time
        async function start() {
          try {
            await connection.start();
            console.log('SignalR connected.');
          } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
          }
        }

        // When signalR is disconnected
        connection.onclose(async () => {
          console.log('SignalR disconnected.');
          await start();
        });
        // Starts signalR
        start();
      })();
    }
  }, [update]);

  // *** Loggeing telemetry (use when develop) ***
  // useEffect(() => {
  //  if (telemetryData) {
  //    console.log('telemetryData New: ', telemetryData);
  //  }
  // }, [telemetryData]);

  // Sets update to true or false for update connection.
  const updateTelemetryData = () => {
    if (update === false) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  };

  return (
    <TelemetryContext.Provider
      value={{
        telemetryData: telemetryData,
        updateTelemetryData: updateTelemetryData,
      }}
    >
      {props.children}
    </TelemetryContext.Provider>
  );
};
// Export hook for the context.
export default useTelemetry = () => useContext(TelemetryContext);
