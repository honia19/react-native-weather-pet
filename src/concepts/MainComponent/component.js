// @flow
import React from 'react';
import { observer, inject } from 'mobx-react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components/native';

import AppHeaderButton from '../../shared/AppHeaderButton';

const MainComponent = inject('locationStore')(
  observer(({ navigation, locationStore }) => {
    const redirectToScreen = (): void => {
      navigation.navigate('WeatherWeek');
    };

    return (
      <WrapperBackgroundImage
        source={require('../../../assets/images/weather.png')}
      >
        {!locationStore.errorMessage ? (
          <WrapperView>
            <WrapperView.WeatherTextBlock>
              <WrapperView.WeatherTextBlock.text>
                Weather
              </WrapperView.WeatherTextBlock.text>
              <WrapperView.WeatherTextBlock.countryText>
                {locationStore.country}
              </WrapperView.WeatherTextBlock.countryText>
            </WrapperView.WeatherTextBlock>
            <WrapperView.GeoLocationBlock>
              <WrapperView.GeoLocationBlock.continueText>
                {`${locationStore.city} is your location, tap to "Continue"`}
              </WrapperView.GeoLocationBlock.continueText>
              <WrapperView.GeoLocationBlock.continueButton
                activeOpacity={0.6}
                onPress={redirectToScreen}
              >
                <WrapperView.GeoLocationBlock.continueButtonText>
                  Continue
                </WrapperView.GeoLocationBlock.continueButtonText>
              </WrapperView.GeoLocationBlock.continueButton>
            </WrapperView.GeoLocationBlock>
          </WrapperView>
        ) : (
          <ErrorText>{locationStore.errorMessage}</ErrorText>
        )}
      </WrapperBackgroundImage>
    );
  })
);

MainComponent.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Main Page',
  headerLeft: (
    <HeaderButtons
      HeaderButtonComponent={AppHeaderButton}
      onOverflowMenuPress={() => {}}
    >
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const WrapperView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: flex-end;
`;

WrapperView.GeoLocationBlock = styled.View`
  flex-direction: column;
  width: 200px;
  height: 100px;
  justify-content: flex-start;
  align-items: flex-end;
`;

WrapperView.GeoLocationBlock.continueText = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: black;
  font-family: 'simonetta-bold';
`;

WrapperView.GeoLocationBlock.continueButtonText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: white;
  font-family: 'simonetta-bold';
`;

WrapperView.GeoLocationBlock.continueButton = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color: rgba(220, 153, 23, 0.49);
  margin-right: 20px;
  margin-top: 10px;
`;

WrapperView.WeatherTextBlock = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: flex-start;
  align-items: flex-end;
`;

WrapperView.WeatherTextBlock.text = styled.Text`
  font-size: 36px;
  color: white;
  margin-right: 47px;
  font-family: 'simonetta-bold';
`;

WrapperView.WeatherTextBlock.countryText = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.57);
  margin-right: 30px;
  font-family: 'simonetta-bold';
`;

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const ErrorText = styled.Text`
  color: red;
`;

export default MainComponent;
