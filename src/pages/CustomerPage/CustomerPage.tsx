import React, { useEffect } from 'react'
import './CustomerPage.css'

import globalStore from '../../common/stores/globalStore';
import { useParams } from 'react-router-dom';

function CustomerPage() {

  const { id } = useParams();

  const customers = globalStore.customers
  const customer = customers.find((c) => {
    return c._id === id
  })

  if (!customer) {
    return (
      <h1>No customer found</h1>
    )
  }


  return (
    <div className='customer-page'>
      <h1>Customer Page</h1>
      <h1>{customer.Name}</h1>
      <h1>{customer.Surname}</h1>
      <h1>{customer.Email}</h1>
      <h1>{customer.City}</h1>

    </div>
  )
}

export default CustomerPage