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
import { Col, FormGroup, Label } from 'reactstrap';
function CustomModal(props) {
  const {
    isOpen,
    onClose,
    Edit,
    form,
    setForm,
    submitHandle,
    editHandle,
    error, disable
  } = props;
  let value = { "id": "-1", "value": "" };
  const [talbeRows, setRows] = useState({
    options: [value]
  });
  useEffect(() => {
    form.value.length > 0 ? setRows({ options: form.value }) : setRows({ options: [value] });
  }, [form.value])
  const handleOptionsChange = (index, e) => {
    let { id, value } = e.target;
    let stateOptionsClone = JSON.parse(JSON.stringify(talbeRows.options));
    stateOptionsClone[index].value = value;
    setRows({ options: stateOptionsClone });
  }
  const handleDelete = (index, e) => {
    let stateClone = JSON.parse(JSON.stringify(talbeRows.options));
    if (talbeRows.options.length > 1) {
      stateClone.splice(index, 1);
      setRows({ options: stateClone });
    }
    e.preventDefault();
  }

  const handleClick = (e) => {
    let stateClone = JSON.parse(JSON.stringify(talbeRows));
    stateClone.options.push(value);
    setRows({ options: stateClone.options });
    e.preventDefault();
  }

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      handleClick(e);

    }
  }
  form.val = talbeRows.options;
  const customRow = (options) => {
    const listItems = options.map((cusRow, index) =>
      <FormGroup row key={index} data={index}>
        <Col sm={7}>
          <Input name="value" className="value" placeholder="value" value={cusRow.value}
            onChange={(e) => handleOptionsChange(index, e)} onKeyPress={(e) => handleKeypress(e)} />
        </Col>
        <Col sm={4}>
          <Button colorScheme="green" isDisabled={cusRow.value == '' || index != options.length - 1 ? true : false} onClick={handleClick}>
            <AddIcon /></Button>&nbsp;&nbsp;
          <Button colorScheme="red" className="btn btn-remove" onClick={(e) => handleDelete(index, e)}><MinusIcon /></Button>
        </Col>

      </FormGroup>
    );
    return (
      listItems
    )
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
              {customRow(talbeRows.options)}
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
              <Button colorScheme="blue" disabled={disable} onClick={() => editHandle()}>
                Update
              </Button>
            ) : (
              <Button colorScheme="blue" disabled={disable} onClick={() => submitHandle()}>
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
