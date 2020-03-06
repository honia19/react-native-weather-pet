// @flow
import React from 'react';
import { Modal } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';

import DescriptionSection from './components/DescriptionSection';

import {
  formateCurrentDate, formatDate, formatTemperature, getIconUrl
} from '../utils';

const DetailWeatherModal = inject('weatherWeakStore', 'locationStore')(observer(({
  weatherWeakStore, isModalOpened, setModalOpened, locationStore
}) => {
  const { weather, dt, main } = weatherWeakStore.detailData;
  const imageUrl = getIconUrl(weather.icon);
  const { day } = formatDate(dt);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isModalOpened}
    >
      <WrapperBackgroundImage
        source={require('../../../../assets/images/weatherOpacity.png')}
      >
        <Wrapper>
          <Wrapper.TodayDate>{`Today is ${formateCurrentDate(dt)}`}</Wrapper.TodayDate>
          <Wrapper.ImageCity>
            <Wrapper.ImageCity.img source={require('../../../../assets/images/city-marker.png')} />
            <Wrapper.ImageCity.cityText>{locationStore.city}</Wrapper.ImageCity.cityText>
          </Wrapper.ImageCity>
          <Wrapper.WeatherDescription>
            {`Today is ${weather.description} ${day}`}
          </Wrapper.WeatherDescription>
          <Temperature>
            <Temperature.ImageContainer>
              <Temperature.ImageIcon
                source={{ uri: imageUrl }}
              />
            </Temperature.ImageContainer>
            <Temperature.TemperatureData>
              <Temperature.TemperatureData.prefixText>Min</Temperature.TemperatureData.prefixText>
              <Temperature.TemperatureData.degreesText>{`${formatTemperature(main.temp_min)}°C`}</Temperature.TemperatureData.degreesText>
            </Temperature.TemperatureData>
            <Temperature.TemperatureData>
              <Temperature.TemperatureData.prefixText>Max</Temperature.TemperatureData.prefixText>
              <Temperature.TemperatureData.degreesText>{`${formatTemperature(main.temp_max)}°C`}</Temperature.TemperatureData.degreesText>
            </Temperature.TemperatureData>
          </Temperature>
          <DescriptionSection descriptionData={weatherWeakStore.detailData} />
          <WrapperBottomButton>
            <WrapperBottomButton.Close onPress={() => setModalOpened(false)}>
              <WrapperBottomButton.ButtonText>Close</WrapperBottomButton.ButtonText>
            </WrapperBottomButton.Close>
          </WrapperBottomButton>
        </Wrapper>
      </WrapperBackgroundImage>
    </Modal>
  );
}));

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Wrapper = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Temperature = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Description = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const WrapperBottomButton = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

Description.UnionBlock = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

Temperature.ImageContainer = styled.View`
  width: 100px;
  height: 100px;
`;

Temperature.ImageIcon = styled.Image`
  width: 100px;
  height: 100px;
`;

Wrapper.TodayDate = styled.Text`
  width: 100%;
  font-size: 36px;
  line-height: 42px;
  font-family: 'simonetta-regular';
  text-align: center;
  color: black;
`;

Wrapper.ImageCity = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

Temperature.TemperatureData = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Temperature.TemperatureData.prefixText = styled(Wrapper.TodayDate)`
  font-size: 24px;
  line-height: 28px;
`;

Temperature.TemperatureData.degreesText = styled(Wrapper.TodayDate)`
  font-size: 36px;
  line-height: 42px;
`;

Wrapper.WeatherDescription = styled(Wrapper.TodayDate)`
  font-size: 24px;
  line-height: 28px;
`;

WrapperBottomButton.Close = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color: black;
`;

WrapperBottomButton.ButtonText = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;
  font-family: 'simonetta-regular';
`;

Wrapper.ImageCity.img = styled.Image``;
Wrapper.ImageCity.cityText = styled(Wrapper.TodayDate)`
  font-family: 'simonetta-bold';
  font-size: 36px;
  line-height: 42px;
`;

Description.FistRow = styled(Wrapper.TodayDate)`
  font-family: 'simonetta-bold';
  font-size: 36px;
  line-height: 42px;
`;
Description.SecondRow = styled(Wrapper.TodayDate)`
  font-family: 'simonetta-bold';
  font-size: 36px;
  line-height: 42px;
`;

Wrapper.Temperature = Temperature;
Wrapper.BottomButton = WrapperBottomButton;

export default DetailWeatherModal;
