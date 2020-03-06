// @flow
import React from 'react';
import styled from 'styled-components/native';

import { formatTemperature } from '../../../utils';

type ConcrentDescription = {
  main: Object, wind: Object
};

type DescriptionSectionProps = {
  descriptionData: ConcrentDescription
};

const DescriptionSection = ({ descriptionData: { main, wind } }: DescriptionSectionProps) => (
  <Description>
    <Description.UnionBlock>
      <Description.FistRow>
        Real feel
      </Description.FistRow>
      <Description.SecondRow>
        {`${formatTemperature(main.temp)}°C`}
      </Description.SecondRow>
    </Description.UnionBlock>
    <Description.UnionBlock>
      <Description.FistRow>
        Wind
      </Description.FistRow>
      <Description.SecondRow>
        {`${wind.speed} m/s, w`}
      </Description.SecondRow>
    </Description.UnionBlock>
    <Description.UnionBlock>
      <Description.FistRow>
        Pressure
      </Description.FistRow>
      <Description.SecondRow>
        {`${main.pressure} mmHg`}
      </Description.SecondRow>
    </Description.UnionBlock>
    <Description.UnionBlock>
      <Description.FistRow>
        Humidity
      </Description.FistRow>
      <Description.SecondRow>
        {`${main.humidity}%`}
      </Description.SecondRow>
    </Description.UnionBlock>
  </Description>
);

const Description = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

Description.UnionBlock = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

Description.FistRow = styled.Text`
  width: 100%;
  font-size: 36px;
  line-height: 42px;
  font-family: 'simonetta-regular';
  text-align: center;
  color: black;
`;
Description.SecondRow = styled(Description.FistRow)``;

export default DescriptionSection;
