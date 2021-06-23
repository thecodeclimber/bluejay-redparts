import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
  EditIcon,
  TriangleDownIcon,
  TriangleUpIcon
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
  Link
} from "@chakra-ui/react";
import { usePagination, useSortBy, useTable } from "react-table";

import CustomModal from "./CustomModal";
import React, { useEffect, useState } from 'react';
import { useShopOptions } from "~/store/shop/shopHooks";
import axios from "axios";
import { ProductRatingStars } from "~/styled-components/shop/Product";
import Rating from "../shared/Rating";

function DataTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({ updateId: '', name: '', price: '', description: '' });
  console.log(productData)
  // const router = useRouter();
  const options = useShopOptions()
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await axios.get(`/api/admin/product/?page=${options?.page ?? 1}&limit=${options?.limit ?? 20}&sort=${options.sort ?? 'default'}`);
    setProducts(data.data);
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
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Price",
        accessor: "price",
        isNumeric: true,
      }, {
        Header: "SKU",
        accessor: "sku",
      },
      {
        Header: "isFeatured",
        accessor: "isFeatured"
      }
    ],
    [],
  )

  var limit = options?.limit == undefined ? 20 : options?.limit;
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

  const deleteHandle = async (id = null) => {
    let deleteId = id != null ? id.split(",") : id;
    let message = 'Are you sure to delete this product';
    if (id == null) {
      deleteId = selectedItems;
      message = 'Are you sure to delete these products';
    }
    if (confirm(message)) {
      let data = await axios.delete(`/api/admin/product?Id=${deleteId}`);
      if (data.status == 200) {
        fetchData();
        setSelectedItems(() => {
          return [];
        })
      } else {
        console.log(data.message)
      }
    }
  }

  // for single Edit 
  const HandleSingleEdit = (Id, name, price, description) => {
    onOpen();
    productData.name = name;
    productData.price = price;
    productData.description = description;
    productData.updateId = Id;
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
  return (
    <>
      <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
        {selectedItems.length && <>
          <Button size="sm" colorScheme="red" onClick={() => deleteHandle()}>
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
          <Button size="sm" colorScheme="blue" onClick={onOpen}><EditIcon />&nbsp;&nbsp;Bulk Edit</Button>
        </>}

        <Button size="sm" colorScheme="green" onClick={onOpen}><AddIcon />&nbsp;&nbsp;Add</Button>
      </Stack>
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
                Rating
              </Th>
              <Th>
                Action
              </Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {
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
                    <ProductRatingStars>
                      <Rating value={row.original['rating'] || 0} />
                    </ProductRatingStars>
                  </Td>
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
            </Text>
            {" / "}
            <Text fontWeight="bold" as="span">
              {products.total}
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
            {[5, 10, 20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
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
      <CustomModal isOpen={isOpen} onClose={onClose} Edit={true} editHandle={editHandle} productData={productData} setProductData={setProductData} />
    </>
  )
}

export default DataTable;