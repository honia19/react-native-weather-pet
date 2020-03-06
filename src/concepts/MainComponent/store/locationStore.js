// @flow
import {
  observable, action, computed, configure
} from 'mobx';

import * as GeoLocation from 'expo-location';
import * as Permissions from 'expo-permissions';

configure({ enforceActions: 'always' });

type Coords = {
  latitude: string,
  longitude: string
};

class Location {
  @observable location = {};

  @observable city = '';

  @observable country = '';

  @observable errorMessage = '';

  constructor() {
    this.fetchGeoData();
  }

  @computed get coords(): Coords {
    return {
      latitude: this.location.latitude,
      longitude: this.location.longitude
    };
  }

  @action async fetchGeoData(): Promise<void> {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.errorMessage = 'Permission to access location was denied';
    } else {
      const currentLocation = await GeoLocation.getCurrentPositionAsync({});
      this.putLocation(currentLocation);

      const [geoLocation] = await GeoLocation.reverseGeocodeAsync(this.coords);
      this.putGeoLocation(geoLocation);
    }
  }

  @action async fetchGeoDataByAddress(city: string): Promise<void> {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.errorMessage = 'Permission to access location was denied';
    } else {
      const currentLocation = await GeoLocation.geocodeAsync(city);
      const [parseCurrentLocation] = currentLocation;
      this.putLocation(parseCurrentLocation);

      const [geoLocation] = await GeoLocation.reverseGeocodeAsync(this.coords);
      this.putGeoLocation(geoLocation);
    }
  }

  @action putGeoLocation(currentGeoLocation: { [key: string]: any }): void {
    this.city = currentGeoLocation.city;
    this.country = currentGeoLocation.country;
  }

  @action putLocation(currentLocation: { [key: string]: any }): void {
    this.location = currentLocation.coords || currentLocation;
  }
}

const locationStore = new Location();
export default locationStore;
