import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import './MainPage.css'

import {
  Table,
  Button,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';

import globalStore from '../../common/stores/globalStore';
import customerStore from '../../common/stores/customerStore';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function MainPage() {



  useEffect(() => {
    globalStore.getAllCustomers();
    customerStore.insurance = '';
  }, [])

  return (
    <>
      <Header />


      <div className='main-page'>

        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Customer Name</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {globalStore.customers.map((customer) => (
              <Tr key={customer._id}>
                <Td>
                  <Text fontWeight="bold">
                    {customer.Name} {customer.Surname}
                  </Text>
                </Td>
                <Td>{customer.Email}</Td>
                <Td>{customer.City}</Td>
                <Td>
                  <Link to={`/customers/${customer._id}`}>
                    <Button colorScheme='teal' size='md'>
                      View
                    </Button>
                  </Link>

                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>

    </>

  )
}

export default observer(MainPage)