import React from "react";
import { Header } from "./header";
import { PageLayout } from './Styling/styling-components';
import { IsDesktop, IsTablet, IsMobile } from '../Components/Styling/media-query';
import ErrorBoundary from "./error-boundary";

export const PageLayout = (props) => {
    return (
        <>
            <ErrorBoundary>
                <IsDesktop>
                    <div style={PageLayout.containerDesktop}>
                        <Header />
                        {props.children}
                    </div>
                </IsDesktop>
                <IsTablet>
                    <div style={PageLayout.containerTablet}>
                        <Header />
                        {props.children}
                    </div>
                </IsTablet>
                <IsMobile>
                    <div style={PageLayout.containerMobile}>
                        <Header />
                        {props.children}
                    </div>
                </IsMobile>
            </ErrorBoundary>
        </>
    );
};