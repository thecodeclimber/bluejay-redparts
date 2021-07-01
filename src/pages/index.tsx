// react
import React, { useEffect, useMemo, useState } from 'react';
import { blogApi, shopApi } from '~/api';
import {
  useDeferredData,
  useProductColumns,
  useProductTabs,
} from '~/services/hooks';

// application
import BlockBanners from '~/components/blocks/BlockBanners';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockFinder from '~/components/blocks/BlockFinder';
import BlockPosts from '~/components/blocks/BlockPosts';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockProductsColumns from '~/components/blocks/BlockProductsColumns';
import BlockSale from '~/components/blocks/BlockSale';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockZone from '~/components/blocks/BlockZone';
import axios from '../axios';
import url from '~/services/url';
// third-party
import { useIntl } from 'react-intl';

function Page() {
  const intl = useIntl();
  const [products, setProducts] = useState({
    featuredProducts: [],
    topRatedProducts: [],
    latestProducts: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Featured products.
   */
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const feature: any = await axios.get('/products/feature');
        const best: any = await axios.get('/products/best');
        const latest: any = await axios.get('/products/latest');
        setProducts({
          featuredProducts: feature.data,
          topRatedProducts: best.data,
          latestProducts: latest.data,
        });
      } catch (err) {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  // const featuredProducts = useProductTabs(
  //   useMemo(
  //     () => [
  //       { id: 1, name: 'All', categorySlug: null },
  //       { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
  //       { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
  //       { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
  //     ],
  //     []
  //   ),
  //   (tab) => shopApi.getFeaturedProducts(tab.categorySlug, 8)
  // );

  const blockSale = useDeferredData(() => shopApi.getSpecialOffers(8), []);

  const blockZones = useMemo(
    () => [
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'anchor',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'bolts',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'hex-head-cap-screws',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'nuts',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'pins',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'screws',
      },
      {
        image: '/images/categories/category-overlay-3.jpg',
        mobileImage: '/images/categories/category-overlay-3-mobile.jpg',
        categorySlug: 'washer',
      },
    ],
    []
  );

  const newArrivalsLinks = useMemo(
    () => [
      { title: 'Wheel Covers', url: url.products() },
      { title: 'Timing Belts', url: url.products() },
      { title: 'Oil Pans', url: url.products() },
      { title: 'Show All', url: url.products() },
    ],
    []
  );

  const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
  const latestPostsLinks = useMemo(
    () => [
      { title: 'Special Offers', url: url.blog() },
      { title: 'New Arrivals', url: url.blog() },
      { title: 'Reviews', url: url.blog() },
    ],
    []
  );

  const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }), []);

  /**
   * Product columns.
   */


  return (
    <React.Fragment>
      <BlockFinder />
      <BlockSpace layout="divider-nl" />
      <BlockProductsCarousel
        blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
        layout="grid-5"
        loading={isLoading}
        products={products.featuredProducts}
        // groups={featuredProducts.tabs}
        // currentGroup={featuredProducts.tabs.find((x) => x.current)}
        // onChangeGroup={featuredProducts.handleTabChange}
      />
      <BlockSpace layout="divider-nl" />
      <BlockSale products={products.featuredProducts} loading={isLoading} />
      <BlockSpace layout="divider-lg" />

      {/* {blockZones.map((blockZone, blockZoneIdx) => ( */}
      {/* <React.Fragment key={blockZoneIdx}> */}
      {products.topRatedProducts.length && products.featuredProducts.length && (
        <BlockZone
          image={blockZones[0].image}
          mobileImage={blockZones[0].mobileImage}
          categorySlug={blockZones[0].categorySlug}
          productsList={products}
        />
      )}
      {/* {blockZoneIdx < blockZones.length - 1 && (
            <BlockSpace layout="divider-sm" />
          )} */}
      {/* </React.Fragment> */}
      {/* ))} */}

      <BlockSpace layout="divider-nl" />
      <BlockBanners />
      <BlockSpace layout="divider-nl" />
      {/* <BlockProductsCarousel
        blockTitle={intl.formatMessage({ id: 'HEADER_NEW_ARRIVALS' })}
        layout="horizontal"
        rows={2}
        loading={isLoading}
        products={newArrivals}
        links={newArrivalsLinks}
      /> */}
      <BlockSpace layout="divider-nl" />
      <BlockPosts
        blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
        layout="grid"
        loading={latestPosts.isLoading}
        posts={latestPosts.data}
        links={latestPostsLinks}
      />
      <BlockSpace layout="divider-nl" />
      <BlockBrands layout="columns-8-full" brands={brands.data} />
      <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
      {products.topRatedProducts.length && (
        <BlockProductsColumns products={products.topRatedProducts} />
      )}
      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
