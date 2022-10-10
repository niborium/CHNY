import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Sensorcards } from './Styling/styling-components';
import './warningblink.css';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';
import useApi from '../Context/api-context.jsx';
import { Card } from './card.jsx';
import { Sorting } from './sorting';
import { Filtering } from './filtering';

export const Sensorcards = () => {
  const apiContext = useApi();
  const [groupedCardData, setGroupedCardData] = useState();

  // Groups devices with the same name into groups in an array and sets to groupedCardData.
  useEffect(() => {
    let grouped = apiContext.cardData.reduce(function (r, obj) {
      r[obj.name] = r[obj.name] || [];
      r[obj.name].push(obj);
      return r;
    }, Object.create(null));
    grouped = Object.values(grouped);
    setGroupedCardData(grouped);
  }, [apiContext.cardData]);

  if (groupedCardData) {
    return (
      <>
        <Filtering />
        <Sorting />
        <IsDesktop>
          <Row style={Sensorcards.rowDesktop}>
            {groupedCardData.map((cardGroup) => {
              return <Card key={cardGroup[0].id} sensors={cardGroup} />;
            })}
          </Row>
        </IsDesktop>
        <IsTablet>
          <Row style={Sensorcards.rowTablet}>
            {groupedCardData.map((cardGroup) => {
              return <Card key={cardGroup[0].id} sensors={cardGroup} />;
            })}
          </Row>
        </IsTablet>
        <IsMobile>
          <Row style={Sensorcards.rowMobile}>
            {groupedCardData.map((cardGroup) => {
              return <Card key={cardGroup[0].id} sensors={cardGroup} />;
            })}
          </Row>
        </IsMobile>
      </>
    );
  }
};
