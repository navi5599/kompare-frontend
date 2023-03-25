import {
  observable,
  action,
  makeObservable,
  computed,
  flow,
  runInAction,
} from 'mobx';

import { calculateInsurance } from '../services/fatchData';
import globalStore from './globalStore';



class CustomerStore {

  email = '';
  firstName = '';
  lastName = '';
  city = '';
  birthday = '';

  insurance = '';
  showConfirmationModal = false

  errorMessage = '';

  constructor() {
    makeObservable(this, {
      email: observable,
      firstName: observable,
      lastName: observable,
      city: observable,
      birthday: observable,
      insurance: observable,
      showConfirmationModal: observable,
      errorMessage: observable,
      getInsurance: flow,
      handleConfirmationModal: action,
      handleEditModal: action
    });
  }

  *getInsurance(id: string): any {
    const result = yield calculateInsurance(id)
    this.insurance = result
  }

  handleEditModal(customer: any) {
    const setValues = () => {
      this.email = customer.Email
      this.firstName = customer.Name
      this.lastName = customer.Surname
      this.city = customer.City
      this.birthday = customer.Birthday
    }
    runInAction(() => {
      setValues()
      globalStore.showModal = !globalStore.showModal
    })
  }



  handleConfirmationModal() {
    runInAction(() => {
      this.showConfirmationModal = !this.showConfirmationModal
    })
  }

}

const customerStore = new CustomerStore();
export default customerStore;