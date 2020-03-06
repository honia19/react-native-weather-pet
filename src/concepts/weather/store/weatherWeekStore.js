// @flow
import {
  observable, action, configure, set, computed, get
} from 'mobx';
import { find, head } from 'lodash';

configure({ enforceActions: 'always' });

type DetailWeatherProps = {
  key: string,
  dt: string
};

type WeatherProps = {
  key: string,
  dt: string,
  weather: Object,
  main: Object,
  wind: Object,
  rain: Object,
  clouds: Object,
  dtText: string,
  time: string
};

class WeatherWeek {
  @observable weekByWeather = observable.object({});

  @observable detailInfo = observable.object({});

  @action.bound setWeekWeather(data: { [key: string]: any }): void {
    set(this.weekByWeather, { ...data });
  }

  @action.bound setDetailInfo(key: string, dt: string): void {
    set(this.detailInfo, { key, dt });
  }

  @action.bound getDetailWeatherData({ key, dt }: DetailWeatherProps): WeatherProps {
    const temp = get(this.weekByWeather, key);
    return find(temp, { dt });
  }

  @computed get weeklyWeather(): Array<WeatherProps> {
    return Object.entries(this.weekByWeather).slice(1).map(([, value]) => head(value));
  }

  @computed get todayWeather(): WeatherProps {
    return head(head(Object.values(this.weekByWeather)));
  }

  @computed get detailData(): WeatherProps {
    const temp = get(this.weekByWeather, this.detailInfo.key);
    return find(temp, { dt: this.detailInfo.dt });
  }
}

const weatherWeakStore = new WeatherWeek();

export default weatherWeakStore;

