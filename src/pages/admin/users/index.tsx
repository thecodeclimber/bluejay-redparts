import { Card, CardBody, Spinner, Table } from 'reactstrap';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import DataTable from '~/components/admin/DataTable';
import React, { useState } from 'react';
import axios from 'axios';
import * as $ from 'jquery';
import { useTable } from 'react-table';
import {
  chakra,
  Checkbox,
  Link,
  Stack,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { ProductRatingStars } from '~/styled-components/shop/Product';
import Rating from '~/components/shared/Rating';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function admin(props: any) {
  const { user, error, isLoading } = useUser();
  const [users, setUsers] = useState([]);
  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data: any = await axios.get<any>('/api/admin/users', {
      headers: {
        authorization: 'Bearer ' + getAccessToken,
      },
    });
    setUsers(data.data);
  };
  console.log(users);
  const indexKey: any = 'identities.user_id';
  let data: any = React.useMemo(() => users || [], [users]);

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
  } = useTable<any>({
    columns,
    data,
  });

  return (
    <Card style={{ margin: '2rem' }}>
      <CardBody style={{ overflow: 'auto' }}></CardBody>
    </Card>
  );
}

export default admin;
