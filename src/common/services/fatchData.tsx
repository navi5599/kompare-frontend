import axios from 'axios';
import customerStore from '../stores/customerStore';
import { notifySuccess } from './toast';
import { notifyError } from './toast';


//Get all customers
export const getCustomers = () => {

  let url: string = 'http://localhost:8080/customers';


  return axios.get(url)
    .then((res) => {
      console.log('fetch', res.data)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

//Create customer
export const addCustomer = async () => {


  let url: string = 'http://localhost:8080/customers';

  const bodyData = {
    Email: customerStore.email,
    Name: customerStore.firstName,
    Surname: customerStore.lastName,
    City: customerStore.city,
    Birthday: customerStore.birthday
  }

  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resetBodyData = () => {
    customerStore.email = ''
    customerStore.firstName = ''
    customerStore.lastName = ''
    customerStore.city = ''
    customerStore.birthday = ''
  }

  try {

    const response = await axios.post(url, bodyData, headers)
    if (response.status === 201) {
      console.log('New customer added', response);
      resetBodyData();
      getCustomers();
      notifySuccess('Customer created successfully')
      setTimeout(() => {
        window.open('/', '_self');
      }, 2000)
    } else {
      console.log('Error:', response.status);
    }
  }
  catch (err) {
    console.log(err)
  }
}

//Deelete customer 

export const deleteCustomer = async (id: string) => {

  let url: string = `http://localhost:8080/customers/${id}`;

  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.delete(url, headers)
    if (response.status === 200) {
      console.log('Customer deleted', response);
      notifySuccess('Customer deleted successfully')
      setTimeout(() => {
        window.open('/', '_self');
      }, 2000)

    } else {
      console.log('Error:', response.status);
      notifyError('Something went wrong')
    }

  }
  catch (err) {
    console.log(err)
  }
}

//Calculate insurance 

export const calculateInsurance = (id: string) => {

  console.log('insurance if fetch called')

  let url: string = `http://localhost:8080/customers/${id}/calculate-insurance`;

  return axios.get(url)
    .then((res) => {
      console.log('insurance', res.data.insurancePrice)
      return res.data.insurancePrice
    })
    .catch((err) => {
      console.log(err)
    })


}


