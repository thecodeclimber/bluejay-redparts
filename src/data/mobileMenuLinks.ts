// application
import { IMobileMenuLink } from '~/interfaces/mobile-menu-link';

const dataMobileMenuLinks: IMobileMenuLink[] = [
    {
        title: 'Home',
        url: '/',
        submenu: [
            { title: 'Home One', url: '/' },
            { title: 'Home Two', url: '/demo/home-two' },
            {
                title: 'Header Spaceship',
                url: '/demo/header-spaceship-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/demo/header-spaceship-variant-one' },
                    { title: 'Variant Two', url: '/demo/header-spaceship-variant-two' },
                    { title: 'Variant Three', url: '/demo/header-spaceship-variant-three' },
                ],
            },
            {
                title: 'Header Classic',
                url: '/demo/header-classic-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/demo/header-classic-variant-one' },
                    { title: 'Variant Two', url: '/demo/header-classic-variant-two' },
                    { title: 'Variant Three', url: '/demo/header-classic-variant-three' },
                    { title: 'Variant Four', url: '/demo/header-classic-variant-four' },
                    { title: 'Variant Five', url: '/demo/header-classic-variant-five' },
                ],
            },
            {
                title: 'Mobile Header',
                url: '/demo/mobile-header-variant-one',
                submenu: [
                    { title: 'Variant One', url: '/demo/mobile-header-variant-one' },
                    { title: 'Variant Two', url: '/demo/mobile-header-variant-two' },
                ],
            },
        ],
    },
    {
        title: 'Shop',
        url: '/demo/shop/shop-grid-4-sidebar',
        submenu: [
            {
                title: 'Category',
                url: '/demo/shop/category-columns-4-sidebar',
                submenu: [
                    { title: '3 Columns Sidebar', url: '/demo/shop/category-columns-3-sidebar' },
                    { title: '4 Columns Sidebar', url: '/demo/shop/category-columns-4-sidebar' },
                    { title: '5 Columns Sidebar', url: '/demo/shop/category-columns-5-sidebar' },
                    { title: '4 Columns Full', url: '/demo/shop/category-columns-4-full' },
                    { title: '5 Columns Full', url: '/demo/shop/category-columns-5-full' },
                    { title: '6 Columns Full', url: '/demo/shop/category-columns-6-full' },
                    { title: '7 Columns Full', url: '/demo/shop/category-columns-7-full' },
                    { title: 'Right Sidebar', url: '/demo/shop/category-right-sidebar' },
                ],
            },
            {
                title: 'Shop Grid',
                url: '/demo/shop/shop-grid-4-sidebar',
                submenu: [
                    { title: '6 Columns Full', url: '/demo/shop/shop-grid-6-full' },
                    { title: '5 Columns Full', url: '/demo/shop/shop-grid-5-full' },
                    { title: '4 Columns Full', url: '/demo/shop/shop-grid-4-full' },
                    { title: '4 Columns Sidebar', url: '/demo/shop/shop-grid-4-sidebar' },
                    { title: '3 Columns Sidebar', url: '/demo/shop/shop-grid-3-sidebar' },
                ],
            },
            { title: 'Shop List', url: '/demo/shop/shop-list' },
            { title: 'Shop Table', url: '/demo/shop/shop-table' },
            { title: 'Shop Right Sidebar', url: '/demo/shop/shop-right-sidebar' },
            {
                title: 'Product',
                url: '/demo/shop/product-full',
                submenu: [
                    { title: 'Full Width', url: '/demo/shop/product-full' },
                    { title: 'Left Sidebar', url: '/demo/shop/product-sidebar' },
                ],
            },
            { title: 'Cart', url: '/cart' },
            { title: 'Checkout', url: '/cart/checkout' },
            { title: 'Order Success', url: '/demo/shop/order-success' },
            { title: 'Wishlist', url: '/wishlist' },
            { title: 'Compare', url: '/compare' },
            { title: 'Track Order', url: '/track-order' },
        ],
    },
    {
        title: 'Blog',
        url: '/demo/blog/classic-right-sidebar',
        submenu: [
            {
                title: 'Blog Classic',
                url: '/demo/blog/classic-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/classic-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/classic-right-sidebar' },
                ],
            },
            {
                title: 'Blog List',
                url: '/demo/blog/list-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/list-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/list-right-sidebar' },
                ],
            },
            {
                title: 'Blog Grid',
                url: '/demo/blog/grid-right-sidebar',
                submenu: [
                    { title: 'Left Sidebar', url: '/demo/blog/grid-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/grid-right-sidebar' },
                ],
            },
            {
                title: 'Post Page',
                url: '/demo/blog/post-full-width',
                submenu: [
                    { title: 'Full Width', url: '/demo/blog/post-full-width' },
                    { title: 'Left Sidebar', url: '/demo/blog/post-left-sidebar' },
                    { title: 'Right Sidebar', url: '/demo/blog/post-right-sidebar' },
                ],
            },
            { title: 'Post Without Image', url: '/demo/blog/post-without-image' },
        ],
    },
    {
        title: 'Account',
        url: '/account/dashboard',
        submenu: [
            { title: 'Login & Register', url: '/account/login' },
            { title: 'Dashboard', url: '/account/dashboard' },
            { title: 'Garage', url: '/account/garage' },
            { title: 'Edit Profile', url: '/account/profile' },
            { title: 'Order History', url: '/account/orders' },
            {
                title: 'Order Details',
                url: {
                    href: '/account/orders/[id]?id=1',
                    as: '/account/orders/1',
                },
            },
            { title: 'Address Book', url: '/account/addresses' },
            {
                title: 'Edit Address',
                url: {
                    href: '/account/addresses/[id]?id=new',
                    as: '/account/addresses/new',
                },
            },
            { title: 'Change Password', url: '/account/password' },
        ],
    },
    {
        title: 'Pages',
        url: '/about-us',
        submenu: [
            { title: 'About Us', url: '/about-us' },
            { title: 'Contact Us v1', url: '/demo/site/contact-us-v1' },
            { title: 'Contact Us v2', url: '/demo/site/contact-us-v2' },
            { title: '404', url: '/demo/site/not-found' },
            { title: 'Terms And Conditions', url: '/terms' },
            { title: 'FAQ', url: '/faq' },
            { title: 'Components', url: '/demo/site/components' },
            { title: 'Typography', url: '/demo/site/typography' },
        ],
    },
    {
        title: 'Buy Theme',
        url: 'https://themeforest.net/user/kos9/portfolio',
        customFields: {
            anchorProps: {
                target: '_blank',
            },
            highlight: true,
        },
    },
];

export default dataMobileMenuLinks;
