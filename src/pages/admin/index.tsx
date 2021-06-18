import { Card, CardBody } from 'reactstrap';

import DataTable from '~/components/admin/DataTable';
import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: { name: 'admin' } };
  }
});

function admin(props: any) {
    return (
      <Card style={{margin: '2rem'}}>
        <CardBody>
        <DataTable />
        </CardBody>
      </Card>
    )
}

export default admin
