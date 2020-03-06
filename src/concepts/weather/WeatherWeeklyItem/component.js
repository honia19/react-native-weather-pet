// @flow
import React from 'react';
import styled from 'styled-components/native';

import { formatDate, formatTemperature, getIconUrl } from '../utils';

type WeatherWeeklyItemProps = {
  dt: number,
  minTemp: string,
  maxTemp: string,
  weather: { [key: string]: any },
  onPress: Function,
  time?: string
};

const WeatherWeeklyItem = ({
  dt, minTemp, maxTemp, weather, onPress, time
}: WeatherWeeklyItemProps) => {
  const imageUrl = getIconUrl(weather.icon);
  const { day, month, number } = formatDate(dt);
  const isWeekendDay = day === 'Sat' || day === 'Sun';

  return (
    <MainWrapper>
      <TouchableHighlightContainer onPress={onPress}>
        <Wrapper>
          <DateContainer>
            <DateContainer.numberDateText>
              {`${number} ${month}`}
            </DateContainer.numberDateText>
            <DateContainer.dayDateText
              isWeekendDay={isWeekendDay}
            >
              {day}
            </DateContainer.dayDateText>
            {time && (
            <DateContainer.dayDateText>
              {time}
            </DateContainer.dayDateText>
            )}
          </DateContainer>
          <ImageContainer>
            <ImageIcon
              source={{ uri: imageUrl }}
            />
          </ImageContainer>
          <Temperature>
            <Temperature.prefixText>min</Temperature.prefixText>
            <Temperature.degreesText>{`${formatTemperature(minTemp)}°C`}</Temperature.degreesText>
          </Temperature>
          <Temperature>
            <Temperature.prefixText>max</Temperature.prefixText>
            <Temperature.degreesText>{`${formatTemperature(maxTemp)}°C`}</Temperature.degreesText>
          </Temperature>
        </Wrapper>
      </TouchableHighlightContainer>
    </MainWrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MainWrapper = styled.View`
  padding: 10px;
`;

const TouchableHighlightContainer = styled.TouchableHighlight`
  background-color: rgba(226, 222, 216, 0.6);
`;

const DateContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: black;
  font-family: 'simonetta-regular';
`;

const ImageContainer = styled.View`
  width: 75px;
  height: 75px;
`;

const ImageIcon = styled.Image`
  width: 75px;
  height: 75px;
`;

const Temperature = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

DateContainer.numberDateText = styled(TextStyle)``;

DateContainer.dayDateText = styled(TextStyle)`
  color: ${(props) => (props.isWeekendDay ? 'red' : 'black')};
`;

Temperature.prefixText = styled(TextStyle)``;

Temperature.degreesText = styled(TextStyle)``;

Wrapper.DataDay = DateContainer;
Wrapper.Temperature = Temperature;

WeatherWeeklyItem.defaultProps = {
  time: null
};

export default WeatherWeeklyItem;

