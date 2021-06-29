import { Card, CardBody } from 'reactstrap';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import DataTable from '~/components/admin/DataTable';
import React from 'react';
import axios from '~/axios';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function admin(props: any) {
  const { user, error, isLoading } = useUser();
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get<any>('/products', {
        headers: {
          authorization: 'Bearer ' + getAccessToken,
        },
      });
    })();
  }, []);
  return (
    <Card style={{ margin: '2rem' }}>
      <CardBody style={{ overflow: 'auto' }}>
        <DataTable />
      </CardBody>
    </Card>
  );
}

export default admin;
