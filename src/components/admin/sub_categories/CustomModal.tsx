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
import React, { useState } from 'react';
import sub_categories from '~/pages/admin/sub_categories';
import AttributeCheckboxAll from '../common/AttributeCheckboxAll';
import Category from '../common/Category';
import Section from '../common/Section';

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
    assignHandle,
    sub_categories,
  } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {form.assign === true
              ? 'Assign Attribute'
              : Edit
              ? 'Edit Sub Category'
              : 'Create Sub Category'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {form.assign === true ? (
              <>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <AttributeCheckboxAll
                    form={form}
                    setForm={setForm}
                    sub_categories={sub_categories}
                  />
                  {error.attribute && (
                    <Text color="tomato" gap={6}>
                      {error.attribute}
                    </Text>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <FormLabel>Section</FormLabel>
                  <Section
                    form={form}
                    setForm={setForm}
                    size={'md'}
                    width="100%"
                  />
                  {error.section && (
                    <Text color="tomato" gap={6}>
                      {error.section}
                    </Text>
                  )}
                </FormControl>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <FormLabel>Category</FormLabel>
                  <Category
                    form={form}
                    setForm={setForm}
                    size="md"
                    width="100%"
                  />
                  {error.category && (
                    <Text color="tomato" gap={6}>
                      {error.category}
                    </Text>
                  )}
                </FormControl>
                <br />
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
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
              </>
            )}

            <br />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            {form.assign === true ? (
              <Button colorScheme="blue" onClick={() => assignHandle()}>
                Assign
              </Button>
            ) : Edit ? (
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
