import axios from 'axios';
import { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
const Section = (props: any) => {
  const { form, setForm, size, width } = props;
  const [Section, setSection] = useState([]);
  useEffect(() => {
    selectSection();
  }, []);
  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSection(data.data.data);
  };
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  return (
    <Select
      placeholder="--Section--"
      name="section"
      size={size}
      id="section"
      className="section"
      width={width}
      onChange={(e) => setForm({ ...form, section: e.target.value })}
      value={form.section}
    >
      {Section.map((section: any) => (
        <option key={section._id} value={section._id} id={section.shortName}>
          {capitalize(section.name)}
        </option>
      ))}
    </Select>
  );
};
export default Section;
