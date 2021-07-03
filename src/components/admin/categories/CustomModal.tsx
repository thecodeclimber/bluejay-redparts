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
  } = props;
  const [sections, setSections] = useState<any>([]);
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  useEffect(() => {
    selectSection();
  }, []);

  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSections(data.data.data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Section</FormLabel>
              <Select
                placeholder="Select Section"
                name="section"
                id="section"
                onChange={(e) => setForm({ ...form, section: e.target.value })}
                value={form.section}
              >
                {sections.map((section: any) => (
                  <option
                    key={section?._id}
                    value={section._id}
                    selected={form.section == section._id ? true : false}
                  >
                    {capitalize(section.name)}
                  </option>
                ))}
              </Select>
              {error.section && (
                <Text color="tomato" gap={6}>
                  {error.section}
                </Text>
              )}
            </FormControl>
            <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
              <FormLabel>Category</FormLabel>
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
