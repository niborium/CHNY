import React, { useEffect } from "react";
import { Landingpage } from "../Components/landingpage";
import { TelemetryContextProvider } from '../Context/telemetry-context';
import { StartPage } from "../Components/start-page";
import { PageLayout } from "../Components/page-layout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ApiContextProvider } from "../Context/api-context";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const App = () => {
    return (
        <>
            <ApiContextProvider>
                <PageLayout>
                    <TelemetryContextProvider>
                        <div style={{marginRight: '.7rem'}}>
                            <NotificationContainer />
                        </div>
                        <AuthenticatedTemplate>
                            <StartPage />
                        </AuthenticatedTemplate>
                        <UnauthenticatedTemplate>
                            <NotificationContainer />
                            <Landingpage />
                        </UnauthenticatedTemplate>
                    </TelemetryContextProvider>
                </PageLayout>
            </ApiContextProvider>
        </>
    );
}
