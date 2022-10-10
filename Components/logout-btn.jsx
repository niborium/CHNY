import React from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { IsDesktop, IsTablet, IsMobile } from '../Components/Styling/media-query';
import { logoutBtn } from './Styling/styling-components';
import accountCircle from '../Media/account_circle_white_24dp.svg'

export const LogoutBtn = (props) => {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  function signOutClickHandler(instance) {
    instance.logoutPopup();
  }

  function SignOutButton() {
    const { instance } = useMsal();
    return (
      <>
        <IsDesktop>
          <button
            style={{ ...logoutBtn.button, ...logoutBtn.buttonDesktop }}
            onClick={() => signOutClickHandler(instance)}
          >
            Logga ut
          </button>
        </IsDesktop>
        <IsTablet>
          <button
            style={{ ...logoutBtn.button, ...logoutBtn.buttonTablet }}
            onClick={() => signOutClickHandler(instance)}
          >
            Logga ut
          </button>
        </IsTablet>
        <IsMobile>
          <button
            style={{ ...logoutBtn.button }}
            onClick={() => signOutClickHandler(instance)}
          >
            Logga ut
          </button>
        </IsMobile>
      </>
    );
  }

  return (
    <>
      <IsDesktop>
        <div id="buttonContainer" style={{ ...logoutBtn.buttonContainerDesktop }}>
          < div id='userContainer' style={{ ...logoutBtn.userContainerDesktop }}>
            <img
              src={accountCircle}
              alt="Account circle"
              style={{ ...logoutBtn.accountCircle }}
            />
            <div id="accountEmail" style={{ ...logoutBtn.accountEmail }}>
              {accounts.length > 0 ?
                accounts[0].username
                :
                null
              }
            </div>
          </div>
          <SignOutButton />
        </div>
      </IsDesktop>
      <IsTablet>
        <div id="buttonContainer" style={{ ...logoutBtn.buttonContainerTablet }}>
          <SignOutButton />
          < div id='userContainer' style={{ ...logoutBtn.userContainerTablet }}>
            <img
              src={accountCircle}
              alt="Account circle"
              style={{ ...logoutBtn.accountCircle }}
            />
            <div id="accountEmail" style={{ ...logoutBtn.accountEmail }}>
              {accounts.length > 0 ?
                accounts[0].username
                :
                null
              }
            </div>
          </div>
        </div>
      </IsTablet>
      <IsMobile>
        <div id="buttonContainer" style={{ ...logoutBtn.buttonContainerMobile }}>
          <SignOutButton />
          < div id='userContainer' style={{ ...logoutBtn.userContainerMobile }}>
            <img
              src={accountCircle}
              alt="Account circle"
              style={{ ...logoutBtn.accountCircle }}
            />
            <div id="accountEmail" style={{ ...logoutBtn.accountEmail }}>
              {accounts.length > 0 ?
                accounts[0].username
                :
                null
              }
            </div>
          </div>
        </div>
      </IsMobile>
    </>
  );
};
