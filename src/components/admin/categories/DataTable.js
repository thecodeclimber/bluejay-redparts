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
  Link, Spinner, Input, InputGroup, InputRightElement, Divider, Tabs, TabList, Tab, TabPanels, useToast
} from "@chakra-ui/react";
import { usePagination, useSortBy, useTable } from "react-table";

import CustomModal from "./CustomModal";
import React, { useEffect, useState } from 'react';
import { useShopOptions } from "~/store/shop/shopHooks";
import axios from "axios";
import * as $ from 'jquery';
import AlertBox from "../AlertBox";
import Section from "../common/Section";
import InputKey from "../common/Input";

function DataTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [isOpenAlert, setIsOpen] = React.useState(false)
  const [disable, setDisable] = React.useState(false)
  const [form, setForm] = useState({
    section: '',
    name: '',
    _id: '',
    key: 'default',
    type: 'default',
  });

  const options = useShopOptions();
  let pageValue = [5, 10, 20, 50, 100];
  let selectedLimit = options?.limit == undefined ? 20 : options?.limit;
  let errors = {};
  const [error, setError] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoader(true);
    let data = await axios.get(`/api/admin/categories/?page=${options?.page ?? 1}&limit=${options?.limit ?? 20}&sort=${options.sort ?? 'default'}&key=${form.key}&section=${form.section}&type=${form.type}`);
    setCategories(data.data);
    setLoader(false);
  };

  const capitalize = (string) =>
    string[0].toUpperCase() + string.slice(1);

  const indexKey = '_id';
  let data = React.useMemo(
    () => categories.categories || [],
    [categories],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Section",
        accessor: "section.name",
        Cell: ({ cell: { value } }) => (
          value == null ? '--' : capitalize(value)
        )
      },
      {
        Header: "Category",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          capitalize(value)
        )
      }
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
  let next = categories.page == null ? 1 : categories.page + 1;
  let prev = categories.page == null ? 1 : categories.page - 1;


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
    setMessage(`Are you sure you want to delete ${name}?`);
    if (id == null) {
      deleteId = selectedItems;
      setMessage(`Are you sure you want to delete ${deleteId.length} Categories?`)
    }
    setUrl(`/api/admin/categories?Id=${deleteId}`)
    setIsOpen(true);
  }
  // for single Edit 
  const HandleSingleEdit = (Id, name, section) => {
    setEdit(true)
    form.name = name;
    form.section = section._id;
    form._id = Id;
    onOpen();
  }

  let HandleForm = (status) => {
    SetNull();
    setEdit(status)
    onOpen();
  }

  const SetNull = () => {
    form.section = '';
    form.name = '';
    form._id = '';
    form.key = 'default'
  }
  // edit table
  const editHandle = async () => {
    setDisable(true)
    let _id = form._id != 'null' ? form._id.split(",") : form._id;
    if (_id == '') {
      _id = selectedItems;
    }
    if (form.section == '') {
      errors.section = 'section is required';
    }
    if (form.name == '') {
      errors.name = 'category name is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.put(`/api/admin/categories?Id=${_id}`, form);
      if (data.status == 200) {
        fetchData();
        onClose();
        setSelectedItems(() => {
          return [];
        })
        Toast(data.data.message, 'success')
      } else {
        Toast(data.data.message, 'error')

      }
    }
    setDisable(false)
  }

  // filter handle
  const filterHandle = async () => {
    setDisable(true)
    form.key = $('#keysearch').val();
    options.page = 1;
    await fetchData();
    setDisable(false)
  }

  const submitHandle = async () => {
    setDisable(true)
    if (form.section == '') {
      errors.section = 'section is required';
    }
    if (form.name == '') {
      errors.name = 'category name is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.post(`/api/admin/categories`, form);
      if (data.status == 200) {
        SetNull()
        fetchData();
        onClose();
        setSelectedItems(() => {
          return [];
        })
        Toast(data.data.message, 'success')
      } else {
        Toast(data.data.message, 'error')
      }
    }
    setDisable(false)
  }

  const resetHandle = async () => {
    setDisable(true)
    SetNull()
    $('#keysearch').val('')
    await fetchData();
    setDisable(false)
  }

  const changeType = (type) => {
    setDisable(true)
    form.key = $('#keysearch').val();
    options.page = 1;
    form.type = type;
    fetchData();
    setDisable(false)
  }

  const Toast = (title, status) => {
    toast({
      title: title,
      status: status,
      position: 'top-right',
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3" mt={'-35px'} pr="10px">
        {selectedItems.length && <>
          <Button size="sm" colorScheme="red" disabled={disable} onClick={() => deleteHandle()}>
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
        </>}

        <Text fontSize="md" fontWeight="bold">Filter : </Text>
        <Section form={form} setForm={setForm} size={"sm"} width={'150px'} />
        <InputKey />
        <Button size="sm" colorScheme="blue" disabled={disable} onClick={() => filterHandle()}>
          Submit
        </Button>
        <Button size="sm" colorScheme="blue" disabled={disable} onClick={() => resetHandle()}>
          Reset
        </Button>
        <Button size="sm" colorScheme="green" onClick={() => HandleForm(false)}><AddIcon />&nbsp;&nbsp;Add</Button>

      </Stack>
      <Divider orientation="horizontal" variant="solid" colorScheme="blue" />
      <Tabs size="md" variant="enclosed" mt={2} isLazy defaultIndex={0}>
        <TabList>
          <Tab onClick={() => changeType('default')} disabled={disable}>Categorized</Tab>
          <Tab onClick={() => changeType(1)} disabled={disable}>UnCategorized</Tab>
        </TabList>
        <TabPanels>
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
                          <Link onClick={() => HandleSingleEdit(row.original[indexKey], row.original['name'], row.original['section'])}>
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

        </TabPanels>
      </Tabs>
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              aria-label="First Page"
              onClick={() => pagination(1)}
              isDisabled={categories.page == 1}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="Previous Page"
              onClick={() => pagination(prev)}
              isDisabled={categories.page == 1}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {categories.page != null ? Number(categories.page) : 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {categories.pages}
            </Text>&nbsp;
            {/* {" / "} */}
            <Text as="span">
              ({categories.total} Records)
            </Text>
          </Text>
          <Text flexShrink={0}>Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={categories.pages}
            onChange={(value) => {
              const page = value ? value : 0;
              pagination(page);
            }}
            defaultValue={categories.page != null ? categories.page + 1 : 1}
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
              isDisabled={categories.page == null || categories.pages == categories.page}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Last Page"
              onClick={() => pagination((categories.pages))}
              isDisabled={categories.page == null || categories.pages == categories.page}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} form={form} setForm={setForm} Edit={edit} submitHandle={submitHandle} editHandle={editHandle} error={error} disable={disable} />
      <AlertBox isOpen={isOpenAlert} setIsOpen={setIsOpen} message={message} url={url} fetchData={fetchData} disable={disable} setDisable={setDisable} />
    </>
  )
}

export default DataTable;