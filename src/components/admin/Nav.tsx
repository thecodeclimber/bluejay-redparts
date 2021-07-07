import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Avatar,
  Text,
} from '@chakra-ui/react';
import url from '~/services/url';
import NavItem from './NavItem';
interface Props {
  onClose: Function;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
}
import { useRouter } from 'next/router';

const Nav = ({ isOpen, variant, onClose }: Props) => {
  const router = useRouter();
  let path: any = router.pathname;

  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      pt={170}
      w="250px"
      top={0}
      h="100%"
      bg="#1E74DF"
    >
      {/* <SidebarContent onClick={onClose} path={path} /> */}
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
      <DrawerOverlay>
        <DrawerContent bg="#323232">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Admin Menu</DrawerHeader>
          <DrawerBody pl={0} pr={0}>
            <VStack>
              <NavItem
                icon={<i className="fa fa-list" aria-hidden="true"></i>}
                title={'Products'}
                link={url.admin()}
                onClose={onClose}
                active={path == '/admin' ? true : false}
              />
              <NavItem
                icon={<i className="fa fa-list"></i>}
                title={'Sections'}
                link={url.adminSectionPage()}
                onClose={onClose}
                active={path == '/admin/sections' ? true : false}
              />
              <NavItem
                icon={<i className="fa fa-list"></i>}
                title={'Categories'}
                link={url.adminCategoryPage()}
                onClose={onClose}
                active={path == '/admin/categories' ? true : false}
              />
              <NavItem
                icon={<i className="fa fa-list"></i>}
                title={'Sub Categories'}
                link={url.adminSubCategoryPage()}
                onClose={onClose}
                active={path == '/admin/sub_categories' ? true : false}
              />
              <NavItem
                icon={<i className="fa fa-list"></i>}
                title={'Attributes'}
                link={url.adminAttributePage()}
                onClose={onClose}
                active={path == '/admin/attributes' ? true : false}
              />
              <NavItem
                icon={<i className="fa fa-user"></i>}
                title={'Users'}
                link={url.adminUserPage()}
                onClose={onClose}
                active={path == '/admin/users' ? true : false}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Nav;
