/* eslint-disable react/no-array-index-key */
// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

import CityChangeModal from '../../CityChangeModal';
import { getInfoByAqius } from '../utils';

const PollutionContentView = inject('pollutionAirStore', 'cityModalStore', 'locationStore')(observer(({
  pollution, pollutionAirStore, cityModalStore, locationStore
}) => {
  const aqiusValue = pollutionAirStore.getAqiusValue;
  const {
    color, backgroundColor, description, title
  } = getInfoByAqius(aqiusValue);
  return (
    <WrapperBackgroundImage
      source={require('../../../../assets/images/weatherOpacity.png')}
    >
      <WrapperBlock>
        <WrapperBlock.InfoBlock>
          <WrapperBlock.InfoBlock.content>
            {`Current City: ${locationStore.city}`}
          </WrapperBlock.InfoBlock.content>
          <WrapperBlock.InfoBlock.content>
            {`Air Quality Index(AQI): ${aqiusValue}`}
          </WrapperBlock.InfoBlock.content>
          <WrapperBlock.InfoBlock.content>
            {`Levels of Health Concern: ${title}`}
          </WrapperBlock.InfoBlock.content>
          <WrapperBlock.InfoBlock.time>
            {`Last updated time: ${pollutionAirStore.currentPollutionAirTime.time}`}
          </WrapperBlock.InfoBlock.time>
          <WrapperBlock.InfoBlock.date>
            {`Date: ${pollutionAirStore.currentPollutionAirTime.date}`}
          </WrapperBlock.InfoBlock.date>
          <WrapperBlock.InfoBlock.description color={color} backgroundColor={backgroundColor}>
            {`Description Level: ${description[pollution]}`}
          </WrapperBlock.InfoBlock.description>
          <WrapperBlock.InfoBlock.cityButton
            onPress={() => cityModalStore.setModalOpened(pollution)}
          >
            <WrapperBlock.InfoBlock.buttonText>
              Change City
            </WrapperBlock.InfoBlock.buttonText>
          </WrapperBlock.InfoBlock.cityButton>
        </WrapperBlock.InfoBlock>
        {cityModalStore.modalControl[pollution] && (
          <CityChangeModal control={pollution} />
        )}
      </WrapperBlock>
    </WrapperBackgroundImage>
  );
}));

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColorLightness};
`;

const WrapperBlock = styled.View`
  justify-content: space-between;
  align-items: center;
`;

WrapperBlock.InfoBlock = styled.View`
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

WrapperBlock.InfoBlock.content = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${(props) => props.theme.textColorBlack};
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.description = styled.Text`
  font-size: 18px;
  text-align: center;
  background-color: ${(props) => props.theme[props.backgroundColor]};
  color: ${(props) => props.theme[props.color]};
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.buttonText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.textColorWhite};
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.cityButton = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color: ${(props) => props.theme.backgroundColorDarkness};
  margin-right: 20px;
  margin-top: 10px;
`;

WrapperBlock.InfoBlock.time = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.textColorBlack};
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.date = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.textColorBlack};
  font-family: 'simonetta-bold';
`;

export default PollutionContentView;
