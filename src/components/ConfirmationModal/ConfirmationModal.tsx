import React from 'react'
import './ConfirmationModal.css'
import customerStore from '../../common/stores/customerStore'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { deleteCustomer } from '../../common/services/fatchData';


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'

function ConfirmationModal(props: any) {


  const { customer } = props;

  return (
    <div>
      <Modal isOpen={customerStore.showConfirmationModal} onClose={() => customerStore.handleConfirmationModal()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deleting customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This action is permanent.Are you sure ?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => deleteCustomer(customer._id)}>
              Yes
            </Button>
            <Button variant='outline' colorScheme='teal' onClick={() => customerStore.handleConfirmationModal()}>I will think about it</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default observer(ConfirmationModal)