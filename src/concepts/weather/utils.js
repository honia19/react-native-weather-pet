// @flow
import { toNumber, toInteger } from 'lodash';

type WeatherProps = {
  key: string,
  dt: string,
  weather: Object,
  main: Object,
  wind: Object,
  rain: Object,
  clouds: Object,
  dtText: string,
  time: string
};

type DateProps = {
  day: string,
  month: string,
  number: string
}

export const generateWeatherStructure = (data: Array<Object>): WeatherProps => (
  data.reduce((acc, currentValue) => {
    const [key, time] = currentValue.dt_txt.split(' ');
    const structure = {
      key,
      time,
      main: currentValue.main,
      dt: currentValue.dt,
      dtTxt: currentValue.dt_txt,
      clouds: currentValue.clouds,
      wind: currentValue.wind,
      rain: currentValue.rain,
      weather: currentValue.weather[0]
    };

    if (!acc[key]) {
      acc[key] = [{ ...structure }];
    } else {
      acc[key].push({ ...structure });
    }
    return acc;
  }, {}));

export const formatDate = (dt: number): DateProps => {
  const [day, month, number] = new Date(dt * 1000).toDateString().split(' ');
  return {
    day, month, number
  };
};

export const formatTemperature = (temp: string): string => {
  const tempValue = toInteger(toNumber(temp) - 273.15);
  return tempValue < 0 ? `${tempValue}` : `+${tempValue}`;
};

export const getIconUrl = (icon: string): string => `http://openweathermap.org/img/w/${icon}.png`;

export const formateCurrentDate = (date: number): string => (
  new Date(date * 1000).toLocaleDateString()
);

