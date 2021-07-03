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
import { Flex, Grid, Box } from '@chakra-ui/react';
import Nav from '~/components/admin/Nav';
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function admin(props: any) {
  return (
    <>
      <Flex w="100%">
        <Nav />
        <Box w="80%">
          <Card style={{ margin: '2rem' }}>
            <CardBody style={{ overflow: 'auto' }}>
              <DataTable />
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </>
  );
}

export default admin;
