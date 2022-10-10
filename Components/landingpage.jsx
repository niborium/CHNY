import React from 'react';
import { useMsal } from '@azure/msal-react';
import { LOGINREQUEST } from '../Config/auth-config';
import { Landingpage } from './Styling/styling-components';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';

export const Landingpage = () => {
  /* SignInButton komponenten returnerar en knapp som anropar en popup-inloggning när den klickas.
  useMsal hook kommer att returnera PublicClientApplication-instansen som du angav till MsalProvidern. */
  async function signInClickHandler(instance) {
    await instance.loginPopup(LOGINREQUEST);
    // Fulfix eftersom Parcel inte vill funka med MSAL och vissa browsers.
    window.location.reload();
  }

  function SignInButton() {
    const { instance } = useMsal();

    return (
      <>
        <IsDesktop>
          <button
            style={{ ...Landingpage.button, ...Landingpage.buttondesktop }}
            onClick={() => signInClickHandler(instance)}
          >
            Logga In
          </button>
        </IsDesktop>
        <IsTablet>
          <button
            style={{ ...Landingpage.button, ...Landingpage.buttontablet }}
            onClick={() => signInClickHandler(instance)}
          >
            Logga In
          </button>
        </IsTablet>
        <IsMobile>
          <button
            style={{ ...Landingpage.button, ...Landingpage.buttonmobile }}
            onClick={() => signInClickHandler(instance)}
          >
            Logga In
          </button>
        </IsMobile>
      </>
    );
  }

  return (
    <>
      <IsDesktop>
        <div style={{ ...Landingpage.bgimg, ...Landingpage.bgimgdesktop }}>
          <SignInButton />
        </div>
      </IsDesktop>
      <IsTablet>
        <div style={{ ...Landingpage.bgimg, ...Landingpage.bgimgtablet }}>
          <SignInButton />
        </div>
      </IsTablet>
      <IsMobile>
        <div style={{ ...Landingpage.bgimg, ...Landingpage.bgimgmobile }}>
          <SignInButton />
        </div>
      </IsMobile>
    </>
  );
};
