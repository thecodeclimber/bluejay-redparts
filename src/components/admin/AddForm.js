import {
  Button,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  NumberInputStepper,
  Stack,
  Box,
  Grid,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ModalBody,
  ModalFooter,
  GridItem,
  Text, useToast
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import * as $ from 'jquery';
import Section from './common/Section';
import Category from './common/Category';
import SubCategory from './common/SubCategory';
import AttributeCheckbox from './common/AttributeCheckbox';
function AddForm(props) {
  const [productData, setProductData] = useState({
    name: '',
    compareAtPrice: '',
    isFeatured: false,
    price: '',
    description: '',
  });
  let errors = {};
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    section: '',
    category: '',
    sub_category: '',
    attribute: ''
  });
  const toast = useToast();
  const { onClose, isOpen, fetchData } = props;

  const submitHandle = async () => {
    let attributes = [];
    let name = '';
    let parent_label = $('.chakra-checkbox.attribute.css-1uiwwan');
    parent_label.each(function (index, ele) {
      let parent_attr = $(this).find('span').attr('data-checked')
      if (typeof parent_attr !== 'undefined' && parent_attr !== false) {
        let parent_key = $(this).find('input').val();
        let values = [];
        name = $(this).attr('data-shortname');
        let label = $('.attr-value-' + parent_key);
        label.each(function (i, el) {
          let attr = $(this).find('span').attr('data-checked');
          if (typeof attr !== 'undefined' && attr !== false) {
            var key = $(this).find('input').val();
            if (values.indexOf(key) != -1)
              return items.filter((item) => item != key);
            values.push({ key: key, value: $(this).find('span.chakra-checkbox__label').text() })
          }
        });
        if (values.length !== 0) {
          attributes.push({ _id: parent_key, shortName: name, values: values })

        }
      }
    })
    let feature = $('.isFeatured').find('span').attr('data-checked');
    if (typeof feature !== 'undefined' && feature !== false)
      productData.isFeatured = true
    else
      productData.isFeatured = false
    productData.price = $('#price').val();
    productData.compareAtPrice = $('#compareAtPrice').val();
    productData.attributes = attributes;
    productData.section = form.section;
    productData.category = form.category;
    productData.sub_category = form.sub_category;
    productData.sku = $("select#section").find(":selected").attr('id') + "-" + $("select#category").find(":selected").attr('id') + "-" + $("select#sub_category").find(":selected").attr('id');
    if (productData.attributes.length == 0) {
      errors.attribute = 'Attributes are required';
    }
    if (productData.name === '') {
      errors.name = 'Name is required'
    }

    if (productData.price === '') {
      errors.price = 'Price is required';
    }
    if (productData.description == '') {
      errors.description = 'Description is required';
    }

    if (productData.compareAtPrice == '') {
      errors.compareAtPrice = 'compareAtPrice is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.post(`/api/admin/product`, { productData });
      if (data.data.status == true) {
        if (data.data.newCreatedProducts === 0) {
          alert('products are already created!')
          Toast('Products are already created', 'error')
        } else {
          Toast(`${data.data.newCreatedProducts} ${data.data.message}`, 'success')
        }
        onClose();
        fetchData();
      }
    }

  };
  const Toast = (title, status) => {
    toast({
      title: title,
      status: status,
      position: 'top-right',
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <>
      <ModalBody>
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Section</FormLabel>
          <Section form={form} setForm={setForm} size="md" width="100%" />
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Category</FormLabel>
          <Category form={form} setForm={setForm} size="md" width="100%" />

        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Sub Category</FormLabel>
          <SubCategory form={form} setForm={setForm} size="md" width="100%" />
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <AttributeCheckbox form={form} setForm={setForm} />
          {error.attribute && <Text color="tomato" gap={6}>{error.attribute}</Text>}
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <Checkbox
            colorScheme="green"
            name="isFeatured"
            className="isFeatured"
            value={productData.isFeatured}
          >
            <FormLabel>Is Featured</FormLabel>
          </Checkbox>
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            id="name"
            name="name"
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
          {error.name && <Text color="tomato" gap={6}>{error.name}</Text>}
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Price</FormLabel>
          <NumberInput max={30} clampValueOnBlur={false} id="price">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {error.price && <Text color="tomato" gap={6}>{error.price}</Text>}
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Compare At Price</FormLabel>
          <NumberInput max={30} clampValueOnBlur={false} id="compareAtPrice">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {error.compareAtPrice && <Text color="tomato" gap={6}>{error.compareAtPrice}</Text>}
        </FormControl>
        <br />

        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="About products ..."
            id="description"
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
          {error.description && <Text color="tomato" gap={6}>{error.description}</Text>}
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button colorScheme="blue" onClick={() => submitHandle()}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
}

export default AddForm;
