import axios from 'axios';
import { useEffect, useState } from 'react';
import { Checkbox, Grid, GridItem, Button, Flex } from '@chakra-ui/react';
import { getProductsThroughSku } from './MakeAttributes';
const AttributeCheckboxAll = (props: any) => {
  const { form, setForm, sub_categories } = props;
  const [checkedAttribute, setCheckedAttribute] = useState([]);
  const [attributes, setAttributes] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [productSku, setProductSku] = useState<any>([]);
  const [attribute, setAttribute] = useState<any>([]);
  const [value, setValue] = useState<any>([]);
  form.sku = '';
  form.attributes = '';
  useEffect(() => {
    selectAttributes();
  }, [sub_categories]);
  useEffect(() => {
    getSku();
    return () => {
      setAttribute([]); // This worked for me
      setValue([]); // This worked for me
    };
  }, []);
  const selectAttributes = async () => {
    setLoader(true);
    let data = await axios.get(`/api/attributes`);
    setAttributes(data.data);
    setLoader(false);
  };

  const getSku = async () => {
    let sku: any = [];
    let data = await getProductsThroughSku(form._id);
    if (data.length != 0) {
      let attribute: any = [];
      let value: any = [];
      data.forEach((element: any) => {
        if (sku.indexOf(element.sku) != -1)
          return sku.filter((item: any) => item != element.sku);
        sku.push(element.sku);
        element.attributes.forEach((val: any) => {
          attribute.push(val.attribute);
          value.push(val.value);
        });
      });
      setAttribute(attribute);
      setValue(value);
      setProductSku(sku);
    }
    if (data) {
      setLoader1(true);
    }
  };
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);

  // if (form._id != '') {
  //   if (sub_categories.sub_categories.length != 0) {
  //     let sub: any = sub_categories.sub_categories.filter((items: any) => {
  //       return items._id === form._id;
  //     });
  //     sub.map((item: any) => {
  //       localStorage.setItem(
  //         'sub-category-assign-attributes',
  //         JSON.stringify(item.attributes)
  //       );
  //       item.attributes.map((attr: any) => {
  //         if (attr != null) {
  //           if (attribute.indexOf(attr.attribute) != -1)
  //             return attribute.filter((item: any) => item != attr.attribute);
  //           attribute.push(attr.attribute);
  //           if (attr.values.length != 0) {
  //             attr.values.map((val: any) => {
  //               if (value.indexOf(val) != -1)
  //                 return value.filter((item: any) => item != val);
  //               value.push(val);
  //             });
  //           }
  //         }
  //       });
  //     });
  //   }
  // }
  const handleOnChangeAttribute = (e: any) => {
    let elem: any = document.getElementById('attr-' + e.target.value);
    let key = e.target.value;
    if (e.target.checked) {
      elem.style.display = '';
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
  // form.attributes = checkedAttribute;
  form.sku = productSku;
  return (
    <>
      {loader ? (
        <Button
          isLoading
          loadingText="Loading attributes"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
      ) : loader1 ? (
        attributes.map((element: any) => (
          <>
            <Flex direction="column" key={element._id}>
              <Checkbox
                size="md"
                colorScheme="green"
                name="attribute"
                key={element._id}
                className="attribute"
                shortname={element.shortName}
                value={element._id}
                onChange={(e) => handleOnChangeAttribute(e)}
                defaultIsChecked={
                  attribute.includes(element._id) ? true : false
                }
              >
                {capitalize(element.name)}
              </Checkbox>
              <Grid
                pl={6}
                mt={1}
                spacing={1}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                style={{
                  display: attribute.includes(element._id) ? '' : 'none',
                }}
                id={'attr-' + element._id}
              >
                {element.values.length == 0
                  ? ''
                  : element.values.map((val: any, index: any) => (
                      <>
                        <GridItem key={index}>
                          <Checkbox
                            pl={4}
                            colorScheme="green"
                            size="sm"
                            key={val._id}
                            shortname={val.value}
                            value={val._id}
                            className={'attr-value-' + element._id}
                            name={val.name}
                            defaultIsChecked={
                              value.includes(val._id) ? true : false
                            }
                          >
                            {capitalize(val.value)}
                          </Checkbox>
                        </GridItem>
                      </>
                    ))}
              </Grid>
            </Flex>
          </>
        ))
      ) : (
        <Button
          isLoading
          loadingText="Loading attributes"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
      )}
    </>
  );
};

export default AttributeCheckboxAll;
