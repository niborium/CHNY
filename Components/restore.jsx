import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Sensorcards } from './Styling/styling-components';
import { restoreAlarm } from '../Service/api-request';
import Restore from '../Media/restore.png';
import { useMsal } from '@azure/msal-react';
import useApi from '../Context/api-context';
import { useEffect } from 'react';
import { RestoreCSS } from './Styling/styling-components';

export const Restoredevice = (props) => {
  const { alarmData, setAlarmData, cardData } = useApi();
  const { accounts } = useMsal();
  const [show, setShow] = useState(false);
  const [alarmedSensors, setAlarmedSensors] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    var alarms = [];
    alarmData.map((alarm) => {
      let id = props.deviceId[0].filter((sensor) => {
        if (sensor === alarm.deviceId) {
          return sensor
        }
      })
      if (id.length > 0) {
        alarms.push(id);
      }
    })
    setAlarmedSensors(alarms)
  }, [alarmData]);

  function getNameFromId(id) {
    var sensor = cardData.find(obj => {
      if (obj.id === id ) {
        return obj;
      }
    })
    return sensor.measurementName;
  }
  
  function handleReset(deviceId) {
    //POST request - singalr för att neutralisera larmet.
    restoreAlarm(deviceId, accounts[0].username);
  }

  return (
    <>
      <div id='restoreBtnContainer' style={RestoreCSS.restoreBtnContainer}>
        <img
          src={Restore}
          alt='Bildknapp för att återställ sensor'
          style={Sensorcards.restorestyle}
          onClick={handleShow}
        />
        <b>Återställ</b>
      </div>
      <Modal show={show} onHide={handleClose}>
        <>
          <Modal.Header closeButton>
            <Modal.Title>Återställning av sensor/sensorer</Modal.Title>
          </Modal.Header>
          {props.deviceId.length > 0 && (
            <Modal.Body style={{ overflowWrap: 'break-word' }}>
              {alarmedSensors.map((sensor) => {
                return (
                  <>
                    <div id={'dialogtext-' + sensor[0]}>
                      Är du säker på att du vill återställa sensor: <strong>{getNameFromId(sensor[0])}</strong>?
                    </div>
                    <Button
                      variant='primary'
                      onClick={() => handleReset(sensor[0])}
                      style={{ justifyContent: 'center', marginTop: '.4rem', marginBottom: '1.2rem' }}
                    >
                      Återställ ovan sensor
                    </Button>
                  </>
                );
              })}
              <br></br>
            </Modal.Body>
          )}
          ,
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Stäng
            </Button>
          </Modal.Footer>
        </>
      </Modal>
    </>
  );
};
