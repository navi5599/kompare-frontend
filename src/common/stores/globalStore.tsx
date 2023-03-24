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
  showModal = false;


  constructor() {
    makeObservable(this, {
      customers: observable,
      showModal: observable,
      getAllCustomers: flow,
      handleModal: action,
    });
  }

  *getAllCustomers(): any {
    const customers = yield getCustomers();
    this.customers = customers;
  }

  handleModal = () => {
    runInAction(() => {
      this.showModal = !this.showModal;
    })
  }



}

const globalStore = new GlobalStore();
export default globalStore;