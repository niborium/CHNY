import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Filterandsort } from './Styling/styling-components';
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from '../Components/Styling/media-query';

export const Sorting = () => {
  const [text, setText] = useState('Sortera');

  function alarmedFirst() {
    setText('Larmade först');
    //Sorterar alla larmade sensorer först.
    var sortN = document.querySelectorAll('.card.neutral');
    var toSort = document.getElementsByClassName('card');
    function sortElements(arr) {
      var toSort = Array.prototype.slice.call(arr, 0);
      toSort.sort(function (a, b) {
        var first = a.querySelector('.card-title.h5').innerText;
        var second = b.querySelector('.card-title.h5').innerText;
        return first > second ? 1 : -1;
      });
      return toSort;
    }
    function appendElems(arr) {
      for (var i = 0, l = arr.length; i < l; i++) {
        containerRow.appendChild(arr[i]);
      }
    }
    var eleArr1 = sortElements(toSort);
    var eleArr2 = sortElements(sortN);
    var containerRow = document.querySelector('.row');
    containerRow.innerHTML = '';
    appendElems(eleArr1);
    appendElems(eleArr2);
  }
  function alphabeticalOrder() {
    setText('Namn A-Ö');
    //Sorterar A till Ö baserat efter card-title h5 innerText.
    var toSort = document.getElementsByClassName('card');
    toSort = Array.prototype.slice.call(toSort, 0);
    toSort.sort(function (a, b) {
      var first = a.querySelector('.card-title.h5').innerText;
      var second = b.querySelector('.card-title.h5').innerText;
      return first > second ? 1 : -1;
    });
    var containerRow = document.querySelector('.row');
    containerRow.innerHTML = '';
    for (var i = 0, l = toSort.length; i < l; i++) {
      containerRow.appendChild(toSort[i]);
    }
  }

  function reversealphabeticalOrder() {
    setText('Namn Ö-A');
    //Sorterar Ö till A baserat efter card-title h5 innerText.
    var toSort = document.getElementsByClassName('card');
    toSort = Array.prototype.slice.call(toSort, 0);
    toSort.sort(function (a, b) {
      var first = a.querySelector('.card-title.h5').innerText;
      var second = b.querySelector('.card-title.h5').innerText;
      return first < second ? 1 : -1;
    });
    var containerRow = document.querySelector('.row');
    containerRow.innerHTML = '';
    for (var i = 0, l = toSort.length; i < l; i++) {
      containerRow.appendChild(toSort[i]);
    }
  }

  return (
    <>
      <IsDesktop>
        <Dropdown style={Filterandsort.sortdesktop}>
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
            <Dropdown.Item onClick={() => alarmedFirst()}>
              Larmande först
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alphabeticalOrder()}>
              Namn A-Ö
            </Dropdown.Item>
            <Dropdown.Item onClick={() => reversealphabeticalOrder()}>
              Namn Ö-A
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsDesktop>
      <IsTablet>
        <Dropdown style={Filterandsort.sorttablet}>
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
            <Dropdown.Item onClick={() => alarmedFirst()}>
              Larmande först
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alphabeticalOrder()}>
              Namn A-Ö
            </Dropdown.Item>
            <Dropdown.Item onClick={() => reversealphabeticalOrder()}>
              Namn Ö-A
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsTablet>
      <IsMobile>
        <Dropdown style={Filterandsort.sortmobile}>
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
            <Dropdown.Item onClick={() => alarmedFirst()}>
              Larmade först
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alphabeticalOrder()}>
              Namn A-Ö
            </Dropdown.Item>
            <Dropdown.Item onClick={() => reversealphabeticalOrder()}>
              Namn Ö-A
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </IsMobile>
    </>
  );
};
