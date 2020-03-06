// @flow
import React from 'react';
import styled from 'styled-components/native';

type ItemCityProps = {
  title: string,
  handleRemoveCity: Function,
  handleChangeCity: Function,
  disabled: boolean,
  id: number
};

const ItemCity = ({
  title,
  handleRemoveCity,
  handleChangeCity,
  disabled,
  id
}: ItemCityProps) => (
  <Wrapper>
    <ItemButton
      disabled={disabled}
      onPress={() => handleChangeCity(title)}
      onLongPress={() => handleRemoveCity(id)}
    >
      <ItemText>{title}</ItemText>
    </ItemButton>
  </Wrapper>
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

export default ItemCity;
