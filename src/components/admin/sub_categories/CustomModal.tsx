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
  useToast,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AttributeCheckboxAll from '../common/AttributeCheckboxAll';
import Category from '../common/Category';
import Combinations from '../common/Combinations';
import Section from '../common/Section';
import {
  AssignAttribute,
  finalAttributes,
  makeAttributes,
} from '../common/MakeAttributes';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Stepper from '../common/Stepper';
import AlertBox from '../AlertBox';

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
    fetchData,
    setDisable,
    step,
    setStep,
  } = props;

  const [attributes, setAttributes] = useState([]);
  const [combinations, setCombinations] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);
  const toast = useToast();
  const [isOpenAlert, setIsOpen] = React.useState(false);
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
    setDisable(true);
    let getCombinations: any = '';
    if (combinations.length != 0) {
      getCombinations = await finalAttributes(form, combinations);
    }
    form.attributes = getCombinations.data;

    let checkSku = await form.sku.every((item: any) => {
      return getCombinations.sku.includes(item) ? true : false;
    });
    let filterSkuDelete = await form.sku.filter((item: any) => {
      return !getCombinations.sku.includes(item);
    });
    let filterSkuInsert = await getCombinations.sku.filter((item: any) => {
      return !form.sku.includes(item);
    });
    if (checkSku == false || filterSkuDelete != 0 || filterSkuInsert != 0) {
      setIsOpen(true);

      if (checkSku === true) {
        setMessage(
          `This action will insert the below products in the database, are you sure you want to insert them all? List of all SKU's (${filterSkuInsert.toString()})`
        );
      } else {
        if (filterSkuDelete.length != 0 && filterSkuInsert != 0) {
          setMessage(
            `This action will delete the below products from the database : List of all SKU's (${filterSkuDelete.toString()}). This action will insert the below products in the database : List of all SKU's (${filterSkuInsert.toString()}). Are you sure you want to perform this action?`
          );
        } else {
          setMessage(
            `This action will delete the below products from the database, are you sure you want to delete them all? List of all SKU's (${filterSkuDelete.toString()})`
          );
        }
      }
    } else {
      Toast("Can'\t assign, No changes detected", 'error');
    }

    setDisable(false);
  };
  const stepsArray = ['Select Attributes', 'Assign Attributes'];
  const Toast = (title: any, status: any) => {
    toast({
      title: title,
      status: status,
      position: 'top-right',
      duration: 3000,
      isClosable: true,
    });
  };
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
                  {/* <Text>Create Product which you want</Text> */}
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
                  <>
                    <Text fontWeight="bold">
                      Below are the list of all the combinations of the
                      products.
                    </Text>
                    <UnorderedList pl={3} pb={3}>
                      <ListItem fontSize={13}>
                        (Green tick :
                        <Checkbox colorScheme="green" defaultIsChecked={true} />
                        ) The checked one indicates that they are already
                        existing in the database. Uncheck them to delete it from
                        database.
                      </ListItem>
                      <ListItem fontSize={13}>
                        Unchecked one indicates that they do not exists in the
                        database. Please check them to create it in the
                        database.
                      </ListItem>
                    </UnorderedList>

                    <Combinations
                      form={form}
                      setForm={setForm}
                      sub_categories={sub_categories}
                      attributes={attributes}
                      combinations={combinations}
                      setCombinations={setCombinations}
                    />
                  </>
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
      <AlertBox
        isOpen={isOpenAlert}
        setIsOpen={setIsOpen}
        disable={disable}
        message={message}
        setDisable={setDisable}
        setStatus={setStatus}
        form={form}
        onAlertClose={onClose}
      />
    </>
  );
}

export default CustomModal;
