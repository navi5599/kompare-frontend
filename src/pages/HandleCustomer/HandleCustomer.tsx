import React from 'react'
import './HandleCustomer.css'

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
import { updateCustomer } from '../../common/services/fatchData'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'



function HandleCustomer() {

  const { id } = useParams();


  const handleSUbmit = (e: any) => {
    e.preventDefault();
    if (id) {
      updateCustomer(id);
    } else {
      addCustomer();
    }
  }

  return (

    <Modal
      isOpen={globalStore.showModal}
      onClose={globalStore.handleModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {
            id ? 'Edit customer' : 'Add new customer'
          }
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form id='create-form' onSubmit={handleSUbmit}>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                placeholder={customerStore.email || 'Email'}
                size='sm'
                onChange={(e) => customerStore.email = e.target.value} />
            </FormControl>

            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type='text'
                name='first_name'
                placeholder={customerStore.firstName || 'First name'}
                size='sm'
                onChange={(e) => customerStore.firstName = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                type='text'
                name='last_name'
                placeholder={customerStore.lastName || 'Last name'}
                size='sm'
                onChange={(e) => customerStore.lastName = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                type='text'
                name='city'
                placeholder={customerStore.city || 'City'}
                size='sm'
                onChange={(e) => customerStore.city = e.target.value} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Birthday</FormLabel>
              <Input
                type='date'
                name='birthday'
                size='sm'
                onChange={(e) => customerStore.birthday = e.target.value} />
            </FormControl>

          </form>

        </ModalBody>

        <ModalFooter>
          {
            id ?
              <Button type='submit' form='create-form' colorScheme='teal' mr={3} size='sm'>
                Save
              </Button>
              :
              <Button type='submit' form='create-form' colorScheme='teal' mr={3} size='sm'>
                Add new
              </Button>
          }

          <Button onClick={globalStore.handleModal} colorScheme='red' size='sm'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>



  )
}

export default observer(HandleCustomer);