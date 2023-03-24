import axios from 'axios';

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



