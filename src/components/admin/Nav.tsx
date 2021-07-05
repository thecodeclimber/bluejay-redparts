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
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import NavItem from './NavItem';
import url from '~/services/url';
interface Props {
  onClose: Function;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
}
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarContent = ({ onClose, path }: any) => (
  <VStack>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path === '/admin' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.admin()}>Products</Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path == '/admin/sections' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.adminSectionPage()}>Sections</Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path == '/admin/categories' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.adminCategoryPage()}>Categories</Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path == '/admin/sub_categories' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.adminSubCategoryPage()}>Sub Categories</Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path == '/admin/attributes' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.adminAttributePage()}>Attributes</Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      colorScheme={path == '/admin/users' ? 'blue' : 'blackAlpha'}
    >
      <Link href={url.adminUserPage()}>Users</Link>
    </Button>
  </VStack>
);

const Nav = ({ isOpen, variant, onClose }: Props) => {
  const router = useRouter();
  let path: any = router.pathname;
  console.log(path);
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      pt={170}
      w="250px"
      top={0}
      h="100%"
      bg="#1E74DF"
      zIndex="9999"
    >
      <SidebarContent onClick={onClose} path={path} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Nav;
