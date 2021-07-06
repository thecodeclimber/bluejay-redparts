import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
  EditIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  CheckIcon, CloseIcon, RepeatIcon
} from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  chakra,
  useDisclosure,
  Link, Spinner, Input, InputGroup, InputRightElement, Divider
} from "@chakra-ui/react";
import { usePagination, useSortBy, useTable } from "react-table";

import CustomModal from "./CustomModal";
import React, { useEffect, useState } from 'react';
import { useShopOptions } from "~/store/shop/shopHooks";
import axios from "axios";
import * as $ from 'jquery';
import AlertBox from "../AlertBox";

function DataTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sub_categories, setSubCategories] = useState([]);

  const [selectedItems, setSelectedItems] = React.useState([]);
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const [categories, setCategories] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [isOpenAlert, setIsOpen] = React.useState(false)
  const [Section, setSection] = useState([]);
  const [form, setForm] = useState({
    category: '',
    name: '',
    attributes: '',
    _id: ''
  });
  const [filterForm, setFilterForm] = useState({
    section: '',
    category: '',
  });
  const options = useShopOptions();
  let pageValue = [5, 10, 20, 50, 100];
  let selectedLimit = options?.limit == undefined ? 10 : options?.limit;
  let errors = {};
  const [error, setError] = useState({});
  useEffect(() => {
    fetchData();
    // selectSection();
    selectCategory();
    selectAttributes();
  }, []);
  const fetchData = async () => {
    setLoader(true);
    let data = await axios.get(`/api/admin/sub_categories/?page=${options?.page ?? 1}&limit=${options?.limit ?? 10}&sort=${options.sort ?? 'default'}&key=${options.key ?? 'default'}&section=${filterForm.section}&category=${filterForm.category}&type=${options?.type ?? 'default'}`);
    setSubCategories(data.data);
    setLoader(false);
  };
  const capitalize = (string) =>
    string[0].toUpperCase() + string.slice(1);

  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSection(data.data.data);
  };

  const selectCategory = async () => {
    let data = await axios.get(`/api/categories`);
    setCategories(data.data.data);
  };

  const selectAttributes = async () => {
    let data = await axios.get(`/api/attributes`);
    setAttributes(data.data);
  };

  const indexKey = '_id';
  let data = React.useMemo(
    () => sub_categories.sub_categories || [],
    [sub_categories],
  );


  const columns = React.useMemo(
    () => [

      {
        Header: "Category",
        accessor: "category.name",

      },
      {
        Header: "Sub Category",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          capitalize(value)
        )
      },
    ],
    [],
  )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageSize
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 100 }
    },
    useSortBy,
    usePagination,
  );

  // for next previous pagination
  let next = sub_categories.page == null ? 1 : sub_categories.page + 1;
  let prev = sub_categories.page == null ? 1 : sub_categories.page - 1;


  const handleMultiSelect = (event) => {
    let key = event.target.value;
    setSelectedItems((items) => {
      if (items.indexOf(key) != -1)
        return items.filter(item => item != key);
      let arr = Array.from(new Set([...items, key]))
      return [...arr];
    })
  }
  const handleSelectAll = () => {
    setSelectedItems(() => {
      if (selectedItems.length == page.length)
        return [];
      return page.map((row) => row.original[indexKey])
    }
    )
  };

  const pagination = async (page) => {
    options.page = page;
    fetchData();
  }
  const setLimit = async (limit) => {
    options.limit = limit;
    options.page = 1;
    fetchData();
  }


  const deleteHandle = async (id = null, name = null) => {
    let deleteId = id != null ? id.split(",") : id;
    setMessage(`Are you want to delete ${name}?`);
    if (id == null) {
      deleteId = selectedItems;
      setMessage('Are you want to delete these sub_categories?')
    }
    setUrl(`/api/admin/sub_categories?Id=${deleteId}`)
    setIsOpen(true);
  }

  // for single Edit 
  const HandleSingleEdit = (Id, name, category, attr) => {
    let att = attr.map(item => { return item.attribute })
    setEdit(true)
    form.name = name;
    form.category = category._id;
    form.attributes = att;
    form._id = Id;
    onOpen();
  }

  let HandleForm = (status) => {
    setEdit(status)
    setForm({ name: '', _id: '', category: '', attributes: '' })
    onOpen();
  }


  // edit table
  const editHandle = async () => {
    let _id = form._id != 'null' ? form._id.split(",") : form._id;
    if (_id == '') {
      _id = selectedItems;
    }
    if (form.category == '') {
      errors.category = 'category is required';
    }
    if (form.name == '') {
      errors.name = 'sub category name is required';
    }
    form.attributes = await makeAttribute();
    if (form.attributes.length == 0) {
      errors.attributes = 'attribute is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.put(`/api/admin/sub_categories?Id=${_id}`, form);
      if (data.status == 200) {
        fetchData();
        onClose();
        setForm({ name: '', _id: '', category: '', attributes: '' })
        setSelectedItems(() => {
          return [];
        })
      } else {
        console.log(data.message)
      }
    }
  }

  // filter handle
  const filterHandle = async () => {
    options.key = $('#keysearch').val();
    options.page = 1;
    fetchData();
  }

  const submitHandle = async () => {
    if (form.category == '') {
      errors.category = 'category is required';
    }
    if (form.name == '') {
      errors.name = 'sub category name is required';
    }
    form.attributes = await makeAttribute();
    if (form.attributes.length == 0) {
      errors.attributes = 'attribute is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.post(`/api/admin/sub_categories`, form);
      if (data.status == 200) {
        fetchData();
        onClose();
        setForm({ name: '', _id: '', category: '', attributes: '' })
        setSelectedItems(() => {
          return [];
        })
      } else {
        console.log(data.data.message)
      }
    }
  }



  const makeAttribute = () => {
    let ArrayAttribute = []
    let att = [];
    $('label.attributes').each(function (i, el) {
      let attr = $(this).find('span').attr('data-checked');
      if (typeof attr !== 'undefined' && attr !== false) {
        ArrayAttribute.push($(this).find('input').val())
      }
    });
    attributes.filter(items => {
      if (ArrayAttribute.includes(items._id)) {
        let _id = items._id;
        let val = [];
        items.values.map(values => {
          val.push(values._id)
        })
        att.push({ attribute: _id, values: val })
      }
    });
    return att;
  }

  const resetHandle = async () => {
    options.key = '';
    filterForm.section = '';
    filterForm.category = '';
    $('#keysearch').val('')
    fetchData();
  }

  const changeType = (type) => {
    options.page = 1;
    options.type = type;
    fetchData();
  }
  return (
    <>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
        {selectedItems.length && <>
          <Button size="sm" colorScheme="red" onClick={() => deleteHandle()}>
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
        </>}

        <Text fontSize="md" fontWeight="bold">Filter : </Text>
        {/* <Select
          placeholder="--Section--"
          name="section"
          size="sm"
          id="section"
          width="150px"
          onChange={(e) => setFilterForm({ ...filterForm, section: e.target.value })}
          value={filterForm.section}

        >
          {Section.map((section) => (
            <option key={section._id} value={section._id}>
              {capitalize(section.name)}
            </option>
          ))}
        </Select> */}
        <Select
          placeholder="--category--"
          name="category"
          size="sm"
          id="category"
          width="150px"
          onChange={(e) => setFilterForm({ ...filterForm, category: e.target.value })}
          value={filterForm.category}

        >
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {capitalize(cat.name)}
            </option>
          ))}
        </Select>
        <Input
          size="sm"
          type="text"
          name="keysearch"
          id="keysearch"
          placeholder="Search"
          width="150px"
        />
        <Button size="sm" colorScheme="blue" onClick={() => filterHandle()}>
          Submit
        </Button>
        <Button size="sm" colorScheme="blue" onClick={() => resetHandle()}>
          Reset
        </Button>
        <Button size="sm" colorScheme="green" onClick={() => HandleForm(false)}><AddIcon />&nbsp;&nbsp;Add</Button>

      </Stack>
      <Stack spacing={4} direction="row" justifyContent="flex-start" width="full" marginBottom="3">
        <Button size="sm" colorScheme="blue" isActive={options.type == undefined || options.type == 'default' ? true : false} onClick={() => changeType('default')} >Categorized</Button>
        <Button size="sm" colorScheme="blue" isActive={options.type == 1 ? true : false} onClick={() => changeType(1)}>UnCategorized</Button>

      </Stack>
      <Divider orientation="horizontal" variant="solid" colorScheme="blue" />
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              <Th>
                <Checkbox onChange={handleSelectAll} isChecked={page.length == selectedItems.length} />
              </Th>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
              <Th>
                Action
              </Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {loader ? <Tr><Td colSpan={8}><Spinner style={{ position: "relative", left: "50%" }} color="blue.500" size="xl" /></Td></Tr> :

            page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  <Td>
                    <Checkbox value={row.original[indexKey]} isChecked={selectedItems.includes(row.original[indexKey])} onChange={handleMultiSelect} />
                  </Td>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                  <Td>
                    <Stack direction="row" spacing={4} align="center">
                      <Link onClick={() => HandleSingleEdit(row.original[indexKey], row.original['name'], row.original['category'], row.original['attributes'])}>
                        <EditIcon color="green.400" /></Link> &nbsp;
                      &nbsp;
                      &nbsp;
                      <Link onClick={() => deleteHandle(row.original[indexKey], row.original['name'])}>
                        <DeleteIcon color="red.400" /></Link>
                    </Stack>
                  </Td>
                </Tr>
              );
            })}

        </Tbody>
      </Table>
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              aria-label="First Page"
              onClick={() => pagination(1)}
              isDisabled={sub_categories.page == 1}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="Previous Page"
              onClick={() => pagination(prev)}
              isDisabled={sub_categories.page == 1}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {sub_categories.page != null ? Number(sub_categories.page) : 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {sub_categories.pages}
            </Text>&nbsp;
            {/* {" / "} */}
            <Text as="span">
              ({sub_categories.total} Records)
            </Text>
          </Text>
          <Text flexShrink={0}>Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={sub_categories.pages}
            onChange={(value) => {
              const page = value ? value : 0;
              pagination(page);
            }}
            defaultValue={sub_categories.page != null ? sub_categories.page + 1 : 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setLimit(Number(e.target.value))
            }}
          >
            {pageValue.map((pageSize) => (
              <option key={pageSize} value={pageSize} selected={selectedLimit == pageSize ? 'selected' : ''}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              aria-label="Next Page"
              onClick={() => pagination(next)}
              isDisabled={sub_categories.page == null || sub_categories.pages == sub_categories.page}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Last Page"
              onClick={() => pagination((sub_categories.pages))}
              isDisabled={sub_categories.page == null || sub_categories.pages == sub_categories.page}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} form={form} setForm={setForm} Edit={edit} submitHandle={submitHandle} editHandle={editHandle} error={error} categories={categories} attributes={attributes} />
      <AlertBox isOpen={isOpenAlert} setIsOpen={setIsOpen} message={message} url={url} fetchData={fetchData} />
    </>
  )
}

export default DataTable;