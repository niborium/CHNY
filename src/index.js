import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { MsalProvider } from "@azure/msal-react";
import { PCA } from "../Config/auth-config"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
        <MsalProvider instance={PCA}>
            <App />
        </MsalProvider>
);