import axios from 'axios';
import customerStore from '../stores/customerStore';
import { notifySuccess } from './toast';
import { notifyError } from './toast';
import { resetStates } from './resetStates';
import globalStore from '../stores/globalStore';

//Data to use in both create and update requests 




//REQUESTS TO BACKEND

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

  let url: string = 'http://localhost:8080/customers';

  try {

    const response = await axios.post(url, bodyData, headers)
    if (response.status === 201) {
      console.log('New customer added', response);
      resetStates();
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


//Update customer 

export const updateCustomer = async (id: string) => {

  const bodyData = {
    Email: customerStore.email,
    Name: customerStore.firstName,
    Surname: customerStore.lastName,
    City: customerStore.city,
    Birthday: customerStore.birthday
  }

  const filteredData = Object.fromEntries(
    Object.entries(bodyData).filter(([key, value]) => value !== "")
  );

  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let url: string = `http://localhost:8080/customers/${id}`;


  try {
    const response = await axios.patch(url, filteredData, headers)
    if (response.status === 200) {
      console.log(' customer updated', response);
      resetStates();
      getCustomers();
      notifySuccess('Customer updated successfully')
      setTimeout(() => {
        window.open(`/customers/${id}`, '_self');
      }, 2000)
    } else {
      console.log('Error:', response.status);
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


