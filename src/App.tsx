import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import './App.css'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';

import globalStore from './common/stores/globalStore'

function App() {

  useEffect(() => {
    globalStore.getAllCustomers();
  }, [])



  return (
    <div className="App">
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
              <Td>Button</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );

  // return (
  //   <div className="App">
  //     <h1>Hello</h1>
  //     {
  //       globalStore.customers.map((customer) => {
  //         return (
  //           <ul>
  //             <li key={customer._id}>
  //               {customer.Name}
  //             </li>
  //           </ul>
  //         )
  //       })
  //     }
  //   </div>
  // )
}

export default observer(App)
