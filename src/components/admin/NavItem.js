import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import Link from "next/link";

export default function NavItem({ icon, title, onClose, link, active }) {

  return (
    <Button
      onClick={onClose}
      w="100%"
      borderRadius={'none'}
      textAlign="left"
      backgroundColor={active ? '#000' : '#171923'}
      _hover={{ backgroundColor: "#000" }}
    >
      <Link href={link}>
        <Text w={'100%'} color={active ? "#fff" : "#ddd"} _hover={{ color: "#fff" }}>
          {icon}&nbsp;{title}
        </Text>
      </Link>
    </Button>
  );
}
