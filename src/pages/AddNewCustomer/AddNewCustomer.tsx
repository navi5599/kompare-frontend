import React from 'react'
import './AddNewCustomer.css'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

import globalStore from '../../common/stores/globalStore'
import customerStore from '../../common/stores/customerStore'
import { addCustomer } from '../../common/services/fatchData'
import { observer } from 'mobx-react-lite';



function AddNewCustomer() {

  const handleSUbmit = (e: any) => {
    e.preventDefault();
    addCustomer();
  }

  return (

    <Modal
      isOpen={globalStore.showModal}
      onClose={globalStore.handleModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new customer</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form id='create-form' onSubmit={handleSUbmit}>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                size='sm'
                onChange={(e) => customerStore.email = e.target.value} />
            </FormControl>

            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type='text'
                name='first_name'
                placeholder='First name'
                size='sm'
                onChange={(e) => customerStore.firstName = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                type='text'
                name='last_name'
                placeholder='Last name'
                size='sm'
                onChange={(e) => customerStore.lastName = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                type='text'
                name='city'
                placeholder='City'
                size='sm'
                onChange={(e) => customerStore.city = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Birthday</FormLabel>
              <Input
                type='date'
                name='birthday'
                placeholder='Birthday'
                size='sm'
                onChange={(e) => customerStore.birthday = e.target.value} />
            </FormControl>

          </form>

        </ModalBody>

        <ModalFooter>
          <Button type='submit' form='create-form' colorScheme='teal' mr={3} size='sm'>
            Add new
          </Button>
          <Button onClick={globalStore.handleModal} colorScheme='red' size='sm'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>



  )
}

export default observer(AddNewCustomer);