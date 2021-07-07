import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Select,
  Text,
  Checkbox,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import sub_categories from '~/pages/admin/sub_categories';

function CustomModal(props: any) {
  const [checkedAttribute, setCheckedAttribute] = useState([]);
  const {
    isOpen,
    onClose,
    Edit,
    form,
    setForm,
    submitHandle,
    editHandle,
    error,
    sections,
    categories,
    handleChange,
    attributes,
    assignHandle,
    sub_categories,
  } = props;
  const capitalize = (string: any) => string[0].toUpperCase() + string.slice(1);
  let attribute: any = [];
  let value: any = [];
  if (form._id != '') {
    if (sub_categories.sub_categories.length != 0) {
      let sub: any = sub_categories.sub_categories.filter((items: any) => {
        return items._id === form._id;
      });
      sub.map((item: any) => {
        item.attributes.map((attr: any) => {
          if (attr != null) {
            if (attribute.indexOf(attr.attribute) != -1)
              return attribute.filter((item: any) => item != attr.attribute);
            attribute.push(attr.attribute);
            if (attr.values.length != 0) {
              attr.values.map((val: any) => {
                if (value.indexOf(val) != -1)
                  return value.filter((item: any) => item != val);
                value.push(val);
              });
            }
          }
        });
      });
    }
  }
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
  form.attributes = checkedAttribute;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {form.assign === true
              ? 'Assign Attribute'
              : Edit
              ? 'Edit Sub Category'
              : 'Create Sub Category'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {form.assign === true ? (
              <>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  {attributes.map((element: any) => (
                    <>
                      <Checkbox
                        size="md"
                        colorScheme="green"
                        key={element._id}
                        name="attribute"
                        className="attribute"
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
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(4, 1fr)"
                        style={{
                          display: attribute.includes(element._id)
                            ? ''
                            : 'none',
                        }}
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
                                    defaultIsChecked={
                                      value.includes(val._id) ? true : false
                                    }
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
                  {error.attribute && (
                    <Text color="tomato" gap={6}>
                      {error.attribute}
                    </Text>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <FormLabel>Section</FormLabel>
                  <Select
                    placeholder="--Section--"
                    name="section"
                    id="section"
                    onChange={(e) => handleChange(e)}
                    value={form.section}
                  >
                    {sections.map((section: any) => (
                      <option key={section._id} value={section._id}>
                        {capitalize(section.name)}
                      </option>
                    ))}
                  </Select>
                  {error.section && (
                    <Text color="tomato" gap={6}>
                      {error.section}
                    </Text>
                  )}
                </FormControl>
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <FormLabel>Category</FormLabel>
                  <Select
                    placeholder="--category--"
                    name="category"
                    id="category"
                    disabled={form.section == ''}
                    onChange={(e) => handleChange(e)}
                    value={form.category}
                  >
                    {categories.map((cat: any) => (
                      <option
                        key={cat?._id}
                        value={cat._id}
                        selected={form.category === cat._id ? true : false}
                      >
                        {capitalize(cat.name)}
                      </option>
                    ))}
                  </Select>
                  {error.category && (
                    <Text color="tomato" gap={6}>
                      {error.category}
                    </Text>
                  )}
                </FormControl>
                <br />
                <FormControl
                  templateColumns="repeat(1, 1fr)"
                  gap={6}
                  isRequired
                >
                  <FormLabel>Sub Category</FormLabel>
                  <Input
                    placeholder="name"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {error.name && (
                    <Text color="tomato" gap={6}>
                      {error.name}
                    </Text>
                  )}
                </FormControl>
              </>
            )}

            <br />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            {form.assign === true ? (
              <Button colorScheme="blue" onClick={() => assignHandle()}>
                Assign
              </Button>
            ) : Edit ? (
              <Button colorScheme="blue" onClick={() => editHandle()}>
                Update
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={() => submitHandle()}>
                Save
              </Button>
            )}
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;

// <FormControl templateRows="repeat(1, 1fr)" gap={6} isRequired>
//   <FormLabel>Attributes</FormLabel>
//   <Grid pl={6} templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)">
//     {attributes.length != 0
//       ? attributes.map((element: any) => (
//           <>
//             <GridItem>
//               <Checkbox
//                 size="md"
//                 colorScheme="green"
//                 key={element._id}
//                 name="attribute"
//                 className="attributes"
//                 value={element._id}
//                 defaultIsChecked={
//                   form.attributes != ''
//                     ? form.attributes.includes(element._id)
//                       ? true
//                       : false
//                     : false
//                 }
//                 onChange={(e) =>
//                   setForm({ ...form, attributes: e.target.value })
//                 }
//               >
//                 {capitalize(element.name)}
//               </Checkbox>
//             </GridItem>
//           </>
//         ))
//       : ''}
//   </Grid>
//   {error.attributes && (
//     <Text color="tomato" gap={6}>
//       {error.attributes}
//     </Text>
//   )}
// </FormControl>;
