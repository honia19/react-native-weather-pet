// @flow
import React, { useEffect, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

import isEmpty from 'lodash/isEmpty';
import { generateWeatherStructure } from '../utils';
import { API_KEY } from '../../../constants';

import DropdownMenu from './components/DropdownMenu';
import WeatherWeeklyView from './components/WeatherWeeklyView';
import CityChangeModal from '../../CityChangeModal';

const WeatherForWeek = inject(
  'locationStore',
  'cityModalStore',
  'weatherWeakStore'
)(
  observer(({
    navigation, locationStore, cityModalStore, weatherWeakStore
  }) => {
    const getLocationAsync = useCallback(async (): Promise<void> => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${locationStore.city}&appid=${API_KEY}`
      );
      const { list } = await response.json();

      const weatherData = generateWeatherStructure(list);

      weatherWeakStore.setWeekWeather(weatherData);
    }, [locationStore.city]);

    useEffect(() => {
      navigation.setParams({
        handleChangeModalVisible: cityModalStore.setModalOpened
      });
    }, [cityModalStore.setModalOpened]);

    useEffect(() => {
      getLocationAsync();
    }, [getLocationAsync]);

    if (isEmpty(weatherWeakStore.weekByWeather)) {
      return (
        <ActivityIndicatorContainer>
          <ActivityIndicatorComponent color="yellow" size="large" />
        </ActivityIndicatorContainer>
      );
    }

    return (
      <WrapperBackgroundImage source={require('../../../../assets/images/weatherOpacity.png')}>
        <WeatherWeeklyView navigation={navigation} />
        {cityModalStore.modalControl.modal && <CityChangeModal control="modal" />}
      </WrapperBackgroundImage>
    );
  })
);

WeatherForWeek.navigationOptions = ({ navigation }) => {
  const handleChangeModalVisible = navigation.getParam(
    'handleChangeModalVisible'
  );
  return {
    headerTitle: 'Weekly Weather',
    headerRight: (
      <DropdownMenu handleChangeModalVisible={handleChangeModalVisible} />
    )
  };
};

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color:  ${(props) => props.theme.backgroundColorLightness};
`;

const ActivityIndicatorComponent = styled.ActivityIndicator``;
const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroungColorInIndicator};
`;

export default WeatherForWeek;
