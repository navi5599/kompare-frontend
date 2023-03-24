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
  useDisclosure,
  Button,
  ModalProps
} from '@chakra-ui/react'

import globalStore from '../../common/stores/globalStore'
import { observer } from 'mobx-react-lite';



function AddNewCustomer() {

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
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='teal' mr={3}>
            Add new
          </Button>
          <Button onClick={globalStore.handleModal} colorScheme='red'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>



  )
}

export default observer(AddNewCustomer);