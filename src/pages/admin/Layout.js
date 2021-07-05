import { Card, CardBody } from 'reactstrap';
import {
  withPageAuthRequired,
} from '@auth0/nextjs-auth0';
import React, { useEffect, useState } from 'react';
import axios from '~/axios';
import { Flex, Box, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Nav from '~/components/admin/Nav';
import Home from '../index';
const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return { props: {} };
  },
});

function Layout(props) {
  const { children } = props;
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('/admin');
      setAuth(res.data.status);
    };
    fetch();
  }, []);
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: mdVariant, md: smVariant })

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  console.log(toggleSidebar)
  return (
    <>

      {/* {auth ?
        <Flex w="100%">
          <Nav />
          <Box w="80%">
            <Card style={{ margin: '2rem' }}>
              <CardBody style={{ overflow: 'auto' }}>
                {children}
              </CardBody>
            </Card>
          </Box>
        </Flex> : (<Home />)} */}
      {/* <Flex w="100%"> */}
      <Nav
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton}>
        <Box>
          <Card style={{ margin: '2rem' }}>
            <Box>
              {variants?.navigationButton && (
                <IconButton
                  icon={<ChevronRightIcon w={8} h={8} />}
                  colorScheme="blackAlpha"
                  variant="outline"
                  onClick={toggleSidebar}
                />
              )}
            </Box>
            {children}
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
