// @flow
import {
  observable, action, configure, set, computed, get
} from 'mobx';

configure({ enforceActions: 'always' });

type DateFormat = {
  time: string
};

class Polluton {
  @observable currentPollutionAirTime = {};

  @observable pollutionAir = observable.object({});

  @action.bound setPollutionData(data: { [key: string]: any }): void {
    set(this.pollutionAir, { ...data });
  }

  @action.bound setCurrentPollutionAirTime(time: string): void {
    this.currentPollutionAirTime = this.parseDate(time);
  }

  @computed get getAqiusValue(): void {
    return get(this.pollutionAir, 'aqius');
  }

  parseDate = (time: string): DateFormat => {
    const resTime = new Date(time);
    return {
      date: resTime.toISOString().substring(0, 10),
      time: `${resTime.getUTCHours()} : ${resTime.getUTCMinutes()}0 : ${resTime.getUTCSeconds()}0`
    };
  }
}

const pollutionAirStore = new Polluton();

export default pollutionAirStore;
