// @flow
import React from 'react';
import { ToastAndroid } from 'react-native';
import { observer, inject } from 'mobx-react';

import ModalView from './components/ModalVIew';

const CityChangeModal = inject('locationStore')(observer(({ locationStore, control }) => {
  const handleChangeCity = (city: string): void => {
    locationStore.fetchGeoDataByAddress(city);
    ToastAndroid.showWithGravity(
      'City was changed',
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  return (
    <ModalView handleChangeCity={handleChangeCity} control={control} />
  );
}));

export default CityChangeModal;
