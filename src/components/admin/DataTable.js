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
import AlertBox from "./AlertBox";
import { usePagination, useSortBy, useTable } from "react-table";

import CustomModal from "./CustomModal";
import React, { useEffect, useState } from 'react';
import { useShopOptions } from "~/store/shop/shopHooks";
import axios from "axios";
import { ProductRatingStars } from "~/styled-components/shop/Product";
import Rating from "../shared/Rating";
import * as $ from 'jquery';


function DataTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [products, setProducts] = useState([]);
  const [isEditForm, setIsEditForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Section, setSection] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [isOpenAlert, setIsOpen] = React.useState(false)
  const [form, setForm] = useState({
    section: '',
    category: '',
    type: '',
    value: ''
  });
  const [productData, setProductData] = useState({ updateId: '', name: '', price: '', description: '' });
  const options = useShopOptions();
  let pageValue = [5, 10, 20, 50, 100];
  let selectedLimit = options?.limit == undefined ? 20 : options?.limit;

  useEffect(() => {
    fetchData();
    selectSection();
  }, []);
  const fetchData = async () => {
    setLoader(true);
    let data = await axios.get(`/api/admin/product/?page=${options?.page ?? 1}&limit=${options?.limit ?? 20}&sort=${options.sort ?? 'default'}&key=${options.key ?? 'default'}&section=${form.section}&category=${form.category}&subcategory=${form.type}&attribute=${form.value}`);
    setProducts(data.data);
    setLoader(false);
  };
  const capitalize = (string) =>
    string[0].toUpperCase() + string.slice(1);
  const handleChange = (e) => {

    setForm((prevState) => {
      switch (e.target.name) {
        case 'section':
          setCategory([]);
          getCategory(e.target.value);
          return {
            section: e.target.value,
            category: '',
            type: '',
            value: ''
          };
        case 'category':
          getSubCategory(e.target.value);
          return {
            ...prevState,
            category: e.target.value,
            type: '',
            value: '',
          };
        case 'type':
          fetchattribute(e.target.value);
          return {
            ...prevState,
            type: e.target.value,
            value: ''
          };
        case 'value':
          return {
            ...prevState,
            value: e.target.value
          };
        default:
          return prevState;
      }
    });
  };

  // get Select Data
  const selectSection = async () => {
    let data = await axios.get(`/api/sections`);
    setSection(data.data.data);
  };

  const getSubCategory = async (category_id) => {
    let data = await axios.get(`/api/category/sub_categories/${category_id}`);
    setSubcategory(data.data.data);
  };

  const getCategory = async (id) => {
    let data = await Section.filter((value) => {
      return value._id === id;
    });
    data.length > 0 ? setCategory(data[0]['category']) : setCategory([]);
  };

  const fetchattribute = async (att) => {
    let attributeId = [];
    await subcategory.forEach((value) => {
      if (value._id === att) {
        value.attributes.forEach((val) => {
          attributeId.push(val.attribute);
        });
      }
    });
    let data = await axios.post(`/api/attributes`, { id: attributeId });
    setAttribute(data.data);
  };

  const indexKey = '_id';
  let data = React.useMemo(
    () => products.products || [],
    [products],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          capitalize(value)
        )
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ cell: { value } }) => (
          capitalize(value)
        )
      },
      {
        Header: "Price",
        accessor: "price",
        isNumeric: true,
      }, {
        Header: "SKU",
        accessor: "sku",
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
  let next = products.page == null ? 1 : products.page + 1;
  let prev = products.page == null ? 1 : products.page - 1;

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


  const deleteHandle = async (id = null) => {
    let deleteId = id != null ? id.split(",") : id;
    setMessage('Are you sure to delete this product ?');
    if (id == null) {
      deleteId = selectedItems;
      setMessage('Are you sure to delete these products?')
    }
    setUrl(`/api/admin/product?Id=${deleteId}`)
    setIsOpen(true);
  }

  // for single Edit 
  const HandleSingleEdit = (Id, name, price, description) => {
    setIsEditForm(true)
    onOpen();
    productData.name = name;
    productData.price = price;
    productData.description = description;
    productData.updateId = Id;
  }

  let HandleForm = (status) => {
    console.log(status)
    setIsEditForm(status)
    onOpen();
  }


  // edit table
  const editHandle = async () => {
    let updateId = productData.updateId != 'null' ? productData.updateId.split(",") : productData.updateId;
    if (updateId == '') {
      updateId = selectedItems;
    }
    let data = await axios.put(`/api/admin/product?Id=${updateId}`, productData);
    if (data.status == 200) {
      fetchData();
      onClose();
      setProductData({ updateId: '', name: '', price: '', description: '' })
      setSelectedItems(() => {
        return [];
      })
    } else {
      console.log(data.message)
    }
  }

  // filter handle
  const filterHandle = async () => {
    options.key = $('#keysearch').val();
    options.page = 1;
    fetchData();
  }

  const resetHandle = async () => {
    form.section = '';
    form.category = '';
    form.type = '';
    form.value = '';
    fetchData();
  }

  return (
    <>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
        {selectedItems.length && <>
          <Button size="sm" colorScheme="red" onClick={() => deleteHandle()}>
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
          <Button size="sm" colorScheme="blue" onClick={() => HandleForm(true)}><EditIcon />&nbsp;&nbsp;Bulk Edit</Button>
        </>}
        <Button size="sm" colorScheme="green" onClick={() => HandleForm(false)}><AddIcon />&nbsp;&nbsp;Add</Button>
      </Stack>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
        <Text fontSize="md" fontWeight="bold">Filter : </Text>
        <Select
          placeholder="--Section--"
          name="section"
          size="sm"
          width="150px"
          onChange={(e) => handleChange(e)}
          value={form.section}

        >
          {Section.map((section) => (
            <option key={section._id} value={section._id}>
              {capitalize(section.name)}
            </option>
          ))}
        </Select>
        <Select
          placeholder="--Category--"
          name="category"
          size="sm"
          width="150px"
          onChange={(e) => handleChange(e)}
          value={form.category}
          disabled={category?.length === 0 || form.section === ''}
        >
          {category.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {capitalize(cat.name)}
            </option>
          ))}
        </Select>
        <Select
          placeholder="--Sub Category--"
          name="type"
          size="sm"
          width="150px"
          onChange={(e) => handleChange(e)}
          value={form.type}
          disabled={form?.category === '' || subcategory?.length === 0}
        >
          {subcategory.map((subcat) => (
            <option key={subcat._id} value={subcat._id}>
              {capitalize(subcat.name)}
            </option>
          ))}
        </Select>
        <Select
          placeholder="--Attributes--"
          name="value"
          size="sm"
          width="150px"
          onChange={(e) => handleChange(e)}
          value={form.value}
          disabled={form?.type === '' || attribute?.length === 0}
        >
          {attribute.map((attr) => (
            <option key={attr._id} value={attr._id}>
              {capitalize(attr.name)}
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
                isFeatured
              </Th>
              <Th>
                Rating
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
                  {/* <Td align="center">
                    {row.original['isFeatured'] == false ? <CloseIcon color="red.500" /> : <CheckIcon color="green.500" />}
                  </Td>
                  <Td>
                    <ProductRatingStars>
                      <Rating value={row.original['rating'] || 0} />
                    </ProductRatingStars>
                  </Td> */}
                  <Td>
                    <Stack direction="row" spacing={4} align="center">
                      <Link onClick={() => HandleSingleEdit(row.original[indexKey], row.original['name'], row.original['price'], row.original['description'])}>
                        <EditIcon color="green.400" /></Link> &nbsp;
                      &nbsp;
                      &nbsp;
                      <Link onClick={() => deleteHandle(row.original[indexKey])}>
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
              isDisabled={products.page == 1}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="Previous Page"
              onClick={() => pagination(prev)}
              isDisabled={products.page == 1}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {products.page != null ? Number(products.page) : 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {products.pages}
            </Text>&nbsp;
            {/* {" / "} */}
            <Text as="span">
              ({products.total} Records)
            </Text>
          </Text>
          <Text flexShrink={0}>Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={products.pages}
            onChange={(value) => {
              const page = value ? value : 0;
              pagination(page);
            }}
            defaultValue={products.page != null ? products.page + 1 : 1}
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
              isDisabled={products.page == null || products.pages == products.page}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Last Page"
              onClick={() => pagination((products.pages))}
              isDisabled={products.page == null || products.pages == products.page}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} Edit={isEditForm} fetchData={fetchData} editHandle={editHandle} productData={productData} setProductData={setProductData} />
      <AlertBox isOpen={isOpenAlert} setIsOpen={setIsOpen} message={message} url={url} fetchData={fetchData} />
    </>
  )
}

export default DataTable;