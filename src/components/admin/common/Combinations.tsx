import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Checkbox,
  Grid,
  GridItem,
  Button,
  Flex,
  filter,
} from '@chakra-ui/react';
import {
  getAllCombinations,
  getAttributes,
  getProductsThroughSku,
  getSingleAttributes,
  makeSku,
  singleCombination,
} from './MakeAttributes';
const Combinations = (props: any) => {
  const {
    form,
    setForm,
    sub_categories,
    attributes,
    combinations,
    setCombinations,
  } = props;
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);

  useEffect(() => {
    combi();
  }, [sub_categories]);

  const combi = async () => {
    let getCombn: any = [];
    if (attributes.length != 0) {
      let mainAttr: any = attributes.map(({ values, _id, shortName }: any) => {
        return values.map((item: any) => ({
          attribute_id: _id,
          shortName: shortName,
          value: item.value,
          _id: item._id,
        }));
      });
      if (mainAttr.length > 1) {
        getCombn = await getAllCombinations(form, mainAttr);
        setCombinations(getCombn);
      } else if (mainAttr.length == 1) {
        getCombn = await singleCombination(form, mainAttr);
        setCombinations(getCombn);
      }
    } else {
      setCombinations([]);
    }
  };
  return (
    <Flex direction="column">
      {Object.entries(combinations).map(([key, value]) => (
        <Checkbox
          size="md"
          colorScheme="green"
          key={key}
          name="combinations"
          className="combinations"
          defaultIsChecked={form.sku.includes(key) ? true : false}
        >
          {key}
        </Checkbox>
      ))}
    </Flex>
  );
};

export default Combinations;
