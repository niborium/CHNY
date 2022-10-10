import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Sensorcards } from './Styling/styling-components';
import Warning from '../Media/warning.png';
import Ok from '../Media/ok.png';
import { Restoredevice } from './restore';
import { TelemetryAndAlarm } from './telemetry-and-alarm';
import useApi from '../Context/api-context.jsx';

export const Card = (props) => {
const apiContext = useApi();
const [alarmedId, setAlarmedId] = useState();

// Adding alarmed sensors id to groups for props to Restoredevice
  useEffect(() => {
    let grouped = props.sensors.reduce(function (r, s) {
      r[s.name] = r[s.name] || [];
      r[s.name].push(s.id);
      return r;
    }, Object.create(null));
    grouped = Object.values(grouped);
    setAlarmedId(grouped);
  },[apiContext.alarmData])

  return (
    <>
      {props.sensors.some((sensor) => sensor.alarm === true && alarmedId) ? (
        <Card key={props.sensors[0].id} style={Sensorcards.cardstyle}>
          <Card.Body>
            <Card.Title>
              <b>{props.sensors[0].name}</b>
            </Card.Title>
            <Card.Text as='div'>
              {props.sensors.map((sensor) => {
                return (
                  <>
                    {sensor.alarm ? (
                      <div
                        key={sensor.id}
                        id='sensorValueAlarmContainer'
                        style={Sensorcards.sensorValueAlarmContainer}
                      >
                        <div
                          id='sensorValueAlarm'
                          style={Sensorcards.sensorValueAlarm}
                        >
                          {sensor.measurementName}:
                          <div id='value' style={Sensorcards.value}>
                            <TelemetryAndAlarm
                              key={props.sensors[0].id}
                              id={sensor.id}
                              minValue={sensor.minValue}
                              maxValue={sensor.maxValue}
                            />
                            {sensor.unit}
                          </div>
                        </div>
                        <small id='timeStamp' style={Sensorcards.timeStamp}>
                          Alarm: {sensor.alarmTimeStamp}
                        </small>
                      </div>
                    ) : (
                      <div
                        key={sensor.id}
                        id='sensorValue'
                        style={Sensorcards.sensorValue}
                      >
                        {sensor.measurementName}:
                        <div id='value' style={Sensorcards.value}>
                          <TelemetryAndAlarm
                            key={props.sensors[0].id}
                            id={sensor.id}
                            minValue={sensor.minValue}
                            maxValue={sensor.maxValue}
                          />
                          {sensor.unit}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
              <div style={Sensorcards.imgcontainer}>
                <img
                  src={Warning}
                  alt='Varning'
                  style={Sensorcards.warningstyle}
                  className='blink-warning'
                />
                <br></br>
                <Restoredevice key={props.sensors[0].id} deviceId={alarmedId} />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card
          key={props.sensors[0].id}
          style={Sensorcards.noalarmcardstyle}
          className='neutral'
        >
          <Card.Body style={Sensorcards.adjustedwidth}>
            <Card.Title>
              <b>{props.sensors[0].name}</b>
            </Card.Title>
            <Card.Text as='div'>
              {props.sensors.map((sensor) => {
                return (
                  <div
                    key={sensor.id}
                    id='sensorValue'
                    style={Sensorcards.sensorValue}
                  >
                    {sensor.measurementName}:
                    <div id='value' style={Sensorcards.value}>
                      <TelemetryAndAlarm
                        key={props.sensors[0].id}
                        id={sensor.id}
                        minValue={sensor.minValue}
                        maxValue={sensor.maxValue}
                      />
                      {sensor.unit}
                    </div>
                  </div>
                );
              })}
              <div style={Sensorcards.imgcontainer}>
                <img src={Ok} alt='Ok' style={Sensorcards.warningstyle} />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
