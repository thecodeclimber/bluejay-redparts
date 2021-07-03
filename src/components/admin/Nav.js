import React, { useState } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import NavItem from './NavItem';
import { HamburgerIcon } from '@chakra-ui/icons';

import url from '~/services/url';
import { useRouter } from 'next/router';
export default function Nav() {
    const router = useRouter();
    let path = router.pathname;
    const [navSize, changeNavSize] = useState('large');
    return (
        <Box
            pos="sticky"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            flexDir="column"
            justifyContent="space-between"
            background="#1e74df"
            w={navSize === 'small' ? "75px" : "200px"}
        >
            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize == 'small' ? 'center' : 'flex-end'}
                as="nav"
            >
                <Text background="none" onClick={() => {
                    if (navSize == 'small') changeNavSize('large');
                    else changeNavSize('small');
                }} color="#fff" p={2}>
                    <HamburgerIcon color={"white"} fontSize={"25px"} />
                </Text>
                <NavItem navSize={navSize} title="Products" link={url.admin()} active={path == '/admin' ? true : false} />
                <NavItem navSize={navSize} title="Sections" link={url.adminSectionPage()} active={path == '/admin/sections' ? true : false} />
                <NavItem navSize={navSize} title="Categories" link={url.adminCategoryPage()} active={path == '/admin/categories' ? true : false} />
                <NavItem navSize={navSize} title="Sub Categories" link={url.adminSubCategoryPage()} active={path == '/admin/sub_categories' ? true : false} />
                <NavItem navSize={navSize} title="Attributes" link={url.adminAttributePage()} active={path == '/admin/attributes' ? true : false} />
            </Flex>
        </Box>
    );
}
