import React, { useEffect } from 'react';
import { LogoutBtn } from './logout-btn';
import { Sensorcards } from './sensor-cards';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';
import { startPage } from './Styling/styling-components';

export const StartPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#2B2B2B';
  }, []);

  return (
    <>
      <IsDesktop>
        <div
          id='startPageContainerDesktop '
          style={{ ...startPage.startPageContainerDesktop }}
        >
          <div
            id='cardContainerDesktop'
            style={{ ...startPage.cardContainerDesktop }}
          >
            <Sensorcards />
          </div>
        </div>
      </IsDesktop>
      <IsTablet>
        <div
          id='startPageContainerTablet'
          style={{ ...startPage.startPageContainerTabletAndMobile }}
        >
          <div
            id='cardContainerTablet'
            style={{ ...startPage.cardContainerTablet }}
          >
            <Sensorcards />
          </div>
        </div>
        <LogoutBtn />
      </IsTablet>
      <IsMobile>
        <div
          id='startPageContainerMobile'
          style={{ ...startPage.startPageContainerTabletAndMobile }}
        >
          <div
            id='cardContainerMobile'
            style={{ ...startPage.cardContainerMobile }}
          >
            <Sensorcards />
          </div>
        </div>
        <LogoutBtn />
      </IsMobile>
    </>
  );
};
