import {
  PublicClientApplication,
  EventType,
  ProtocolMode,
} from '@azure/msal-browser';

const config = {
  auth: {
    clientId: '86c88538-2e16-46d1-b3f4-e26cd8d8eabc',
    authority:
      'https://login.microsoftonline.com/9bfa1706-1ffc-494d-a63e-dbbb34c4796b',
    redirectUri: '/signin_callback',
    postLogoutRedirectUri: '/signout',
    protocolMode: ProtocolMode.AAD,
  },
};
export const LOGINREQUEST = {
  scopes: [`api://957fee47-d75a-4f21-a073-f68815061809/access_as_a_user`],
};

export const PCA = new PublicClientApplication(config);

//Sätter JWT till sessionStorage (Scope: Authenticated template)
PCA.addEventCallback((message) => {
  if (message.eventType === EventType.LOGIN_SUCCESS) {
    const { payload } = message;
    var JWT = payload.accessToken;
    sessionStorage.setItem('CHNY-JWT', JWT);
  }
});
//Funktion för att hämta JWT från sessionStorage. (Scope: Authenticated template)
export function getJwt() {
  const JWT = sessionStorage.getItem('CHNY-JWT');
  return JWT;
}
