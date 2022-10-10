import React from 'react';
import Logo from '../Media/logotype.png';
import { Header } from './Styling/styling-components';
import { useIsAuthenticated } from '@azure/msal-react';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';
import { LogoutBtn } from './logout-btn';
import useApi from '../Context/api-context';

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();

  //For testing of alarm
  const Api = useApi();
    const sendAlarm = () => {
        const newAlarmData = [
            {
                alarm: true,
                deviceId: '76db7f2f-43bc-497d-8a3a-0b52b297cb3e',
                timeStamp: new Date().toLocaleString()
            },
            {
                alarm: true,
                deviceId: '89428fa3-8218-402f-a6f5-e7082c311b74',
                timeStamp: new Date().toLocaleString()
            },
            {
                alarm: true,
                deviceId: '5010e98d-9319-44d5-8bb4-5c1fde691581',
                timeStamp: new Date().toLocaleString()
            },
            {
              alarm: true,
              deviceId: '90a927fc-483d-4871-b9ba-665b4d70a38a',
              timeStamp: new Date().toLocaleString()
          },
        ]
        Api.setAlarmData(newAlarmData);
    }

  return (
    <>
      <IsDesktop>
        {isAuthenticated ? (
          <>
            <div
              style={{
                ...Header.logocontainer,
                ...Header.logocontainerdesktopLoggedIn,
              }}
            >
              <img
                src={Logo}
                alt='Logotyp för Concorde Hotel New York'
                style={Header.image}
              />
              {/* Kommentera bort denna för att få fram en knapp som skickar larm. För utveckling */}
              {/* <button style={{marginTop: '20rem'}} onClick={sendAlarm} >Send alarm</button> */}
            </div>
            <LogoutBtn />
          </>
        ) : (
          <div
            style={{
              ...Header.logocontainer,
              ...Header.logocontainerdesktopLoggedOut,
            }}
          >
            <img
              src={Logo}
              alt='Logotyp för Concorde Hotel New York'
              style={Header.image}
            />
          </div>
        )}
      </IsDesktop>
      <IsTablet>
        {isAuthenticated ? (
          <>
            <div
              style={{
                ...Header.logocontainer,
                ...Header.logocontainertabletLoggedIn,
              }}
            >
              <img
                src={Logo}
                alt='Logotyp för Concorde Hotel New York'
                style={Header.image}
              />
            </div>
          </>
        ) : (
          <>
            <div
              style={{ ...Header.logocontainer, ...Header.logocontainertablet }}
            >
              <img
                src={Logo}
                alt='Logotyp för Concorde Hotel New York'
                style={Header.image}
              />
            </div>
          </>
        )}
      </IsTablet>
      <IsMobile>
        <div style={{ ...Header.logocontainer, ...Header.logocontainermobile }}>
          <img
            src={Logo}
            alt='Logotyp för Concorde Hotel New York'
            style={Header.image}
          />
        </div>
      </IsMobile>
    </>
  );
};
