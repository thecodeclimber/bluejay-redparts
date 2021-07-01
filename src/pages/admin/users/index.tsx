import { Card, CardBody } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import Nav from '~/components/admin/Nav';
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function users(props: any) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6}>
      <GridItem colSpan={1} pl={'10px'} bg="#333333" pt={'10px'}>
        <Nav />
      </GridItem>
      <GridItem colSpan={5}>
        <Card style={{ margin: '2rem' }}>
          <CardBody style={{ overflow: 'auto' }}>users</CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default users;
