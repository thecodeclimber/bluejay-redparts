// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Rating from '~/components/shared/Rating';
import {
    BlockBlockReviews ,
    BlockReviewsTitle ,
    BlockReviewsSubTitle ,
    BlockReviewsItem ,
    BlockReviewsItemAvatar ,
    BlockReviewsItemContent ,
    BlockReviewsItemText ,
    BlockReviewsItemMeta ,
    BlockReviewsItemRating ,
    BlockReviewsItemAuthor
} from '~/styled-components/blocks/BlockReviews';
// data
import dataSiteTestimonials from '~/data/siteTestimonials';

const slickSettings: ISlickProps = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function BlockReviews() {
    return (
        <BlockBlockReviews >
            <div className="container">
                <BlockReviewsTitle >Testimonials</BlockReviewsTitle>
                <BlockReviewsSubTitle >
                    During our work we have accumulated
                    <br />
                    hundreds of positive reviews.
                </BlockReviewsSubTitle>
                <div className="block-reviews__list">
                    <AppSlick {...slickSettings}>
                        {dataSiteTestimonials.map((testimonial, index) => (
                            <BlockReviewsItem key={index} >
                                <BlockReviewsItemAvatar >
                                    <AppImage src={testimonial.avatar} />
                                </BlockReviewsItemAvatar>
                                <BlockReviewsItemContent >
                                    <BlockReviewsItemText >{testimonial.review}</BlockReviewsItemText>
                                    <BlockReviewsItemMeta >
                                        <BlockReviewsItemRating >
                                            <Rating value={testimonial.rating} />
                                        </BlockReviewsItemRating>
                                        <BlockReviewsItemAuthor >
                                            {`${testimonial.name}, ${testimonial.position}`}
                                        </BlockReviewsItemAuthor>
                                    </BlockReviewsItemMeta>
                                </BlockReviewsItemContent>
                            </BlockReviewsItem>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </BlockBlockReviews>
    );
}

export default BlockReviews;
