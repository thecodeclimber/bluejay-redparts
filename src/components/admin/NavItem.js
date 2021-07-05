import React from 'react';
import { Flex, Text, Icon, Menu, MenuButton } from '@chakra-ui/react';
import Link from "next/link";

export default function NavItem({ title, onClose, link, active }) {

  return (
    <Flex
      // mt={30}
      flexDir="column"
      w="100%"
    // alignItems={navSize == 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement="right" onClick={onClose} >
        <Link href={link} >
          <MenuButton w="100%" backgroundColor={active && '#4d4d4d'}
            p={3}
            _hover={{ textDecor: 'none', backgroundColor: '#4d4d4d' }}>
            <Flex>
              <Icon fontSize="xl" color={active ? '#fff' : '#fff'} />
              <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'} color={active ? '#fff' : '#fff'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
