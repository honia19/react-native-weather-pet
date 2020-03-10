// @flow
import React, { useEffect, useCallback } from 'react';
import { inject, observer } from 'mobx-react';

import PollutionContentView from './PollutionContentView';

import { API_KEY_POLLUTION } from '../../constants';

const AirPollution = inject('locationStore', 'pollutionAirStore')(observer(({ navigation, locationStore, pollutionAirStore }) => {
  const getAitPollutionData = useCallback(async (): Promise<void> => {
    try {
      const { latitude, longitude } = locationStore.coords;
      const response = await fetch(
        `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${API_KEY_POLLUTION}`
      );
      const pollutionData = await response.json();
      const { current: { pollution } } = pollutionData.data;
      pollutionAirStore.setPollutionData(pollution);
      pollutionAirStore.setCurrentPollutionAirTime(pollution.ts);
    } catch (e) {
      console.error('Error message', e);
    }
  }, [locationStore.city]);

  useEffect(() => {
    getAitPollutionData();
  }, [locationStore.city]);
  return (
    <PollutionContentView pollution={navigation.state.key.toLowerCase()} />
  );
}));

export default AirPollution;
