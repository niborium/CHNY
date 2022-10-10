# Concorde Hotel New York

1. Ute till höger i repot (https://github.com/MarcusR91/CHNY) så kan du trycka på Production (under Releases). Här kan du välja att ladda ner källkoden under "Assests" som zip fil eller tar.gz fil.
2. Du måste nu ladda över filen (exempelvis via FileZilla eller annan FTP klient) till önskad mapp på servern.
3. Logga in via SSH på servern så du har åtkomst till terminalen.
4. Du måste byta till den mapp du packade upp filen i med hjälp av cd kommando ( https://linuxize.com/post/linux-cd-command/ ) exempelvis: cd /var/www/
5. Du måste nu packa upp filen.
   Om du har tar.gz filen så kan du köra tar -xf filnamnet.tar.gz så packas den upp.
   Om du har zip fil så kan du installera sudo apt-get install unzip och köra unzip filnmnet.zip

Observera: Byt ut filnamnet ovan emot namnet vad zip eller tar.gz-filen heter.

6. Kontrollera att Node.js installerat är installerat på servern med hjälp av kommandot node -v (om inte så måste detta installeras så följ anvisningar på https://nodejs.org/en/download/)
7. Kör därefter `npm ci ` i terminalen. (Samma mapp som du packat upp filerna från zip/tar.gz)
8. Kör därefter `npm start` följande meddelande visas för att starta applikationen (Samma mapp som du packat upp filerna från zip/tar.gz).

   > ```
   > chny@1.0.0 start
   > npx parcel src/index.html --port=5001 --https
   > Server running at https://localhost:5001
   > Built in xx s.
   > ```

9. Nu kan du besöka sidan på ovan adress i din webbläsare på den lokala servern eller sätta upp reverse proxy (med exempelvis nginx) för din domän:
   https://blog.logrocket.com/how-to-run-a-node-js-server-with-nginx/ (se delen för Installing nginx och configuring nginx).
10. Det är också rekommenderat att du skapar en systemd service eller annat för att starta/omstarta applikationen om applikationen kraschar eller om servern behöver startas om. (exmepel referens: https://www.shubhamdipt.com/blog/how-to-create-a-systemd-service-in-linux/)

## Externa bibliotek

### [React](https://www.npmjs.com/package/react)

React är ett JavaScript-bibliotek för att skapa användargränssnitt.

### [React-dom](https://www.npmjs.com/package/react)

Detta paket fungerar som ingångspunkten till DOM- och serverrenderare för React. Den är avsedd att paras ihop med det generiska React-paketet.

### [Axios](https://www.npmjs.com/package/axios)

Axios är en promise-baserad HTTP-klient för webbläsaren och Node.js. Axios gör det enkelt att skicka asynkrona HTTP-förfrågningar till REST-slutpunkter och utföra CRUD-operationer. Det kan användas i vanlig JavaScript eller med ett bibliotek som Vue eller React.

installerad som paket (npm)

### [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)

Använder React-Bootstrap för styling (Cards, modals, responsivitet m.m.)

Installerad som paket (npm)

### [React-Notifications](https://www.npmjs.com/package/react-notifications)

Notifierings komponent för React, används för när vi återställer larm och notifierar samtliga.

Installerad som paket (npm)

### [React-storage-hooks](https://www.npmjs.com/package/react-storage-hooks)

Anpassade React-hooks för att hålla applikationsstatus synkroniserad med localStorage eller sessionStorage.

Installerad som paket (npm)

### [React-Responsive](https://www.npmjs.com/package/react-responsive)

Använder React-Responsive för media queries för enheterna: desktop, tablet och mobile för conditional rendering.

Installerad som paket (npm)

### [azure/msal-browser](https://www.npmjs.com/package/@azure/msal-browser)

Använder azure/msal-browser för PublicClientApplication (PCA), EventType, ProtocolMode och addEventCallback (auth-config.js).

Installerad som paket (npm)

### [azure/msal-react](https://www.npmjs.com/package/@azure/msal-react)

Använder azure/msal-react för import av MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate i App.jsx.
Används för att omfamna vår applikation i MsalProvider för att förese applikationen med instansen PCA som importeras från auth-config.jsx.

Används också i landingpage.jsx för loginPopup för inloggning som tar in instansen (från useMsal) PCA-intansen från providern och skickar in LOGINREQUEST (scope) för att autentisera mot uppgifterna i configen (auth-config.js).

useIsAuthenticated hooken används även för att kontrollera om användaren är inloggad eller utloggad från applikationen (conditional rendering - exempelvis header.jsx).

telemetry-context.jsx använder useMsal för att läsa ut inloggade användaren via accounts[0].username för att skicka med i request för handskakning.

Installerad som paket (npm)

### [microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)

Använder microsoft/signalr i telemetry-context.jsx för SignalR connection (HubConnectionBuilder) för att etablera kontakt och hämta telemetri data (sensorvärden - realtidskommunikation)

Installerad som paket (npm)

### [Parcel](https://www.npmjs.com/package/parcel) (byggsystem/buildtool)

Parcel är en webbapplikationspaketerare (bundler), som särskiljs av sin utvecklarupplevelse. Den erbjuder blixtsnabb prestanda med flerkärnig bearbetning och kräver noll konfiguration. Lätt att använda, enkelt att utöka och kraftfullt byggsystem.

Installerad som paket (npm)
