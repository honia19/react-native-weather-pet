/* eslint-disable global-require */
import * as Font from 'expo-font';

export const cacheFonts = async () => {
  await Font.loadAsync({
    'simonetta-bold': require('../assets/fonts/Simonetta-Black.ttf'),
    'simonetta-regular': require('../assets/fonts/Simonetta-Regular.ttf')
  });
};
