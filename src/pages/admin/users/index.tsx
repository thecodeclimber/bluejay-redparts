import { Card, CardBody } from 'reactstrap';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import DataTable from '~/components/admin/DataTable';
import React from 'react';
import axios from 'axios';
import * as $ from 'jquery';
import { token } from '../../../token';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function admin(props: any) {
  const { user, error, isLoading } = useUser();
  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    var settings = {
      url: `https://dev-1u25317k.us.auth0.com/api/v2/users`,
      method: 'GET',
      timeout: 0,
      headers: {
        Authorization: token,
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  };

  return (
    <Card style={{ margin: '2rem' }}>
      <CardBody style={{ overflow: 'auto' }}></CardBody>
    </Card>
  );
}

export default admin;
