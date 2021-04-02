// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  PostBody,
  PostPagination,
  PostPaginationTitle,
  PostPaginationList,
  PostPaginationLink,
  PostFooter,
  PostTags,
  TagsList,
  PostShareLinks,
  PostAuthor,
  PostAuthorAvatar,
  PostAuthorInfo,
  PostAuthorName,
  PostAuthorAbout,
  PostViewCard,
  PostNavigationBody,
  PostNavigationItemImage,
  PostNavigationDirection,
  PostNavigationDirectionArrow,
  PostNavigationItemTitle,
  PostNavigationItemNext,
  PostNavigationItemPrev,
  PostViewCardTitle,
  CommentsViewPagination,
  PostViewCardBody,
} from '~/styled-components/blog/Post';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import CommentsList from '~/components/blog/CommentsList';
import Pagination from '~/components/shared/Pagination';
import ShareLinks from '~/components/shared/ShareLinks';
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';
// data
import dataBlogComments from '~/data/blogComments';
import dataBlogPosts from '~/data/blogPosts';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Post(props: Props) {
  const { className, ...rootProps } = props;

  const rootClasses = classNames(className);

  return (
    <div className={rootClasses} {...rootProps}>
      <PostViewCard className="post">
        <PostBody className="typography">
          <p>
            Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit
            maximus. Morbi interdum velit quis magna placerat lobortis eget
            pharetra magna. Nulla tristique sollicitudin turpis, eget maximus
            risus faucibus non. Nulla vestibulum ipsum risus, vitae maximus nunc
            bibendum quis.
          </p>
          <p>
            Raesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla
            sodales, leo metus volutpat risus, at suscipit ipsum diam eget sem.
            Maecenas dictum elit in enim molestie, vel sollicitudin erat
            ultricies. Sed risus tellus, molestie finibus dui quis, suscipit
            consequat ex.
          </p>
          <blockquote>
            <p>
              Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies
              dolor et semper placerat. Proin at lectus felis.
            </p>
            <p>
              <cite>John Mcarthy</cite>
            </p>
          </blockquote>
          <p>
            Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non
            ante et ultrices. Donec sit amet sem lobortis, ullamcorper felis at,
            finibus sem. Curabitur tincidunt neque nunc.
          </p>
          <h2>Nam Eget Blandit Diam</h2>
          <p>
            Quisque semper magna eget libero maximus, a sollicitudin nunc
            hendrerit. Cras efficitur, ante vitae fringilla rutrum, mi tortor
            dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non
            ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum
            neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.
          </p>
          <p>
            Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit
            maximus. Morbi interdum velit quis magna placerat lobortis eget
            pharetra magna.
          </p>
          <p>
            <strong>Nulla fringilla:</strong>{' '}
            <AppLink href="/">Donec aliquet at felis et dignissim</AppLink>
          </p>

          <figure>
            <AppLink href="/">
              <AppImage src="/images/posts/post-3.jpg" />
            </AppLink>
            <figcaption>
              Nunc viverra, dui nec commodo dignissim, libero arcu.
            </figcaption>
          </figure>

          <p>
            Vestibulum non varius lectus. Cras vel elit id ligula laoreet
            imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante
            facilisis pharetra.
          </p>
          <p>
            Phasellus ut elit vestibulum, dignissim mi non, suscipit ex.
            Praesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla
            sodales, leo metus volutpat risus,{' '}
            <AppLink href="/">at suscipit ipsum diam eget sem</AppLink>.
            Maecenas dictum elit in enim molestie, vel sollicitudin erat
            ultricies. Sed risus tellus, molestie finibus dui quis, suscipit
            consequat ex.
          </p>
          <hr />
          <h2>Nunc Dapibus Varius Ligula</h2>
          <p>
            Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt
            justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus.
            Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet
            velit. Suspendisse sed velit nec ante facilisis pharetra. Duis vitae
            fermentum elit. Integer ac mattis elit.
          </p>
          <p>
            Mauris scelerisque non ante et ultrices. Donec sit amet sem
            lobortis:
          </p>
          <ol>
            <li>
              Duis <strong>finibus imperdiet ultricies</strong>. Donec vel
              pretium turpis. In auctor euismod posuere.
            </li>
            <li>
              Praesent dictum tincidunt justo, ac tincidunt ante fermentum at.
              Vestibulum non varius lectus. Cras vel elit id ligula laoreet
              imperdiet.
            </li>
            <li>
              <strong>In iaculis porttitor luctus</strong>. Maecenas ultricies
              dolor et semper placerat. Proin at lectus felis. Quisque dapibus
              auctor justo id dictum.
            </li>
          </ol>
          <p>
            Ut faucibus non ante dapibus efficitur. Nam eget blandit diam,
            imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac,
            elementum vitae leo.
          </p>
        </PostBody>

        <PostPagination>
          <PostPaginationTitle>Pages</PostPaginationTitle>
          <PostPaginationList>
            <ul>
              <li>
                <PostPaginationLink isActive>1</PostPaginationLink>
              </li>
              <li>
                <PostPaginationLink as={AppLink} href="/">
                  2
                </PostPaginationLink>
              </li>
              <li>
                <PostPaginationLink as={AppLink} href="/">
                  3
                </PostPaginationLink>
              </li>
            </ul>
          </PostPaginationList>
        </PostPagination>

        <PostFooter>
          <PostTags>
            <TagsList>
              <AppLink href="/">Promotion</AppLink>
              <AppLink href="/">Power Tool</AppLink>
              <AppLink href="/">Wrench</AppLink>
              <AppLink href="/">Electrodes</AppLink>
            </TagsList>
          </PostTags>
          <PostShareLinks as={ShareLinks} />
        </PostFooter>

        <PostAuthor>
          <PostAuthorAvatar>
            <AppImage src="/images/avatars/avatar-4.jpg" />
          </PostAuthorAvatar>
          <PostAuthorInfo>
            <PostAuthorName>Ryan Ford</PostAuthorName>
            <PostAuthorAbout>
              Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis
              in mattis in, vehicula eu nulla. Nulla nec tellus pellentesque.
            </PostAuthorAbout>
          </PostAuthorInfo>
        </PostAuthor>
      </PostViewCard>

      <PostViewCard>
        <PostNavigationBody>
          <PostNavigationItemPrev as={AppLink} href="/">
            <PostNavigationItemImage>
              <AppImage src={dataBlogPosts[1].image} />
            </PostNavigationItemImage>
            <div>
              <PostNavigationDirection>
                <PostNavigationDirectionArrow>
                  <ArrowRoundedLeft7x11Svg />
                </PostNavigationDirectionArrow>
                <div>Previous post</div>
              </PostNavigationDirection>
              <PostNavigationItemTitle>
                {dataBlogPosts[1].title}
              </PostNavigationItemTitle>
            </div>
          </PostNavigationItemPrev>

          <PostNavigationItemNext as={AppLink} href="/">
            <div>
              <PostNavigationDirection>
                <div>Next post</div>
                <PostNavigationDirectionArrow>
                  <ArrowRoundedRight7x11Svg />
                </PostNavigationDirectionArrow>
              </PostNavigationDirection>
              <PostNavigationItemTitle>
                {dataBlogPosts[2].title}
              </PostNavigationItemTitle>
            </div>
            <PostNavigationItemImage>
              <AppImage src={dataBlogPosts[2].image} />
            </PostNavigationItemImage>
          </PostNavigationItemNext>
        </PostNavigationBody>
      </PostViewCard>

      <PostViewCard>
        <PostViewCardTitle as="h2">
          Comments ({dataBlogComments.count})
        </PostViewCardTitle>

        <PostViewCardBody>
          <CommentsList comments={dataBlogComments.items} />

          <CommentsViewPagination>
            <Pagination current={1} siblings={2} total={3} />
          </CommentsViewPagination>
        </PostViewCardBody>
      </PostViewCard>

      <PostViewCard>
        <PostViewCardTitle as="h2">Write A Comment</PostViewCardTitle>

        <PostViewCardBody as="form">
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="comment-first-name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="comment-first-name"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="comment-last-name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="comment-last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="comment-email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="comment-email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comment-content">Comment</label>
            <textarea className="form-control" id="comment-content" rows={6} />
          </div>
          <div className="form-group mb-0">
            <button type="submit" className="btn btn-primary mt-md-4 mt-2">
              Post Comment
            </button>
          </div>
        </PostViewCardBody>
      </PostViewCard>
    </div>
  );
}

export default Post;
