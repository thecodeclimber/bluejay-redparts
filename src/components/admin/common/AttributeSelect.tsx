import axios from 'axios';
import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
const AttributeSelect = (props: any) => {
  const { form, setForm, size, width } = props;
  const [attributes, setAttributes] = useState([]);
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
    fetchattribute(data.data.data.attributes);
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
  return (
    <Select
      placeholder="--Attributes--"
      name="attribute"
      size={size}
      width={width}
      onChange={(e) => setForm({ ...form, attribute: e.target.value })}
      value={form.attribute}
      disabled={
        form?.sub_category === '' || Object.keys(attributes).length === 0
      }
    >
      {attributes.map((attr: any) => (
        <option key={attr._id} value={attr._id}>
          {capitalize(attr.name)}
        </option>
      ))}
    </Select>
  );
};

export default AttributeSelect;
