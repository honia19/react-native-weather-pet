/* eslint-disable camelcase */
// @flow
import React, { useState } from 'react';
import { get } from 'mobx';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

import WeatherWeeklyItem from '../WeatherWeeklyItem';
import DetailWeatherModal from '../DetailWeatherModal';

const WeatherCurrentDay = inject('weatherWeakStore')(observer(({ navigation, weatherWeakStore }) => {
  const [isModalOpened, setModalOpened] = useState(false);

  const { key } = navigation.state.params;
  const data = get(weatherWeakStore.weekByWeather, key);

  const openDetailWeatherModal = (id, dt) => {
    weatherWeakStore.setDetailInfo(id, dt);
    setModalOpened(true);
  };

  return (
    <WrapperBackgroundImage source={require('../../../../assets/images/weatherOpacity.png')}>
      <Wrapper>
        <FlatListComponent
          data={data}
          keyExtractor={({ dt }) => dt.toString()}
          renderItem={({
            item: {
              dt, time, key: id, main: { temp_min, temp_max }, weather
            }
          }) => (
            <WeatherWeeklyItem
              id={id}
              dt={dt}
              weather={weather}
              minTemp={temp_min}
              maxTemp={temp_max}
              time={time}
              onPress={() => openDetailWeatherModal(id, dt)}
            />
          )}
        />
        {isModalOpened && (
        <DetailWeatherModal
          isModalOpened={isModalOpened}
          setModalOpened={setModalOpened}
        />
        )}
      </Wrapper>
    </WrapperBackgroundImage>
  );
}));

WeatherCurrentDay.navigationOptions = {
  headerTitle: 'Weather for day'
};

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: rgba(226, 222, 216, 0.7);
`;

const FlatListComponent = styled.FlatList``;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export default WeatherCurrentDay;
