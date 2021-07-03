import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Select,
  Text,
  Checkbox,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import { useEffect } from 'react';

function CustomModal(props: any) {
  const {
    isOpen,
    onClose,
    Edit,
    form,
    setForm,
    submitHandle,
    editHandle,
    error,
    categories,
    attributes,
  } = props;
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  console.log(form);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Sub Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select Category"
                name="category"
                id="category"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                value={form.category}
              >
                {categories.map((cat: any) => (
                  <option
                    key={cat?._id}
                    value={cat._id}
                    selected={form.category === cat._id ? true : false}
                  >
                    {capitalize(cat.name)}
                  </option>
                ))}
              </Select>
              {error.category && (
                <Text color="tomato" gap={6}>
                  {error.category}
                </Text>
              )}
            </FormControl>
            <br />
            <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Sub Category</FormLabel>
              <Input
                placeholder="name"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {error.name && (
                <Text color="tomato" gap={6}>
                  {error.name}
                </Text>
              )}
            </FormControl>
            <br />
            <FormControl templateRows="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Attributes</FormLabel>
              <Grid
                pl={6}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
              >
                {attributes.length != 0
                  ? attributes.map((element: any) => (
                      <>
                        <GridItem>
                          <Checkbox
                            size="md"
                            colorScheme="green"
                            key={element._id}
                            name="attribute"
                            className="attributes"
                            value={element._id}
                            defaultIsChecked={
                              form.attributes != ''
                                ? form.attributes.includes(element._id)
                                  ? true
                                  : false
                                : false
                            }
                            onChange={(e) =>
                              setForm({ ...form, attributes: e.target.value })
                            }
                          >
                            {capitalize(element.name)}
                          </Checkbox>
                        </GridItem>
                      </>
                    ))
                  : ''}
              </Grid>
              {error.attributes && (
                <Text color="tomato" gap={6}>
                  {error.attributes}
                </Text>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            {Edit ? (
              <Button colorScheme="blue" onClick={() => editHandle()}>
                Update
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={() => submitHandle()}>
                Save
              </Button>
            )}
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
