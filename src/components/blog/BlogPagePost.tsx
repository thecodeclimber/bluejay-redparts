// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  PostView,
  PostHeader,
  PostHeaderImage,
  PostHeaderBody,
  PostHeaderCategories,
  PostHeaderCategoriesList,
  PostHeaderCategoriesItem,
  PostHeaderCategoriesLink,
  PostHeaderTitle,
  PostHeaderMeta,
  PostHeaderMetaList,
  PostHeaderMetaLink,
  PostHeaderMetaItem,
  PostViewBody,
  PostViewItem,
  PostViewItemPost,
  PostHeaderDecor,
} from '~/styled-components/blog/BlogPagePost';
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlogSidebar from '~/components/blog/BlogSidebar';
import Decor from '~/components/shared/Decor';
import Post from '~/components/blog/Post';
import { baseUrl } from '~/services/utils';
import { IBlogPageSidebarPosition } from '~/interfaces/pages';
import App from 'next/app';

interface Props {
  featuredImage?: boolean;
  sidebarPosition?: IBlogPageSidebarPosition | false;
}

function BlogPagePost(props: Props) {
  const { featuredImage = false, sidebarPosition = false } = props;

  return (
    <React.Fragment>
      <PostView className="block">
        <PostHeader hasimage={featuredImage}>
          {featuredImage && (
            <PostHeaderImage
              style={{
                backgroundImage: `url(${baseUrl('/images/posts/post-1.jpg')})`,
              }}
            />
          )}

          <PostHeaderBody>
            <PostHeaderCategories>
              <PostHeaderCategoriesList as="ul">
                <PostHeaderCategoriesItem as="li">
                  <PostHeaderCategoriesLink as={AppLink} href="/">
                    Latest News
                  </PostHeaderCategoriesLink>
                </PostHeaderCategoriesItem>
              </PostHeaderCategoriesList>
            </PostHeaderCategories>
            <PostHeaderTitle>
              Morbi Interdum Velit Quis Magna Placerat Lobortis Eget
            </PostHeaderTitle>
            <PostHeaderMeta>
              <PostHeaderMetaList>
                <PostHeaderMetaLink>
                  {'By '}
                  <PostHeaderMetaLink as={AppLink} href="/">
                    Jessica Moore
                  </PostHeaderMetaLink>
                </PostHeaderMetaLink>
                <PostHeaderMetaItem>November 30, 2018</PostHeaderMetaItem>
                <PostHeaderMetaItem>
                  <PostHeaderMetaLink as={AppLink} href="/">
                    4 Comments
                  </PostHeaderMetaLink>
                </PostHeaderMetaItem>
              </PostHeaderMetaList>
            </PostHeaderMeta>
          </PostHeaderBody>
          <PostHeaderDecor as={Decor} type="bottom" />
        </PostHeader>

        <div className="container">
          <PostViewBody>
            {sidebarPosition === 'start' && (
              <PostViewItem>
                <BlogSidebar />
              </PostViewItem>
            )}
            <PostViewItemPost as={Post} />
            {sidebarPosition === 'end' && (
              <PostViewItem>
                <BlogSidebar />
              </PostViewItem>
            )}
          </PostViewBody>
        </div>
      </PostView>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default BlogPagePost;
