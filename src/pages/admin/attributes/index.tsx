import { Card, CardBody } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import Nav from '~/components/admin/Nav';
import { Stack, Grid, GridItem, Flex } from '@chakra-ui/react';
import DataTable from '~/components/admin/categories/DataTable';
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function attributes(props: any) {
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

export default attributes;
