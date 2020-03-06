// @flow
import React from 'react';
import styled from 'styled-components/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { openBrowserAsync } from 'expo-web-browser';

import AppHeaderButton from '../../shared/AppHeaderButton';

import { LAYER } from './constants';
import ItemLayer from './components/ItemLayer';

const WebWeatherMap = () => {
  const handlePressButton = async (url): Promise<void> => {
    await openBrowserAsync(url);
  };

  return (
    <WrapperBackgroundImage
      source={require('../../../assets/images/weatherOpacity.png')}
    >
      <WrapperBlock>
        <FlatListBlock
          data={LAYER}
          renderItem={({ item: { title } }) => (
            <ItemLayer
              handlePressButton={handlePressButton}
              title={title}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </WrapperBlock>
    </WrapperBackgroundImage>
  );
};

WebWeatherMap.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Weather Map',
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

const WrapperBlock = styled.View`
  flex: 1;
`;

const FlatListBlock = styled.FlatList``;

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default WebWeatherMap;
