import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Input,
  Grid,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

function CustomModal(props: any) {
  const {
    isOpen,
    onClose,
    Edit,
    editHandle,
    productData,
    setProductData,
  } = props;
  console.log(productData);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Edit ? (
              <EditForm
                productData={productData}
                setProductData={setProductData}
              />
            ) : (
              <AddForm
                productData={productData}
                setProductData={setProductData}
              />
            )}
            {/* <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <Input placeholder="name" id="name" value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })}/>
                </Grid>
                <br/>
                <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <Input placeholder="price" id="price" value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })}/>
              </Grid>
                <br/>
                <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <Textarea placeholder="About products ..." id="description" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                </Grid> */}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={() => editHandle()}>
              {Edit ? 'Update' : 'Save'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
