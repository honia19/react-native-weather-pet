// @flow
import React from 'react';
import { Modal } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';
import isEmpty from 'lodash/isEmpty';

import CityForm from '../CityForm';
import ItemCity from '../ItemCity';

const ModalView = inject(
  'cityModalStore',
  'locationStore'
)(
  observer(({
    cityModalStore, locationStore, control, handleChangeCity
  }) => {
    const handleSetNewCity = cityModalStore.setNewCity;
    const handleRemoveCity = cityModalStore.removeSelectedCity;
    const data = cityModalStore.cities;
    const currentCity = locationStore.city;

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={cityModalStore.modalControl[control]}
      >
        <WrapperBackgroundImage
          source={require('../../../../../assets/images/weatherOpacity.png')}
        >
          <ContentBlock>
            <ContentBlock.CityForm>
              <CityForm handleSetNewCity={handleSetNewCity} />
            </ContentBlock.CityForm>
            <ContentBlock.CityListBlock>
              {!isEmpty(data) && (
                <FlatListBlock
                  data={data}
                  renderItem={({ item: { title, id } }) => (
                    <ItemCity
                      id={id}
                      handleRemoveCity={handleRemoveCity}
                      handleChangeCity={handleChangeCity}
                      title={title}
                      disabled={currentCity === title}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              )}
            </ContentBlock.CityListBlock>
            <WrapperBottomButton>
              <WrapperBottomButton.Close
                onPress={() => cityModalStore.setModalOpened(control)}
              >
                <WrapperBottomButton.ButtonText>
                  Close
                </WrapperBottomButton.ButtonText>
              </WrapperBottomButton.Close>
            </WrapperBottomButton>
          </ContentBlock>
        </WrapperBackgroundImage>
      </Modal>
    );
  })
);

const FlatListBlock = styled.FlatList``;

const WrapperBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColorLightness};
`;

const ContentBlock = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

ContentBlock.CityForm = styled.View`
  width: 100%;
`;

ContentBlock.CityListBlock = styled.View`
  width: 100%;
`;

const WrapperBottomButton = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

WrapperBottomButton.Close = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color: ${(props) => props.theme.backgroundColorBlack};
`;

WrapperBottomButton.ButtonText = styled.Text`
  color: ${(props) => props.theme.textColorWhite};
  font-size: 24px;
  text-align: center;
  font-family: 'simonetta-regular';
`;

export default ModalView;
