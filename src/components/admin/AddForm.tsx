import {
  Button,
  Textarea,
  Input,
  Grid,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  NumberInputStepper,
  Stack,
  filter,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCategory } from '~/fake-server/endpoints';
import { validateEmail } from '~/services/validators';

function AddForm(props: any) {
  const [productData, setProductData] = useState<any>({
    name: '',
    isFeatured: false,
    compareAtPrice: '',
    price: '',
    description: '',
    attributes: [],
  });
  const [Section, setSection] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const [checkedAttribute, setCheckedAttribute] = useState([]);
  const [checkedAttributeValue, setCheckedAttributeValue] = useState<any>([]);
  const [attributes, setAttributes] = useState<any>([]);
  const [showValue, setShowValue] = useState(false);
  const [form, setForm] = useState<any>({
    section: '',
    category: '',
    type: '',
  });
  console.log(productData);
  console.log(form);
  const capitalize = (string: string): string =>
    string[0].toUpperCase() + string.slice(1);
  const handleChange = (e: any) => {
    setForm((prevState: object) => {
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
    let data = await axios.get<any>(`/api/sections`);
    setSection(data.data.data);
  };

  const getSubCategory = async (category_id: any) => {
    let data = await axios.get(`/api/category/sub_categories/${category_id}`);
    setSubcategory(data.data.data);
  };

  const getCategory = async (id: any) => {
    let data = await Section.filter((value: any) => {
      return value._id === id;
    });
    setCategory(data[0]['category']);
  };

  const fetchattribute = async (att: any) => {
    let attributeId: any = [];
    await subcategory.forEach((value: any) => {
      if (value._id === att) {
        value.attributes.forEach((val: any) => {
          attributeId.push(val.attribute);
        });
      }
    });
    let data: any = await axios.post(`/api/attributes`, { id: attributeId });
    setAttribute(data.data);
  };

  const handleOnChangeAttribute = (e: any) => {
    let elem: any = document.getElementById('attr-' + e.target.value);
    let key: any = e.target.value;
    if (e.target.checked) {
      elem.style.display = 'block';
      setCheckedAttribute((items: any) => {
        if (items.indexOf(key) != -1)
          return items.filter((item: any) => item != key);
        let arr = Array.from(new Set([...items, key]));
        return [...arr];
      });
    } else {
      elem.style.display = 'none';
    }
  };

  const handleOnChangeAttributeValue = (e: any, parentId: any) => {
    let key: any = e.target.value;
    setCheckedAttributeValue((items: any) => {
      if (items.indexOf(key) != -1)
        return items.filter((item: any) => item != key);
      let arr = Array.from(new Set([...items, key]));
      return [...arr];
    });
    setAttributes({ attribute: parentId, values: checkedAttributeValue });
  };
  return (
    <>
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Section</FormLabel>
        <Select
          placeholder="Select Section"
          name="section"
          onChange={(e) => handleChange(e)}
          value={form.section}
        >
          {Section.map((section: any) => (
            <option key={section._id} value={section._id}>
              {capitalize(section.name)}
            </option>
          ))}
        </Select>
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select Category"
          name="category"
          onChange={(e) => handleChange(e)}
          value={form.category}
          disabled={Category?.length === 0}
        >
          {Category.map((category: any) => (
            <option key={category._id} value={category._id}>
              {capitalize(category.name)}
            </option>
          ))}
        </Select>
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Sub Category</FormLabel>
        <Select
          placeholder="Select Type"
          name="type"
          value={form.type}
          disabled={form?.category === '' || subcategory?.length === 0}
          onChange={(e) => handleChange(e)}
        >
          {subcategory.map((sub_cat: any) => (
            <option key={sub_cat._id} value={sub_cat._id}>
              {capitalize(sub_cat.name)}
            </option>
          ))}
        </Select>
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Attributes</FormLabel>
        {attribute.map((element: any) => (
          <>
            <Checkbox
              size="md"
              colorScheme="green"
              key={element._id}
              name="attribute"
              parent={null}
              value={element._id}
              onChange={(e) => handleOnChangeAttribute(e)}
            >
              {element.name}
            </Checkbox>
            <Stack
              pl={6}
              style={{ display: 'none' }}
              id={'attr-' + element._id}
            >
              {element.values.length == 0
                ? ''
                : element.values.map((val: any) => (
                    <Checkbox
                      pl={4}
                      colorScheme="green"
                      size="sm"
                      key={val._id}
                      value={val._id}
                      name="value"
                      onChange={(e) =>
                        handleOnChangeAttributeValue(e, element._id)
                      }
                    >
                      {val.value}
                    </Checkbox>
                  ))}
            </Stack>
            <br />
          </>
        ))}
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <Checkbox
          colorScheme="green"
          name="isFeatured"
          isChecked={productData.isFeatured}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        >
          <FormLabel>Is Featured</FormLabel>
        </Checkbox>
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="name"
          id="name"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Price</FormLabel>
        <NumberInput
          placeholder="price"
          id="price"
          name="price"
          value={productData.price}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <br />
      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Compare At Price</FormLabel>
        <NumberInput
          placeholder="price"
          id="price"
          name="compareAtPrice"
          value={productData.compareAtPrice}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <br />

      <FormControl templateColumns="repeat(1, 1fr)" gap={6}>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="About products ..."
          id="description"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
        />
      </FormControl>
    </>
  );
}

export default AddForm;
