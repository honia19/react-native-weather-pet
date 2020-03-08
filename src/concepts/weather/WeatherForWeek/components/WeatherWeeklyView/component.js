/* eslint-disable camelcase */
// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import isEmpty from 'lodash/isEmpty';

import CurrentWeatherView from './components/CurrentWeatherView';
import BotomCityView from './components/BotomCityView';
import WeatherWeeklyItem from '../../../WeatherWeeklyItem';

const WeatherWeeklyView = inject('weatherWeakStore')(observer(({ navigation, weatherWeakStore }) => {
  const navigateWeatherByHours = (key) => {
    navigation.navigate('WeatherCurrentDay', { key });
  };

  const { key: currentKey } = weatherWeakStore.todayWeather;

  return (
    <WrapperContainer>
      {!isEmpty(weatherWeakStore.weeklyWeather) && (
        <FlatList
          data={weatherWeakStore.weeklyWeather}
          keyExtractor={({ dt }) => dt.toString()}
          renderItem={({
            item: {
              dt, weather, main, key
            }
          }) => (
            <WeatherWeeklyItem
              dt={dt}
              weather={weather}
              minTemp={main.temp_min}
              maxTemp={main.temp_max}
              onPress={() => navigateWeatherByHours(key)}
            />
          )}
          ListHeaderComponent={(
            <CurrentWeatherView
              onPress={() => navigateWeatherByHours(currentKey)}
            />
          )}
          ListFooterComponent={<BotomCityView />}
        />
      )}
    </WrapperContainer>
  );
}));

const WrapperContainer = styled.View`
  justify-content: flex-start;
`;

export default WeatherWeeklyView;
