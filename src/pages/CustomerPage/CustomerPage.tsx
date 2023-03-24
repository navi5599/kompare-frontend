import React, { useEffect } from 'react'
import './CustomerPage.css'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


import globalStore from '../../common/stores/globalStore';
import customerStore from '../../common/stores/customerStore';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HandleCustomer from '../HandleCustomer/HandleCustomer';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

function CustomerPage() {

  const { id } = useParams();


  useEffect(() => {
    globalStore.getAllCustomers()
  }, [])

  //Find customer with given id
  const customers = globalStore.customers
  const customer = customers.find((c) => {
    return c._id === id
  })

  //Refactor birthday date
  const isoDate = customer?.Birthday;
  const date = isoDate ? new Date(isoDate) : null;
  let formattedDate = null;

  if (date !== null) {
    formattedDate = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }



  if (!customer) {
    return (
      <h1>No customer found</h1>
    )
  }


  return (
    <div className='customer-page'>
      <Link to='/'>
        <Button variant='outline' colorScheme='gray' my='5' size='sm' className='back_btn'>Go back</Button>
      </Link>

      <HandleCustomer />
      <ConfirmationModal customer={customer} />

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className='card'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
          alt='User'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{customer.Name}  {customer.Surname}</Heading>

            <Text py='1'>
              City: {customer.City}
            </Text>
            <Text py='1'>
              Email: {customer.Email}
            </Text>
            <Text py='1'>
              Birthday: {formattedDate}
            </Text>
            <Text py='1'>
              Insurance:{' '}
              {
                !customerStore.insurance ?
                  <Button
                    variant='outline'
                    colorScheme='gray'
                    mx='2'
                    size='sm'
                    onClick={() => customerStore.getInsurance(customer._id)}>
                    Calculate
                  </Button>
                  : `${customerStore.insurance}  EUR/Month`
              }

            </Text>

          </CardBody>

          <CardFooter>
            <Button
              variant='outline'
              colorScheme='teal'
              mx='1' size='sm'
              onClick={() => customerStore.handleEditModal(customer)}>
              Edit
            </Button>
            <Button
              variant='solid'
              colorScheme='red'
              size='sm'
              onClick={() => customerStore.handleConfirmationModal()}>
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>

    </div>
  )
}

export default observer(CustomerPage)