// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components/native';

const ItemLayer = inject('locationStore')(
  observer(({ title, handlePressButton, locationStore }) => {
    const { latitude, longitude } = locationStore.coords;
    const weatherMapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=${title}&lat=${latitude}&lon=${longitude}&zoom=8`;

    return (
      <Wrapper>
        <ItemButton onPress={() => handlePressButton(weatherMapUrl)}>
          <ItemText>{title.toUpperCase()}</ItemText>
        </ItemButton>
      </Wrapper>
    );
  })
);

const Wrapper = styled.View`
  padding: 10px;
`;

const ItemButton = styled.TouchableOpacity`
  background-color: rgba(220, 153, 23, 0.49);
  width: 100%;
  padding: 20px;
  padding-top: 10px;
`;

const ItemText = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: black;
  font-family: 'simonetta-bold';
`;

export default ItemLayer;
