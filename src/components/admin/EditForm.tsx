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

function EditForm(props: any) {
  const { productData, setProductData } = props;

  return (
    <>
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="name"
          id="name"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Price</FormLabel>
        <Input
          placeholder="price"
          id="price"
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="About products ..."
          id="description"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
        />
      </FormControl>
    </>
  );
}

export default EditForm;
