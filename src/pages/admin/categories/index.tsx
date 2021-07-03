import { Card, CardBody } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import Nav from '~/components/admin/Nav';
import { Stack, Grid, GridItem, Flex, Box } from '@chakra-ui/react';
import DataTable from '~/components/admin/categories/DataTable';
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function categories(props: any) {
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

export default categories;
