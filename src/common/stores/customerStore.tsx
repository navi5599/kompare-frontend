import {
  observable,
  action,
  makeObservable,
  computed,
  flow,
  runInAction,
} from 'mobx';

import { calculateInsurance } from '../services/fatchData';




class CustomerStore {

  email = '';
  firstName = '';
  lastName = '';
  city = '';
  birthday = '';

  insurance = '';

  constructor() {
    makeObservable(this, {
      email: observable,
      firstName: observable,
      lastName: observable,
      city: observable,
      birthday: observable,
      insurance: observable,
      getInsurance: flow,
    });
  }

  *getInsurance(id: string): any {
    console.log('store insurance called')
    const result = yield calculateInsurance(id)
    this.insurance = result
  }

}

const customerStore = new CustomerStore();
export default customerStore;