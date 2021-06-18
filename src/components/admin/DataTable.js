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
    useDisclosure
} from "@chakra-ui/react";
import { usePagination, useSortBy, useTable } from "react-table";

import CustomModal from "./CustomModal";
import React from 'react';

function DataTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItems, setSelectedItems] = React.useState([]);
  const indexKey = 'id';
    const data = React.useMemo(
        () => [
          {
            id:"11",
            product: "inches",
            toUnit: "millimetres (mm)",
            price: 25.4,
          },
          {
            id:"12",
            product: "feet",
            toUnit: "centimetres (cm)",
            price: 30.48,
          },
          {
            id:"13",
            product: "yards",
            toUnit: "metres (m)",
            price: 0.91444,
          },
          {
            id:"14",
            product: "inches",
            toUnit: "millimetres (mm)",
            price: 25.4,
          },
          {
            id:"15",
            product: "feet",
            toUnit: "centimetres (cm)",
            price: 30.48,
          },
          {
            id:"16",
            product: "yards",
            toUnit: "metres (m)",
            price: 0.91444,
          },
          {
            id:"17",
            product: "feet",
            toUnit: "centimetres (cm)",
            price: 30.48,
          },
          {
            id:"18",
            product: "yards",
            toUnit: "metres (m)",
            price: 0.91444,
          },
        ],
        [],
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: "Product Name",
            accessor: "product",
          },
          {
            Header: "Unit ",
            accessor: "toUnit",
          },
          {
            Header: "Price",
            accessor: "price",
            isNumeric: true,
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
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0, pageSize: 5 }
        },
        useSortBy,
        usePagination
      );

const handleMultiSelect = (event)=>{
  let key = event.target.value;
  setSelectedItems((items) => {
    if(items.indexOf(key) != -1)
    return items.filter(item=>item != key);
    let arr = Array.from(new Set([...items, key]))
    return [...arr];
  })
}
const handleSelectAll = ()=>{
  setSelectedItems(()=>{
    if(selectedItems.length == page.length)
    return [];
    return page.map((row)=> row.original[indexKey])
  }
  )
};
React.useEffect(()=>{
setSelectedItems([]);
},[pageSize, page]);

    return (
        <>
        <Stack spacing={4} direction="row" justifyContent="flex-end" width="full" marginBottom="3">
            {selectedItems.length && <>
            <Button size="sm" colorScheme="red">
            <DeleteIcon />&nbsp;&nbsp;Bulk Delete</Button>
            <Button size="sm" colorScheme="blue"><EditIcon />&nbsp;&nbsp;Bulk Edit</Button>
            </>}
            
            <Button size="sm" colorScheme="green" onClick={onOpen}><AddIcon />&nbsp;&nbsp;Add</Button>
        </Stack>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                  <Th>
                      <Checkbox onChange={handleSelectAll} isChecked={page.length == selectedItems.length}/>
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
          {
          page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                <Td>
                    <Checkbox value={row.original[indexKey]} isChecked={selectedItems.includes(row.original[indexKey])} onChange={handleMultiSelect}/>
                </Td>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
                <Td>
                    <EditIcon color="green.400" /> &nbsp;
                    &nbsp;
                    &nbsp;
                    <DeleteIcon color="red.400" />
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
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
            aria-label="Previous Page"
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink={0}>Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value) => {
              const page = value ? value - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
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
              setPageSize(Number(e.target.value));
            }}
          >
            {[1,2,3,4,5].map((pageSize) => (
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
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
               aria-label="Last Page"
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} />
      </>
      )
}

export default DataTable;