import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect, useContext, createContext } from 'react';

export const IsDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  return isDesktop ? children : null;
};
export const IsTablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-device-width: 481px) and (max-device-width: 1024px)',
  });
  return isTablet ? children : null;
};
export const IsMobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 480px)' });
  return isMobile ? children : null;
};
