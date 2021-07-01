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
  Text
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import { useEffect } from 'react';
import * as $ from 'jquery';
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
  const [Section, setSection] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [checkedAttribute, setCheckedAttribute] = useState([]);
  const [form, setForm] = useState({
    section: '',
    category: '',
    type: '',
  });
  let isValidForm = false;
  const { onClose, isOpen, fetchData } = props;
  const capitalize = (string) =>
    string[0].toUpperCase() + string.slice(1);
  const handleChange = (e) => {

    setForm((prevState) => {
      switch (e.target.name) {
        case 'section':
          getCategory(e.target.value);
          return {
            section: e.target.value,
            category: '',
            type: '',
          };
        case 'category':
          getSubCategory(e.target.value);
          return {
            ...prevState,
            category: e.target.value,
            type: '',
          };
        case 'type':
          fetchattribute(e.target.value);
          return {
            ...prevState,
            type: e.target.value,
          };
        default:
          return prevState;
      }
    });
  };

  useEffect(() => {
    selectSection();
  }, []);

  // get Select Data
  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSection(data.data.data);
  };

  const getSubCategory = async (category_id) => {
    let data = await axios.get(`/api/category/sub_categories/${category_id}`);
    setSubcategory(data.data.data);
  };

  const getCategory = async (id) => {
    let data = await Section.filter((value) => {
      return value._id === id;
    });
    setCategory(data[0]['category']);
  };

  const fetchattribute = async (att) => {
    let attributeId = [];
    await subcategory.forEach((value) => {
      if (value._id === att) {
        value.attributes.forEach((val) => {
          attributeId.push(val.attribute);
        });
      }
    });
    let data = await axios.post(`/api/attributes`, { id: attributeId });
    setAttribute(data.data);
  };

  const handleOnChangeAttribute = (e) => {
    let elem = document.getElementById('attr-' + e.target.value);
    let key = e.target.value;
    if (e.target.checked) {
      elem.style.display = '';
      setCheckedAttribute((items) => {
        if (items.indexOf(key) != -1)
          return items.filter((item) => item != key);
        let arr = Array.from(new Set([...items, key]));
        return [...arr];
      });
    } else {
      elem.style.display = 'none';
    }
  };

  const submitHandle = async () => {
    let attributes = [];
    let name = '';
    checkedAttribute.forEach((item, index) => {
      let values = [];
      name = $(`.${item}`).attr('data-shortname');
      let label = $('.attr-value-' + item);
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
        attributes[index] = { _id: item, shortName: name, values: values }
      }

    });
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
    productData.sub_category = form.type;
    productData.sku = $("select#section").find(":selected").attr('datasku') + "-" + $("select#category").find(":selected").attr('datasku') + "-" + $("select#type").find(":selected").attr('datasku');
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
    console.log(Object.keys(errors).length)
    if (Object.keys(errors).length == 0) {
      let data = await axios.post(`/api/admin/product`, { productData });
      if (data.data.status == true) {
        if (data.data.newCreatedProducts === 0) {
          alert('products are already created!')
        } else {
          alert(data.data.newCreatedProducts + " " + data.data.message)
        }
        onClose();
        fetchData();
      }
    }

  };
  console.log(error)

  return (
    <>
      <ModalBody>
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Section</FormLabel>
          <Select
            placeholder="Select Section"
            name="section"
            id="section"
            onChange={(e) => handleChange(e)}
            value={form.section}

          >
            {Section.map((section) => (
              <option key={section._id} value={section._id} datasku={section.shortName}>
                {capitalize(section.name)}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select Category"
            name="category"
            id="category"
            onChange={(e) => handleChange(e)}
            value={form.category}
            disabled={Category?.length === 0}
          >
            {Category.map((category) => (
              <option key={category._id} value={category._id} datasku={category.shortName}>
                {capitalize(category.name)}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          <FormLabel>Sub Category</FormLabel>
          <Select
            placeholder="Select Type"
            name="type"
            id="type"
            value={form.type}
            disabled={form?.category === '' || subcategory?.length === 0}
            onChange={(e) => handleChange(e)}
          >
            {subcategory.map((sub_cat) => (
              <option key={sub_cat._id} value={sub_cat._id} datasku={sub_cat.shortName}>
                {capitalize(sub_cat.name)}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl templateColumns="repeat(1, 1fr)" gap={6} isRequired>
          {attribute.length != 0 ? <FormLabel>Attributes</FormLabel> : ''}
          {attribute.map((element) => (
            <>
              <Checkbox
                size="md"
                colorScheme="green"
                key={element._id}
                name="attribute"
                className={element._id}
                value={element._id}
                data-shortname={element.shortName}
                onChange={(e) => handleOnChangeAttribute(e)}
              >
                {capitalize(element.name)}
              </Checkbox>
              <Grid pl={6} templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                style={{ display: 'none' }}
                id={'attr-' + element._id}

              >
                {element.values.length == 0
                  ? ''
                  : element.values.map((val) => (
                    <>
                      <GridItem>
                        <Checkbox
                          pl={4}
                          colorScheme="green"
                          size="sm"
                          key={val._id}
                          value={val._id}
                          className={'attr-value-' + element._id}
                          name={val.name}
                        >
                          {val.value}
                        </Checkbox>
                      </GridItem>
                    </>
                  ))}
              </Grid>
              <br />
            </>
          ))}
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
        <Button colorScheme="blue" onClick={() => submitHandle()} disabled={(attribute.length == 0 && checkedAttribute.length == 0) ? 'disabled' : ''}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
}

export default AddForm;
