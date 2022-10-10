import React, { useEffect } from "react";
import { Landingpage } from "../Components/landingpage";
import { TelemetryContextProvider } from '../Context/telemetry-context';
import { StartPage } from "../Components/start-page";
import { PageLayout } from "../Components/page-layout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ApiContextProvider } from "../Context/api-context";

export const App = () => {
    return (
        <>
            <ApiContextProvider>
                <PageLayout>
                    <TelemetryContextProvider>
                        <AuthenticatedTemplate>
                            <StartPage />
                        </AuthenticatedTemplate>
                        <UnauthenticatedTemplate>
                            <Landingpage />
                        </UnauthenticatedTemplate>
                    </TelemetryContextProvider>
                </PageLayout>
            </ApiContextProvider>
        </>
    );
}
