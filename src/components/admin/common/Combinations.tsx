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
  getSingleAttributes,
  makeSku,
} from './MakeAttributes';
const Combinations = (props: any) => {
  const { form, setForm, sub_categories, attributes } = props;
  const [loader, setLoader] = useState(false);
  const [combinations, setCombinations] = useState([]);
  const [getAttrs, setGetAttr] = useState([]);
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);

  useEffect(() => {
    data();
    combi();
  }, [getAttrs]);
  const data = async () => {
    const getAttr = await getAttributes();
    setGetAttr(getAttr);
  };
  const getFilterData = async () => {
    if (attributes.length != 0) {
      let attr: any = [];
      attributes.map(async (item: any) => {
        let data: any = await getAttrs.map((items: any) => {
          let values: any = [];
          if (items._id == item.attribute) {
            item.values.map((val: any) => {
              items.values.map((value: any) => {
                if (val === value._id) {
                  let objValue = { _id: value._id, value: value.value };
                  values.push(objValue);
                }
              });
            });
            let obj: any = {
              _id: items._id,
              shortName: items.shortName,
              values: values,
            };
            attr.push(obj);
          }
        });
      });
      return attr;
    }
  };

  const combi = async () => {
    let attributes = await getFilterData();
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
        getCombn = await getAllCombinations(mainAttr);
      }
      setCombinations(getCombn);
    }
  };

  return (
    <>
      {loader ? (
        <Button
          isLoading
          loadingText="Loading Combinations"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
      ) : (
        combinations.map((element: any) => (
          <>
            <Flex direction="column">
              <Checkbox
                size="md"
                colorScheme="green"
                key={element._id}
                name="attribute"
                className="attribute"
                value={element._id}
                defaultIsChecked={true}
              >
                {capitalize(makeSku(element))}
              </Checkbox>
            </Flex>
          </>
        ))
      )}
    </>
  );
};

export default Combinations;
