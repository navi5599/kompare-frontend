import {
  observable,
  action,
  makeObservable,
  computed,
  flow,
  runInAction,
} from 'mobx';

import { getCustomers } from '../services/fatchData';


interface Customer {
  _id: string;
  Email: string;
  Name: string;
  Surname: string;
  City: string;
  Birthday: Date;
}

class GlobalStore {

  customers: Customer[] = [];


  constructor() {
    makeObservable(this, {
      customers: observable,
      getAllCustomers: flow,
    });
  }

  *getAllCustomers(): any {
    const customers = yield getCustomers();
    this.customers = customers;
  }

}

const globalStore = new GlobalStore();
export default globalStore;