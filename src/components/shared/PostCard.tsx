// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  PostCardStyledComponent,
  PostCardContent,
  PostCardCategory,
  PostCardTitle,
  PostCardDate,
  PostCardExcerpt,
  Typography,
  PostCardMore,
} from '~/styled-components/PostCard';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { IPost } from '~/interfaces/post';

export type IPostCardLayout = 'list' | 'grid' | 'grid-sm';

interface Props {
  post: IPost;
  layout?: IPostCardLayout;
}

function PostCard(props: Props) {
  const { post, layout } = props;

  const rootClasses = classNames('post-card', {
    [`post-card--layout--${layout}`]: layout,
  });

  return (
    <div className={rootClasses}>
      <div className="post-card__image">
        <AppLink href={url.post(post)}>
          <AppImage src={post.image} />
        </AppLink>
      </div>
      <PostCardContent>
        <PostCardCategory>
          {post.categories.map((category, index) => (
            <AppLink href="/" key={index}>
              {category}
            </AppLink>
          ))}
        </PostCardCategory>
        <PostCardTitle>
          <h2>
            <AppLink href={url.post(post)}>{post.title}</AppLink>
          </h2>
        </PostCardTitle>
        <PostCardDate>
          {' By '}
          <AppLink href="/">Jessica Moore</AppLink>
          {' on '}
          {post.date}
        </PostCardDate>
        <PostCardExcerpt>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis neque ut purus fermentum, ac pretium nibh facilisis.
            Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
            sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
            pharetra nec enim blandit vulputate.
          </Typography>
        </PostCardExcerpt>
        <PostCardMore>
          <AppLink href={url.post(post)} className="btn btn-secondary btn-sm">
            Read more
          </AppLink>
        </PostCardMore>
      </PostCardContent>
    </div>
  );
}

export default PostCard;
