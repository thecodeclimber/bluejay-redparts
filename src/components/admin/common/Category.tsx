import axios from 'axios';
import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
const Category = (props: any) => {
  const { form, setForm, size, width } = props;
  const [Section, setSection] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    selectSection();
  }, [Section]);

  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSection(data.data.data);
    getCategory();
  };
  const getCategory = async () => {
    let data = await Section.filter((value: any) => {
      return value._id === form.section;
    });
    data.length === 0 ? setCategories([]) : setCategories(data[0]['category']);
  };

  return (
    <Select
      placeholder="--category--"
      name="category"
      size={size}
      id="category"
      className="category"
      width={width}
      disabled={form.section === '' || categories.length === 0}
      onChange={(e) => setForm({ ...form, category: e.target.value })}
      value={form.category}
    >
      {categories.map((cat: any) => (
        <option key={cat._id} value={cat._id} id={cat.shortName}>
          {capitalize(cat.name)}
        </option>
      ))}
    </Select>
  );
};

export default Category;