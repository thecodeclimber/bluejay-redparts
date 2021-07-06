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
  Link, Spinner, Input, InputGroup, InputRightElement, Divider, GridItem, Grid
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
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [loader, setLoader] = useState(false);
  const [edit, setEdit] = useState(false);
  const [attributes, setAttributes] = useState([]);
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [isOpenAlert, setIsOpen] = React.useState(false)
  const [form, setForm] = useState({
    name: '',
    value: '',
    _id: ''
  });
  const options = useShopOptions();
  let pageValue = [5, 10, 20, 50, 100];
  let selectedLimit = options?.limit == undefined ? 10 : options?.limit;
  let errors = {};
  const [error, setError] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoader(true);
    let data = await axios.get(`/api/admin/attributes/?page=${options?.page ?? 1}&limit=${options?.limit ?? 10}&sort=${options.sort ?? 'default'}&key=${options.key ?? 'default'}`);
    setAttributes(data.data);
    setLoader(false);
  };
  const capitalize = (string) =>
    string[0].toUpperCase() + string.slice(1);
  const indexKey = '_id';
  let data = React.useMemo(
    () => attributes.attributes || [],
    [attributes],
  );


  const columns = React.useMemo(
    () => [

      {
        Header: "name",
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
  let next = attributes.page == null ? 1 : attributes.page + 1;
  let prev = attributes.page == null ? 1 : attributes.page - 1;

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
      setMessage('Are you sure to delete these attributes?')
    }
    setUrl(`/api/admin/attributes?Id=${deleteId}`)
    setIsOpen(true);
  }

  // for single Edit 
  const HandleSingleEdit = (Id, name, value) => {
    setEdit(true)
    let setData = [];
    value.map(async (item, index) => {
      await setData.push({ index: index, value: item.value })
    })
    form.name = name;
    form.value = setData;
    form._id = Id;
    onOpen();
  }

  let HandleForm = (status) => {
    setEdit(status)
    setForm({ name: '', _id: '', value: [] })
    onOpen();
  }


  // edit table
  const editHandle = async () => {
    let _id = form._id != 'null' ? form._id.split(",") : form._id;
    if (_id == '') {
      _id = selectedItems;
    }
    if (form.name == '') {
      errors.name = 'attribute is required';
    }
    let values = [];
    $('.value').each(function (i, el) {
      values.push($(this).val())
    })
    form.value = values;
    if (form.value.length == 0) {
      errors.value = 'attribute value is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.put(`/api/admin/attributes?Id=${_id}`, form);
      console.log(data)
      if (data.status == 200) {
        fetchData();
        onClose();
        setForm({ name: '', _id: '', value: [] })
        setSelectedItems(() => {
          return [];
        })
      } else {
        console.log(data.message)
      }
    }
  }

  console.log(attributes)
  // filter handle
  const filterHandle = async () => {
    options.key = $('#keysearch').val();
    options.page = 1;
    fetchData();
  }

  const submitHandle = async () => {

    if (form.name == '') {
      errors.name = 'attribute is required';
    }
    let values = [];
    $('.value').each(function (i, el) {
      values.push($(this).val())
    })
    form.value = values;
    if (form.value.length == 0) {
      errors.value = 'attribute value is required';
    }
    setError(errors);
    if (Object.keys(errors).length == 0) {
      let data = await axios.post(`/api/admin/attributes`, form);
      if (data.status == 200) {
        fetchData();
        onClose();
        setForm({ name: '', _id: '', value: [] })
        setSelectedItems(() => {
          return [];
        })
      } else {
        console.log(data.data.message)
      }
    }
  }

  return (
    <>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
        {selectedItems.length && <>
          <Button size="sm" colorScheme="red" onClick={() => deleteHandle()}>
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
        </>}
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
        <Button size="sm" colorScheme="green" onClick={() => HandleForm(false)}><AddIcon />&nbsp;&nbsp;Add</Button>
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
              {/* <Th>
                Values
              </Th> */}
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
                  {/* <Td>
                    <Grid
                      pl={6}
                      templateRows="repeat(2, 1fr)"
                      templateColumns="repeat(5, 1fr)"
                    >
                      {row.original['values'].map(item => {
                        return (
                          <GridItem>
                            {item.value}
                          </GridItem>
                        )
                      })}
                    </Grid>
                  </Td> */}
                  <Td>
                    <Stack direction="row" spacing={4} align="center">
                      <Link onClick={() => HandleSingleEdit(row.original[indexKey], row.original['name'], row.original['values'])}>
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
              isDisabled={attributes.page == 1}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="Previous Page"
              onClick={() => pagination(prev)}
              isDisabled={attributes.page == 1}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {attributes.page != null ? Number(attributes.page) : 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {attributes.pages}
            </Text>&nbsp;
            {/* {" / "} */}
            <Text as="span">
              ({attributes.total} Records)
            </Text>
          </Text>
          <Text flexShrink={0}>Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={attributes.pages}
            onChange={(value) => {
              const page = value ? value : 0;
              pagination(page);
            }}
            defaultValue={attributes.page != null ? attributes.page + 1 : 1}
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
              isDisabled={attributes.page == null || attributes.pages == attributes.page}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Last Page"
              onClick={() => pagination((attributes.pages))}
              isDisabled={attributes.page == null || attributes.pages == attributes.page}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} form={form} setForm={setForm} Edit={edit} submitHandle={submitHandle} editHandle={editHandle} error={error} />
      <AlertBox isOpen={isOpenAlert} setIsOpen={setIsOpen} message={message} url={url} fetchData={fetchData} />
    </>
  )
}

export default DataTable;