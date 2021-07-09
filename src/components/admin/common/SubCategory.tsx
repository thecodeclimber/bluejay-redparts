import axios from 'axios';
import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
const SubCategory = (props: any) => {
  const { form, setForm, size, width } = props;
  const [sub_categories, setSubcategory] = useState([]);
  useEffect(() => {
    if (form.category != '') {
      getSubCategory();
    }
  }, [form.category]);

  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  const getSubCategory = async () => {
    let data = await axios.get<any>(
      `/api/category/sub_categories/${form.category}`
    );
    setSubcategory(data.data.data);
  };
  return (
    <Select
      placeholder="--Sub Category--"
      name="type"
      size={size}
      width={width}
      id="sub_category"
      className="sub_category"
      onChange={(e) => setForm({ ...form, sub_category: e.target.value })}
      value={form.sub_category}
      disabled={form?.category === '' || sub_categories.length === 0}
    >
      {sub_categories.map((subcat: any) => (
        <option key={subcat._id} value={subcat._id} id={subcat.shortName}>
          {capitalize(subcat.name)}
        </option>
      ))}
    </Select>
  );
};

export default SubCategory;
