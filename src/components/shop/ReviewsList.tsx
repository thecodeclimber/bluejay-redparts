// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import Pagination from '~/components/shared/Pagination';
import Rating from '~/components/shared/Rating';
import { IReviewsList } from '~/interfaces/list';
import {
  ReviewsReviewsList,
  ReviewsListContent,
  ReviewsListItem,
  Review,
  ReviewBody,
  ReviewAvatar,
  ReviewMeta,
  ReviewAuthor,
  ReviewDate,
  ReviewRating,
  ReviewContentTypography,
  ReviewsListPagination,
} from '~/styled-components/shop/ReviewsList';
interface Props {
  list: IReviewsList;
  page: number;
  onPageChange?: (page: number) => void;
}

function ReviewsList(props: Props) {
  const { list, page, onPageChange } = props;

  return (
    <ReviewsReviewsList>
      {list.total === 0 && <FormattedMessage id="TEXT_REVIEWS_LIST_EMPTY" />}
      {list.total > 0 && (
        <React.Fragment>
          <ReviewsListContent>
            {list.items.map((review, index) => (
              <ReviewsListItem key={index}>
                <Review>
                  <ReviewBody>
                    <ReviewAvatar>
                      <AppImage src={review.avatar} />
                    </ReviewAvatar>
                    <ReviewMeta>
                      <ReviewAuthor>{review.author}</ReviewAuthor>
                      <ReviewDate>
                        <FormattedMessage
                          id="FORMAT_DATE_MEDIUM"
                          values={{ date: Date.parse(review.date) }}
                        />
                      </ReviewDate>
                    </ReviewMeta>
                    <ReviewRating>
                      <Rating value={review.rating} />
                    </ReviewRating>
                    <ReviewContentTypography>
                      {review.content}
                    </ReviewContentTypography>
                  </ReviewBody>
                </Review>
              </ReviewsListItem>
            ))}
          </ReviewsListContent>
          <ReviewsListPagination>
            <Pagination
              current={page}
              total={list.pages}
              siblings={2}
              onPageChange={onPageChange}
            />
          </ReviewsListPagination>
        </React.Fragment>
      )}
    </ReviewsReviewsList>
  );
}

export default ReviewsList;
