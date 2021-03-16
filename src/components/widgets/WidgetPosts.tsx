// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { IPost } from '~/interfaces/post';
import {
  WidgetWidgetPosts,
  WidgetHeader,
  WidgetPostsList,
  WidgetPostsItem,
  WidgetPostsImage,
  WidgetPostsInfo,
  WidgetPostsName,
  WidgetPostsDate,
} from '~/styled-components/widget/WidgetPosts';
interface Props {
  widgetTitle?: React.ReactNode;
  posts: IPost[];
}

function WidgetPosts(props: Props) {
  const { widgetTitle, posts } = props;

  return (
    <WidgetWidgetPosts>
      {widgetTitle && (
        <WidgetHeader>
          <h4>{widgetTitle}</h4>
        </WidgetHeader>
      )}
      <WidgetPostsList>
        {posts.map((post, index) => (
          <WidgetPostsItem key={index}>
            <WidgetPostsImage>
              <AppLink href={url.post(post)}>
                <AppImage src={post.image} />
              </AppLink>
            </WidgetPostsImage>
            <WidgetPostsInfo>
              <WidgetPostsName>
                <AppLink href={url.post(post)}>{post.title}</AppLink>
              </WidgetPostsName>
              <WidgetPostsDate>{post.date}</WidgetPostsDate>
            </WidgetPostsInfo>
          </WidgetPostsItem>
        ))}
      </WidgetPostsList>
    </WidgetWidgetPosts>
  );
}

export default WidgetPosts;
