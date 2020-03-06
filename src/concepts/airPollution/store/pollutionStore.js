// @flow
import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'always' });

type DateFormat = {
  date: string,
  time: string
};

class Polluton {
  @observable currentPollutionAirTime = {};

  @observable carbonPollutonData = {};

  @observable nitrogenPollutonData = {};

  @observable ozonePollutonData = {};

  @observable sulfurPollutonData = {};

  @action.bound setCO2PollutionData(data: { [key: string]: any }): void {
    this.carbonPollutonData = data;
  }

  @action.bound setO3PollutionData(data: { [key: string]: any }): void {
    this.ozonePollutonData = data;
  }

  @action.bound setSO2PollutionData(data: { [key: string]: any }): void {
    this.sulfurPollutonData = data;
  }

  @action.bound setNO2PollutionData(data: { [key: string]: any }): void {
    this.nitrogenPollutonData = data;
  }

  @action.bound setCurrentPollutionAirTime(time: string): void {
    this.currentPollutionAirTime = this.parseData(time);
  }

  parseData = (time: string): DateFormat => {
    const resTime = new Date(time);
    return {
      date: resTime.toISOString().substring(0, 10),
      time: `${resTime.getUTCHours()} : ${resTime.getUTCMinutes()} : ${resTime.getUTCSeconds()}`
    };
  }
}

const pollutionAirStore = new Polluton();

export default pollutionAirStore;
