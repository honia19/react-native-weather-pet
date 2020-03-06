// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

const BottomCityView = inject('locationStore', 'cityModalStore')(observer(({ cityModalStore, locationStore }) => (
  <CityWeatherWrapper>
    <CityWeatherWrapper.Button onPress={() => cityModalStore.setModalOpened('modal')}>
      <UnionContainer>
        <CityWeatherWrapper.ImgContainer source={require('../../../../../../../../assets/images/geo.png')} />
        <CityWeatherWrapper.CityContainer>
          <CityWeatherWrapper.CityContainer.text>
            {locationStore.city}
          </CityWeatherWrapper.CityContainer.text>
        </CityWeatherWrapper.CityContainer>
      </UnionContainer>
    </CityWeatherWrapper.Button>
  </CityWeatherWrapper>
)));

const CityWeatherWrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

const UnionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

CityWeatherWrapper.Button = styled.TouchableWithoutFeedback``;

CityWeatherWrapper.ImgContainer = styled.Image`
  width: 30px;
  height: 30px;
`;

CityWeatherWrapper.CityContainer = styled.View``;

CityWeatherWrapper.CityContainer.text = styled.Text`
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: rgba(0, 0, 0, 0.57);
  font-family: 'simonetta-bold';
`;

export default BottomCityView;

