import { Card, CardBody } from 'reactstrap';
import {
  withPageAuthRequired, useUser
} from '@auth0/nextjs-auth0';
import React, { useEffect, useState } from 'react';
import axios from '~/axios';
import { Flex, Box, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Nav from '~/components/admin/Nav';
import Error403 from '../403';
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
  const { user, error, loading } = useUser();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('/admin');
      localStorage.setItem('xxxxxxaxxxxdxxxxmxxxixxn', res.data.status);
      await setAuth(res.data.status);
    };
    let isAdmin = localStorage.getItem('xxxxxxaxxxxdxxxxmxxxixxn');

    if (user != undefined) {
      if (isAdmin == undefined || isAdmin == false) {
        fetch();
      } else {
        setAuth(isAdmin)
      }
    }
  }, [user]);
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: mdVariant, md: smVariant })

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  return (
    <>
      {auth ? <>
        <Nav
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton}>
          <Box>
            <Card style={{ margin: '2rem' }}>
              <Box pl="10px" pt="10px">
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
        </Box></> : <Error403 />}
    </>
  );
}

export default Layout;
