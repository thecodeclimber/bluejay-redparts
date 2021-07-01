import React, { useState } from 'react';
import { Flex, Text, Divider, Avatar, Heading } from '@chakra-ui/react';
import NavItem from './NavItem';
import { HamburgerIcon } from '@chakra-ui/icons';
import url from '~/services/url';

export default function Nav() {
    const [navSize, changeNavSize] = useState('large');
    return (
        <Flex
            pos="sticky"
            left="5"
            h="99vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == 'small' ? '15px' : '30px'}
            w={navSize == 'small' ? '75px' : '200px'}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == 'small' ? 'center' : 'flex-start'}
                as="nav"
            >
                <HamburgerIcon
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    onClick={() => {
                        if (navSize == 'small') changeNavSize('large');
                        else changeNavSize('small');
                    }}
                />
                <NavItem navSize={navSize} title="Products" link={url.admin()} />
                <NavItem navSize={navSize} title="Sections" link={url.adminSectionPage()} active />
                <NavItem navSize={navSize} title="Categories" link={url.adminCategoryPage()} />
                <NavItem navSize={navSize} title="Sub Categories" link={url.adminSubCategoryPage()} />
                <NavItem navSize={navSize} title="Attributes" link={url.adminAttributePage()} />
            </Flex>
        </Flex>
    );
}
