import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import './Header.css'

import globalStore from '../../common/stores/globalStore'

import AddNewCustomer from '../../pages/AddNewCustomer/AddNewCustomer'

function Header() {

  return (
    <div className='header'>

      <Text fontSize='2xl' fontWeight="bold">
        Customers
      </Text>
      <Button onClick={globalStore.handleModal} colorScheme='teal' size='md'>
        Add new Customer
      </Button>
      <AddNewCustomer />


    </div>
  )
}

export default observer(Header);