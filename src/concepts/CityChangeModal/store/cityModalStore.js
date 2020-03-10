// @flow
import {
  observable, action, set,
  configure
} from 'mobx';

configure({ enforceActions: 'always' });

type FilterProps = {
  id: string
};

class CityModal {
  @observable cities = observable.array([]);

  @observable modalControl = observable.object({
    modal: false,
    carbon: false,
    nitrogen: false,
    ozone: false,
    sulfur: false
  });

  @action.bound setNewCity(title: string): void {
    const id = new Date().getTime().toString();
    this.cities.push({ id, title });
  }

  @action.bound removeSelectedCity(cityId: string): void {
    const filteredCities = this.cities.filter(({ id }: FilterProps) => id !== cityId);
    this.cities.replace(filteredCities);
  }

  @action.bound setModalOpened(key: string): void {
    set(this.modalControl, key, !this.modalControl[key]);
  }
}

const cityModalStore = new CityModal();

export default cityModalStore;
