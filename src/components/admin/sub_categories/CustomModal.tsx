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
  Flex,
  Stack,
  VStack,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AttributeCheckboxAll from '../common/AttributeCheckboxAll';
import Category from '../common/Category';
import Combinations from '../common/Combinations';
import Section from '../common/Section';
import { finalAttributes, makeAttributes } from '../common/MakeAttributes';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Stepper from '../common/Stepper';

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
    sub_categories,
    disable,
  } = props;
  const [step, setStep] = useState(1);
  const [attributes, setAttributes] = useState([]);
  const [combinations, setCombinations] = useState([]);
  const handleClick = async (clickType: any) => {
    let attr: any = await makeAttributes();
    setAttributes(attr);
    let newStep = step;
    clickType === 'next' ? newStep++ : newStep--;
    if (newStep > 0 && newStep <= 5) {
      setStep(newStep);
    }
  };
  const assignHandle = async () => {
    let getCombinations: any = '';
    if (combinations.length != 0) {
      getCombinations = await finalAttributes(form, combinations);
    }
    console.log(getCombinations);
  };
  const stepsArray = ['Select Attributes', 'Assign Attributes'];
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {form.assign === true ? (
              step == 1 ? (
                'Select Attributes'
              ) : (
                <>
                  <Button
                    size="sm"
                    mr={2}
                    disabled={step == 1 ? true : false}
                    onClick={(e) => handleClick('true')}
                  >
                    <ArrowBackIcon />
                  </Button>
                  <Text>Create Product which you want</Text>
                </>
              )
            ) : Edit ? (
              'Edit Sub Category'
            ) : (
              'Create Sub Category'
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {form.assign === true ? (
              <>
                <div className="stepper-container-horizontal">
                  <Stepper
                    direction="horizontal"
                    currentStepNumber={step - 1}
                    steps={stepsArray}
                    stepColor="green"
                  />
                </div>
                {step === 1 ? (
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
                  <Combinations
                    form={form}
                    setForm={setForm}
                    sub_categories={sub_categories}
                    attributes={attributes}
                    combinations={combinations}
                    setCombinations={setCombinations}
                  />
                )}
                <Stack
                  spacing={2}
                  mt={2}
                  direction="row"
                  align="center"
                ></Stack>
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
              step == 1 ? (
                <Button
                  colorScheme="blue"
                  mr={2}
                  onClick={(e) => handleClick('next')}
                >
                  Next
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  disabled={disable}
                  onClick={() => assignHandle()}
                >
                  Assign
                </Button>
              )
            ) : Edit ? (
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
