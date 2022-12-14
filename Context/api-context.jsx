import React, { useState, useEffect, useContext, createContext } from 'react';
import { GetBuilding, getDevices, getUnit } from '../Service/api-request';
import { useIsAuthenticated } from "@azure/msal-react";
import { useStorageState } from 'react-storage-hooks';

const ApiContext = createContext();

export const ApiContextProvider = (props) => {
    const [buildingId, setBuildingId] = useState([]);
    const [deviceData, setDeviceData] = useState([]);
    // alarmData with test alarm. Remove when alarmData sets by TelemetryAndAlarm component
    const [alarmData, setAlarmData] = useStorageState(localStorage, 'alarmData', []);
    const [cardData, setCardData] = useState([]);
    const [units, setUnits] = useState([]);
    const [valueName, setValueName] = useState(
        {
            '°C': 'Temperatur',
            '%': 'Luftfuktighet'
        }
    );
    const isAuthenticated = useIsAuthenticated();

    //Get buildingId, units and store it in state
    useEffect(() => {
        if (isAuthenticated) {
            const getBuildingData = async () => {
                const data = await GetBuilding()
                if (data) {
                    setBuildingId(data.id);
                }
            }

            const getUnitData = async () => {
                const data = await getUnit()
                if (data) {
                    setUnits(data);
                }
            }
            getBuildingData();
            getUnitData();
        }
    }, [])

    //Adding sensors in cardData state
    useEffect(() => {
        if (isAuthenticated && buildingId.length > 0) {
            const getDeviceData = async () => {
                const data = await getDevices(buildingId);
                if (data) {
                    setDeviceData(data.devices);
                }
            }
            getDeviceData();
        }
    }, [buildingId, alarmData]);

    // Processing deviceData for applying to cardData. cardData = card to render.
    useEffect(() => {
        if (deviceData.length > 0) {
            var newCardData = [...deviceData];
            // Add new keys
            newCardData.forEach(obj => {
                obj.alarm = false;
                obj.alarmTimeStamp = null;
                obj.unit = null;
                obj.measurementName = null;
            });
            // Removes the name of the messurement in the name
            newCardData = newCardData.map(obj => {
                let textArray = obj.name.split(' ');
                textArray = textArray.splice(1);
                let newText = textArray.join(' ');
                if(textArray.length === 3) {
                    obj.name = newText;
                }
                return obj;
            });
            // Unit for each sensor sets to key unit
            units.forEach(unit => {
                newCardData = newCardData.map(obj => {
                    if (obj.unitId === unit.id) {
                        var newObj = {...obj}
                        newObj.unit = unit.unit;
                        return newObj;
                    }
                    return obj;
                });
            });
            // Add measurementName deprnding on unit
            newCardData.forEach(obj => {
                obj.measurementName = valueName[obj.unit];
            });
            // Checks if there is any alarms and changes alarm to true and alarmTimeStamp to timeStamp
            alarmData.forEach(alarm => {
                newCardData = newCardData.map(obj => {
                    if ( obj.id === alarm.deviceId) {
                        var newObj = {...obj}
                        newObj.alarm = true;
                        newObj.alarmTimeStamp = alarm.timeStamp;
                        return newObj;
                    } else
                        return obj;
                });
            });
            setCardData(newCardData);
        }
    }, [deviceData, alarmData]);

    const restoreAlarmGlobal = () => {
        
    }

    // *** Use for develop ***
    // useEffect(() => {
    //     if (buildingId) {
    //         console.log('deviceData:', deviceData);
    //         console.log('buildingId', buildingId);
    //         console.log('units', units);
    //         console.log('cardData', cardData);
    //         console.log('alarmData', alarmData);
    //     }
    // });

    return (
        <ApiContext.Provider value={{
            buildingId: buildingId,
            deviceData: deviceData,
            alarmData: alarmData,
            setAlarmData: setAlarmData,
            cardData: cardData,
            units: units
        }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default useApi = () => useContext(ApiContext);