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
  Text,
} from '@chakra-ui/react';

import React, { useState } from 'react';

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
    disable,
  } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Name</FormLabel>
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
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            {Edit ? (
              <Button
                colorScheme="blue"
                disabled={disable}
                onClick={() => editHandle()}
              >
                Update
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                disabled={disable}
                onClick={() => submitHandle()}
              >
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
