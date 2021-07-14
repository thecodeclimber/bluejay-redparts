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
  const [loader, setLoader] = useState(false);
  const [productSku, setProductSku] = useState<any>([]);
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  let sku =
    form.sectionShortName + '-' + form.categoryShortName + '-' + form.shortName;

  useEffect(() => {
    combi();
    getSku();
  }, []);
  const getSku = async () => {
    let data = await getProductsThroughSku(sku);
    let result: any = [];
    data.forEach((element: any) => {
      result.push(element.sku);
    });
    setProductSku(result);
  };

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
      } else {
        getCombn = await singleCombination(form, mainAttr);
        setCombinations(getCombn);
      }
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
        Object.entries(combinations).map(([key, value]) => (
          <>
            <Flex direction="column" key={key}>
              <Checkbox
                size="md"
                colorScheme="green"
                key={key}
                name="combinations"
                className="combinations"
                defaultIsChecked={productSku.map((item: any) => {
                  if (item === key) {
                    return true;
                  } else {
                    return false;
                  }
                })}
              >
                {key}
              </Checkbox>
            </Flex>
          </>
        ))
      )}
    </>
  );
};

export default Combinations;
