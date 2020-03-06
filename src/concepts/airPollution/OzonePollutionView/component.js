// @flow
import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import { inject, observer } from 'mobx-react';

import { API_KEY } from '../../../constants';

import PollutionContentView from '../PollutionContentView';

const OzonePollutionView = inject(
  'locationStore',
  'pollutionAirStore'
)(
  observer(({ locationStore, pollutionAirStore }) => {
    const [errorText, setErrorMessage] = useState('');

    const setPullutionInfo = (dataPollution: Object): void => {
      const errorMsg = get(dataPollution, 'message');
      if (errorMsg) {
        setErrorMessage(errorMsg);
      } else {
        pollutionAirStore.setCurrentPollutionAirTime(dataPollution.time);
        pollutionAirStore.setO3PollutionData(dataPollution.data);
      }
    };

    const getAitPollutionData = async (): Promise<void> => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/pollution/v1/o3/0.0,10.0/2016-03-01Z.json?appid=${API_KEY}`
        );
        const dataPollution = await response.json();
        setPullutionInfo(dataPollution);
      } catch (e) {
        setErrorMessage(e);
      }
    };

    useEffect(() => {
      getAitPollutionData();
    }, [locationStore.city]);

    return (
      <PollutionContentView
        pollution="ozonePollutonData"
        errorText={errorText}
      />
    );
  })
);

export default OzonePollutionView;
