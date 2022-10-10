import axios from 'axios';
import { getJwt } from '../Config/auth-config';

// Hämtar byggnadsinformation
export const GetBuilding = async () => {
  try {
    JWT = getJwt();
    const response = await axios.get(
      'https://api.smarthut.se/BuildingInfo/GetMyBuilding',
      { headers: { Authorization: 'Bearer ' + JWT } }
    );
    return response.data;
  } catch (e) {
    console.log('error', e);
  }
};
// Hämtar alla givarenheter i byggnaden
export async function getDevices(id) {
  try {
    JWT = getJwt();
    const response = await axios.get(
      'https://api.smarthut.se/BuildingInfo/' + id + '/true',
      { headers: { Authorization: 'Bearer ' + JWT } }
    );
    return response.data;
  } catch (e) {
    console.log('error', e);
  }
}
// Hämtar alla enheter för de olika givarenheterna
export async function getUnit(id) {
  try {
    JWT = getJwt();
    const response = await axios.get('https://api.smarthut.se/Unit/', {
      headers: { Authorization: 'Bearer ' + JWT },
    });
    return response.data;
  } catch (e) {
    console.log('error', e);
  }
}
//Återställer larm för sensor
export async function restoreAlarm(deviceId, user) {
  try {
    JWT = getJwt();
    await axios({
      headers: { accept: '*/*', Authorization: `Bearer ${JWT}` },
      method: 'post',
      url: 'https://smarthut.azurewebsites.net/api/restorealarm',
      data: JSON.stringify({ deviceId: `${deviceId}`, userName: `${user}` }),
    });
    
  } catch (error) {
    const fel = JSON.stringify(error.response);
    document.getElementById(`dialogtext-${deviceId}`).style.display = 'none';
    document.getElementById(`restoreBtn-${deviceId}`).style.display = 'none';
    document.getElementById(`status-${deviceId}`).style.color = 'red';
    document.getElementById(
      `status-${deviceId}`
    ).innerHTML = `Något gick fel vid återställning av sensor ${deviceId} med felkoden: <br><br>${fel}.`;
  }
}
