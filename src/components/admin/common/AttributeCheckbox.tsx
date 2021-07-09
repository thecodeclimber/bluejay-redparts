import axios from 'axios';
import { useEffect, useState } from 'react';
import { Checkbox, Grid, GridItem, FormLabel } from '@chakra-ui/react';
const AttributeCheckbox = (props: any) => {
  const { form, setForm, sub_categories } = props;
  const [checkedAttribute, setCheckedAttribute] = useState([]);
  const [attribute, setAttributes] = useState<any>([]);

  useEffect(() => {
    if (form.sub_category != '') {
      getSubCategory();
    }
  }, [form.sub_category]);
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  const getSubCategory = async () => {
    let data: any = await axios.get<any>(
      `/api/admin/sub_categories/${form.sub_category}`
    );
    if (data.data.data.attributes.length != 0) {
      fetchattribute(data.data.data.attributes);
    } else {
      setAttributes([]);
    }
  };
  const fetchattribute = async (att: any) => {
    let attributeId: any = [];

    await att.forEach((value: any) => {
      if (value != null) {
        attributeId.push(value.attribute);
      }
    });
    let data = await axios.post(`/api/attributes`, { id: attributeId });
    setAttributes(data.data);
  };
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

  return (
    <>
      {attribute.length != 0 ? <FormLabel>Attributes</FormLabel> : ''}
      {attribute.map((element: any) => (
        <>
          <Checkbox
            size="md"
            colorScheme="green"
            key={element._id}
            name="attribute"
            className={'attribute'}
            value={element._id}
            data-shortname={element.shortName}
            onChange={(e) => handleOnChangeAttribute(e)}
          >
            {capitalize(element.name)}
          </Checkbox>
          <Grid
            pl={6}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            style={{ display: 'none' }}
            id={'attr-' + element._id}
          >
            {element.values.length == 0
              ? ''
              : element.values.map((val: any) => (
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
    </>
  );
};

export default AttributeCheckbox;
