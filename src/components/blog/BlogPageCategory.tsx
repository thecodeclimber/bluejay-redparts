// react
import React, { useState } from 'react';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlogSidebar from '~/components/blog/BlogSidebar';
import PageTitle from '~/components/shared/PageTitle';
import Pagination from '~/components/shared/Pagination';
import PostCard, { IPostCardLayout } from '~/components/shared/PostCard';
import { IBlogPageLayout, IBlogPageSidebarPosition } from '~/interfaces/pages';
import {
  BlogViewBody,
  BlogView,
  BlogViewItemSideBar,
  BlogViewItemPosts,
} from '~/styled-components/blog/BlogView';
import {
  PostsView,
  PostsViewPagination,
} from '~/styled-components/blog/PostView';
import {
  PostsList,
  PostListBody,
  PostsListItem,
} from '~/styled-components/blog/PostList';
// data
import dataBlogPosts from '~/data/blogPosts';

interface Props {
  layout: IBlogPageLayout;
  sidebarPosition: IBlogPageSidebarPosition;
}

const cardLayoutMap: Record<IBlogPageLayout, IPostCardLayout> = {
  classic: 'grid',
  list: 'list',
  grid: 'grid-sm',
};

function BlogPageCategory(props: Props) {
  const { layout, sidebarPosition } = props;
  const [page, setPage] = useState(1);

  return (
    <React.Fragment>
      <PageTitle>Latest News</PageTitle>

      <BlockHeader
        pageTitle="Latest News"
        breadcrumb={[
          { title: 'Home', url: '' },
          { title: 'Breadcrumb', url: '' },
          { title: 'Current Page', url: '' },
        ]}
      />

      <BlogView layout={layout}>
        <div className="container">
          <BlogViewBody>
            {sidebarPosition === 'start' && (
              <BlogViewItemSideBar>
                <BlogSidebar />
              </BlogViewItemSideBar>
            )}
            <BlogViewItemPosts>
              <PostsView>
                <PostsList layout={layout}>
                  <PostListBody>
                    {dataBlogPosts.map((post, index) => (
                      <PostsListItem key={index}>
                        <PostCard post={post} layout={cardLayoutMap[layout]} />
                      </PostsListItem>
                    ))}
                  </PostListBody>
                </PostsList>
                <PostsViewPagination>
                  <Pagination
                    current={page}
                    siblings={1}
                    total={3}
                    onPageChange={setPage}
                  />
                </PostsViewPagination>
              </PostsView>
            </BlogViewItemPosts>
            {sidebarPosition === 'end' && (
              <BlogViewItemSideBar>
                <BlogSidebar />
              </BlogViewItemSideBar>
            )}
          </BlogViewBody>
        </div>
      </BlogView>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default BlogPageCategory;
