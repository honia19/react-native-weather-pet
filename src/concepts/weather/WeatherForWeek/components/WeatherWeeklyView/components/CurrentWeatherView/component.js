/* eslint-disable camelcase */
// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

import { formatDate, formatTemperature, getIconUrl } from '../../../../../utils';

const CurrentWeatherView = inject('weatherWeakStore')(observer(({ weatherWeakStore, onPress }) => {
  const imageUri = getIconUrl(weatherWeakStore.todayWeather.weather.icon);
  const date = formatDate(weatherWeakStore.todayWeather.dt);
  const bigTemperature = formatTemperature(weatherWeakStore.todayWeather.main.temp);
  const feelLikeTemperature = formatTemperature(weatherWeakStore.todayWeather.main.feels_like);
  return (
    <TouchableNativeFeedbackContainer onPress={onPress}>
      <DetailContent>
        <Temperature>
          <Temperature.Date>{`${date.month} ${date.number}`}</Temperature.Date>
          <Temperature.BigTemperature>{`${bigTemperature}°C`}</Temperature.BigTemperature>
          <Temperature.FeelsLikeTemperature>{`feels like ${feelLikeTemperature}°C`}</Temperature.FeelsLikeTemperature>
        </Temperature>
        <WeatherIcon>
          <WeatherIcon.Img source={{ uri: imageUri }} />
        </WeatherIcon>
      </DetailContent>
    </TouchableNativeFeedbackContainer>
  );
}));

const TouchableNativeFeedbackContainer = styled.TouchableNativeFeedback``;

const Temperature = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WeatherIcon = styled.View`
  width: 100px;
  height: 100px;
`;

const DetailContent = styled.View`
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
`;

Temperature.Date = styled.Text`
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: black;
`;

Temperature.BigTemperature = styled.Text`
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  color: black;
`;

Temperature.FeelsLikeTemperature = styled(Temperature.Date)`
  font-size: 15px;
  line-height: 20px;
`;

WeatherIcon.Img = styled.Image`
  width: 100px;
  height: 100px;
`;

DetailContent.ImageContainer = WeatherIcon;
DetailContent.Temperature = Temperature;

export default CurrentWeatherView;

