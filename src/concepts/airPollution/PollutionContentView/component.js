/* eslint-disable react/no-array-index-key */
// @flow
import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

import CityChangeModal from '../../CityChangeModal';

const PollutionContentView = inject(
  'pollutionAirStore',
  'cityModalStore',
  'locationStore'
)(
  observer(
    ({
      pollution,
      pollutionAirStore,
      errorText,
      cityModalStore,
      locationStore
    }) => (
      <WrapperBackgroundImage
        source={require('../../../../assets/images/weatherOpacity.png')}
      >
        <WrapperBlock>
          <WrapperBlock.InfoBlock.content>
            {locationStore.city}
          </WrapperBlock.InfoBlock.content>
          {!errorText ? (
            <WrapperBlock.InfoBlock>
              {Object.entries(pollutionAirStore[pollution]).map(
                ([key, { precision, value }]: [string, Object], index: number) => (
                  <Fragment key={key + index}>
                    <WrapperBlock.InfoBlock.content>
                      {`${key}: ${precision}`}
                    </WrapperBlock.InfoBlock.content>
                    <WrapperBlock.InfoBlock.content>
                      {`${key}: ${value}`}
                    </WrapperBlock.InfoBlock.content>
                  </Fragment>
                )
              )}
              <WrapperBlock.InfoBlock.time>
                {pollutionAirStore.currentPollutionAirTime.date}
              </WrapperBlock.InfoBlock.time>
              <WrapperBlock.InfoBlock.date>
                {pollutionAirStore.currentPollutionAirTime.time}
              </WrapperBlock.InfoBlock.date>
              <WrapperBlock.InfoBlock.cityButton
                onPress={() => cityModalStore.setModalOpened(pollution)}
              >
                <WrapperBlock.InfoBlock.buttonText>
                  Change City
                </WrapperBlock.InfoBlock.buttonText>
              </WrapperBlock.InfoBlock.cityButton>
            </WrapperBlock.InfoBlock>
          ) : (
            <WrapperBlock.InfoBlock>
              <WrapperBlock.errorText>
                {errorText.toUpperCase()}
              </WrapperBlock.errorText>
              <WrapperBlock.InfoBlock.cityButton
                onPress={() => cityModalStore.setModalOpened(pollution)}
              >
                <WrapperBlock.InfoBlock.buttonText>
                  Change City
                </WrapperBlock.InfoBlock.buttonText>
              </WrapperBlock.InfoBlock.cityButton>
            </WrapperBlock.InfoBlock>
          )}
          {cityModalStore.modalControl[pollution] && (
            <CityChangeModal control={pollution} />
          )}
        </WrapperBlock>
      </WrapperBackgroundImage>
    )
  )
);

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: rgba(226, 222, 216, 0.7);
`;

const WrapperBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

WrapperBlock.InfoBlock = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

WrapperBlock.InfoBlock.content = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: black;
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.buttonText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: white;
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.cityButton = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color: rgba(220, 153, 23, 0.49);
  margin-right: 20px;
  margin-top: 10px;
`;

WrapperBlock.InfoBlock.time = styled.Text`
  font-size: 14px;
  text-align: center;
  color: black;
  font-family: 'simonetta-bold';
`;

WrapperBlock.InfoBlock.date = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
  font-family: 'simonetta-bold';
`;

WrapperBlock.errorText = styled.Text`
  font-size: 25px;
  text-align: center;
  color: red;
  font-family: 'simonetta-bold';
`;

export default PollutionContentView;
