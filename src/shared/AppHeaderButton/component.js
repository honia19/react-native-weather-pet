// @flow
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

type AppHeaderButtonProps = {
  getButtonElement: Function,
  onPress: Function,
  iconName: string,
  show: string,
  title: string
};

const AppHeaderButton = ({
  getButtonElement, iconName, onPress, show, title
}: AppHeaderButtonProps) => (
  <HeaderButton
    getButtonElement={getButtonElement}
    iconName={iconName}
    onPress={onPress}
    show={show}
    title={title}
    iconSize={24}
    IconComponent={Ionicons}
    color="orange"
  />
);

export default AppHeaderButton;
