/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React, { useState } from 'react';
import { Provider } from 'mobx-react';
import { MenuProvider } from 'react-native-popup-menu';
import 'react-native-gesture-handler';

import { AppLoading } from 'expo';
import { cacheFonts } from './src/bootstrup';

import { AppNavigation } from './src/navigation/AppNavigation';
import locationStore from './src/concepts/MainComponent/store/locationStore';
import cityModalStore from './src/concepts/CityChangeModal/store/cityModalStore';
import pollutionAirStore from './src/concepts/airPollution/store/pollutionStore';
import weatherWeakStore from './src/concepts/weather/store/weatherWeekStore';

const stores = {
  locationStore,
  pollutionAirStore,
  cityModalStore,
  weatherWeakStore
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheFonts}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider {...stores}>
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    </Provider>
  );
};

export default App;
