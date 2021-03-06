/* eslint-disable react/no-children-prop */
// @flow
import React from 'react';
import {
  Menu, MenuOptions, MenuOption, MenuTrigger
} from 'react-native-popup-menu';
import styled from 'styled-components/native';
import { BackHandler, Alert } from 'react-native';

type DropdownMenuProps = {
  handleChangeModalVisible: Function
};

export const DropdownMenu = ({ handleChangeModalVisible }: DropdownMenuProps) => {
  const handleShowAlert = (): void => Alert.alert(
    'Exit from Native Weather',
    'Are you sure, that you want to exit from the app?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => BackHandler.exitApp() }
    ],
    { cancelable: false }
  );

  return (
    <Wrapper>
      <Menu>
        <MenuTrigger children={<TextTrigger>Settings</TextTrigger>} />
        <MenuOptions>
          <MenuOption
            onSelect={() => handleChangeModalVisible('modal')}
            text="Change City"
          />
          <MenuOption onSelect={handleShowAlert}>
            <TextWrapper>Exit</TextWrapper>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.View``;

const TextWrapper = styled.Text`
  color: ${(props) => props.theme.textColorRed};
`;

const TextTrigger = styled(TextWrapper)`
  margin-right: 10px;
`;

export default DropdownMenu;
