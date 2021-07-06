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
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path === '/admin' ? 'blue' : 'blackAlpha'}
    >
      <i className="fab fa-product-hunt"></i>&nbsp;
      <Link href={url.admin()}>
        <Text w={'100%'}>Products</Text>
      </Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path == '/admin/sections' ? 'blue' : 'blackAlpha'}
    >
      <i className="fas fa-list"></i>&nbsp;
      <Link href={url.adminSectionPage()}>
        <Text w={'100%'}>Sections</Text>
      </Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path == '/admin/categories' ? 'blue' : 'blackAlpha'}
    >
      <i className="fas fa-list"></i>&nbsp;
      <Link href={url.adminCategoryPage()}>
        <Text w={'100%'}>Categories</Text>
      </Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path == '/admin/sub_categories' ? 'blue' : 'blackAlpha'}
    >
      <i className="fas fa-list"></i>&nbsp;
      <Link href={url.adminSubCategoryPage()}>
        <Text w={'100%'}>Sub Categories</Text>
      </Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path == '/admin/attributes' ? 'blue' : 'blackAlpha'}
    >
      <i className="fas fa-list"></i>&nbsp;
      <Link href={url.adminAttributePage()}>
        <Text w={'100%'}>Attributes</Text>
      </Link>
    </Button>
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      colorScheme={path == '/admin/users' ? 'blue' : 'blackAlpha'}
    >
      <i className="far fa-user"></i>&nbsp;
      <Link href={url.adminUserPage()}>
        <Text w={'100%'}>Users</Text>
      </Link>
    </Button>
  </VStack>
);

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
      <SidebarContent onClick={onClose} path={path} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
      <DrawerOverlay>
        <DrawerContent bg="#323232">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Admin Menu</DrawerHeader>
          <DrawerBody pl={0} pr={0}>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Nav;
