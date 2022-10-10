import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Filterandsort } from './Styling/styling-components';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';

export const Filtering = () => {
  const [text, setText] = useState('Filtrera');

  function allSensors() {
    setText('Alla sensorer');

    //Visar samtliga kort
    var divs = document.querySelectorAll('.neutral');
    [].forEach.call(divs, function (div) {
      div.style.display = 'initial';
    });
  }
  function alarmedSensors() {
    setText('Larmade sensorer');

    //Gömmer neutrala kort (ej larmade sensorer)
    var divs = document.querySelectorAll('.neutral');
    [].forEach.call(divs, function (div) {
      div.style.display = 'none';
    });
  }

  return (
    <>
      <IsDesktop>
        <Dropdown style={Filterandsort.filterdesktop}>
          <Dropdown.Toggle
            variant='success'
            id='dropdown-basic'
            style={{
              backgroundColor: '#E5B782',
              color: 'black',
              width: '200px',
            }}
          >
            {text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alarmedSensors()}>
              Larmade sensorer
            </Dropdown.Item>
            <Dropdown.Item onClick={() => allSensors()}>
              Alla sensorer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsDesktop>
      <IsTablet>
        <Dropdown style={Filterandsort.filtertablet}>
          <Dropdown.Toggle
            variant='success'
            id='dropdown-basic'
            style={{
              backgroundColor: '#E5B782',
              color: 'black',
              width: '200px',
            }}
          >
            {text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alarmedSensors()}>
              Larmade sensorer
            </Dropdown.Item>
            <Dropdown.Item onClick={() => allSensors()}>
              Alla sensorer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsTablet>
      <IsMobile>
        <Dropdown style={Filterandsort.filtermobile}>
          <Dropdown.Toggle
            variant='success'
            id='dropdown-basic'
            style={{
              backgroundColor: '#E5B782',
              color: 'black',
              width: '200px',
            }}
          >
            {text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alarmedSensors()}>
              Larmade sensorer
            </Dropdown.Item>
            <Dropdown.Item onClick={() => allSensors()}>
              Alla sensorer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsMobile>
    </>
  );
};
