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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import * as $ from 'jquery'
function CustomModal(props) {
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
  const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
  let value = [{ index: 0, value: '' }];
  const [talbeRows, setRows] = useState(value);
  var tableRowIndex = Math.floor((Math.random() * 100) + 1);
  let index = talbeRows.length;
  // Receive data from TableRow 
  useEffect(() => {
    form.value.length > 1 ? setRows(form.value) : value;
  }, [form.value])
  const handleChange = data => {
    talbeRows[data.index] = data
  }


  // Add New Table Row
  const addNewRow = () => {
    var updatedRows = [...talbeRows]
    updatedRows[index] = { index: tableRowIndex, value: "" }
    setRows(updatedRows)
  }

  // Remove Table row if rows are count is more than 1
  const deleteRow = (index) => {
    if ($('#value-body tr').length > 1) {
      $('#' + index).remove();
    }

  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Attributes</ModalHeader>
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
            <br />
            <FormControl
              templateRows="repeat(1, 1fr)"
              gap={6}
              isRequired
              className="values"
            >
              <FormLabel>Attributes Value</FormLabel>
              <Table variant="simple">
                <Tbody id="value-body">

                  {

                    talbeRows.map((row, index) => {
                      if (row)
                        return (
                          <TableRow key={index} row={row} handleDataChange={handleChange} deleteRow={deleteRow}></TableRow>
                        )
                    })
                  }

                </Tbody>
              </Table>
              <br />
              <Button colorScheme="green" onClick={() => addNewRow()}>
                <AddIcon />
              </Button>
              {error.value && (
                <Text color="tomato" gap={6}>
                  {error.value}
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
function TableRow({ row, handleDataChange, deleteRow }) {
  let index = row.index;
  const [value, setValue] = useState(row.value);

  const updateValues = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue)
    handleDataChange({
      index: index,
      value: value
    })
  }

  const removeRow = () => {
    deleteRow(index)
  }

  return (
    <Tr id={index}>
      <Td>
        <Input name="value" className="value" placeholder="value" value={value} onChange={updateValues} />
      </Td>
      <Td><Button colorScheme="red" className="btn btn-remove" onClick={removeRow}><MinusIcon /></Button></Td>
    </Tr>
  )
}
export default CustomModal;
