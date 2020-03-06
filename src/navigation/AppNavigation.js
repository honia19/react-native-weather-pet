/* eslint-disable react/prop-types */
// @flow
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CarbonDataScreen from '../screens/AirPollution/CarbonDataScreen';
import NitrogenDioxideDataScreen from '../screens/AirPollution/NitrogenDioxideDataScreen';
import OzoneDataScreen from '../screens/AirPollution/OzoneDataScreen';
import SulfurDioxideDataScreen from '../screens/AirPollution/SulfurDioxideDataScreen';
import MainScreen from '../screens/MainScreen';
import WeatherForWeekScreen from '../screens/WeatherForWeekScreen';
import WeatherForCurrentDayScreen from '../screens/WeatherForCurrentDayScreen';
import WebWeatherScreen from '../screens/WebWeatherScreen';

const config = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  }
};

const AirPollutionTabNavigator = createMaterialTopTabNavigator(
  {
    Carbon: {
      screen: CarbonDataScreen,
      navigationOptions: {
        tabBarLabel: 'CO',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Nitrogen: {
      screen: NitrogenDioxideDataScreen,
      navigationOptions: {
        tabBarLabel: 'NO2',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Ozone: {
      screen: OzoneDataScreen,
      navigationOptions: {
        tabBarLabel: 'O3',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Sulfur: {
      screen: SulfurDioxideDataScreen,
      navigationOptions: {
        tabBarLabel: 'SO2',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: 'Carbon',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'black',
        borderTopWidth: 0.5,
        borderTopColor: 'grey'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  }
);

const WeatherNavigator = createStackNavigator(
  {
    Main: MainScreen,
    WeatherWeek: WeatherForWeekScreen,
    WeatherCurrentDay: WeatherForCurrentDayScreen
  },
  config
);

const WebWeatherNavigation = createStackNavigator(
  {
    WebWeather: WebWeatherScreen
  },
  config
);

const WeeklyWeatherNavigation = createStackNavigator(
  {
    WebWeather: WeatherForWeekScreen
  },
  config
);

const MainAppNavigator = createDrawerNavigator(
  {
    Weather: {
      screen: WeatherNavigator,
      navigationOptions: {
        drawerLabel: 'Main Page',
        drawerIcon: ({ tintColor }) => (
          <Ionicons color={tintColor} name="ios-home" size={20} />
        )
      }
    },
    WeeklyWeather: {
      screen: WeeklyWeatherNavigation,
      navigationOptions: {
        drawerLabel: 'Weekly Weather',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons color={tintColor} name="weather-cloudy" size={20} />
        )
      }
    },
    Air: {
      screen: AirPollutionTabNavigator,
      navigationOptions: {
        drawerLabel: 'Air Pollution',
        drawerIcon: ({ tintColor }) => (
          <Ionicons color={tintColor} name="ios-settings" size={20} />
        )
      }
    },
    WebWeather: {
      screen: WebWeatherNavigation,
      navigationOptions: {
        drawerLabel: 'Weather Map',
        drawerIcon: ({ tintColor }) => (
          <Ionicons color={tintColor} name="md-map" size={20} />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#E5E5E5',
    contentOptions: {
      activeTintColor: '#cf9b0c',
      labelStyle: {
        fontFamily: 'simonetta-bold'
      }
    }
  }
);

export const AppNavigation = createAppContainer(MainAppNavigator);
