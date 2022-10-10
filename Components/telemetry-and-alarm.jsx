
import React, { useEffect, useState } from 'react';
import useTelemetry from '../Context/telemetry-context';
import useApi from '../Context/api-context';

/**
 * Generates telemerty data using device Id.
 * @param {string} id - Id for the sensor 
 * @param {string} mimValue - the sensors min-value
 * @param {string} maxValue - the sensors max-value
 * @example
 * <TelemetryAndAlarm id={sensor.Id} minValue={sensor.minValue} maxValue={sensor.maxValue}/>
 */
export const TelemetryAndAlarm = (props) => {
  const [telemetryValue, setTelemetryValue] = useState();
  const telemetry = useTelemetry();
  const Api = useApi();

  useEffect(() => {
    if(telemetry.telemetryData.length > 0) {
      const getValue = async () => {
        const value = await telemetry.telemetryData.filter((obj) => {
          if (obj.deviceId === props.id.toUpperCase()) {
            return obj
          }
        });
        try {
          if(value.length > 0) {
            setTelemetryValue(Math.round(value[0].value * 10)/10);
          }
        } catch (error) {
          console.log('error:', error);
        }
      };
      getValue();
    }
  }, [telemetry.telemetryData]);

  useEffect(() => {
    if (telemetryValue) {
      const checkValue = () => {
        try {
          if (telemetryValue > props.maxValue || telemetryValue < props.minValue) {
            var newAlarmData = [...Api.alarmData];
            if (newAlarmData.some(obj => obj.deviceId === props.id)) {
              newAlarmData = newAlarmData.map((obj) => {
                if (obj.deviceId === props.id) {
                  var newObj = { ...obj };
                  newObj.alarm = true
                  newObj.timeStamp = new Date().toLocaleString()
                  return newObj;
                }
                return obj;
              });
            }
            else {
              newAlarmData.push(
                {
                  alarm: true,
                  deviceId: props.id,
                  timeStamp: new Date().toLocaleString()
                }
              )
            }
            Api.setAlarmData(newAlarmData);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkValue();
    }
  }, [telemetryValue]);

  //Use for development
  //useEffect(() => {
  //  console.log('telemetryValue', telemetryValue);
  //})

  return (
    <>
        {telemetryValue}
    </>
  );
};

