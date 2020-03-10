// @flow
import find from 'lodash/find';

import { DESCRIBE_POLLUTION } from '../../constants/description';

type AqiusDescription = {
  ozone: string,
  carbon: string,
  particle: string,
  sulfur: string,
};

type AqiusType = {
  title: string,
  backgroundColor: string,
  color: string,
  description: AqiusDescription
};

export const getInfoByAqius = (value: number): AqiusType => {
  if (value <= 50) {
    return find(DESCRIBE_POLLUTION, { title: 'Good' });
  } if (value >= 51 && value <= 100) {
    return find(DESCRIBE_POLLUTION, { title: 'Moderate' });
  } if (value >= 101 && value <= 150) {
    return find(DESCRIBE_POLLUTION, { title: 'Unhealthy for Sensitive Groups' });
  } if (value >= 151 && value <= 200) {
    return find(DESCRIBE_POLLUTION, { title: 'Unhealthy' });
  } if (value >= 201 && value <= 300) {
    return find(DESCRIBE_POLLUTION, { title: 'Very Unhealthy' });
  }

  return find(DESCRIBE_POLLUTION, { title: 'Hazardous' });
};
