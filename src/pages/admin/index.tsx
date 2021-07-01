import { Card, CardBody } from 'reactstrap';
import {
  getAccessToken,
  withPageAuthRequired,
  useUser,
} from '@auth0/nextjs-auth0';
import DataTable from '~/components/admin/DataTable';
import React from 'react';
import axios from '~/axios';
import Redirect from '~/components/shared/Redirect';
import url from '~/services/url';
import { Flex, Grid } from '@chakra-ui/react';
import Nav from '~/components/admin/Nav';
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function admin(props: any) {
  return (
    <>
      <Grid w="100%" templateColumns="repeat(5, 1fr)" gap={6}>
        <Nav />
        <Flex>
          <Card style={{ margin: '2rem' }}>
            <CardBody style={{ overflow: 'auto' }}>
              <DataTable />
            </CardBody>
          </Card>
        </Flex>
      </Grid>
    </>
  );
}

export default admin;
