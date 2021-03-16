// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import {
  BlockBlockTeammates,
  BlockTeammatesTitle,
  BlockTeammatesSubTitle,
  BlockTeammatesItem,
  BlockmateInfo,
  BlockmatePosition,
} from '~/styled-components/blocks/BlockTeammates';
// data
import dataSiteTeammates from '~/data/siteTeammates';

const slickSettings: ISlickProps = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 439,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function BlockTeammates() {
  return (
    <BlockBlockTeammates>
      <div className="container container--max--xl">
        <BlockTeammatesTitle>Professional Team</BlockTeammatesTitle>
        <BlockTeammatesSubTitle>
          Meet this is our professional team.
        </BlockTeammatesSubTitle>
        <div className="block-teammates__list">
          <AppSlick {...slickSettings}>
            {dataSiteTeammates.map((teammate, index) => (
              <BlockTeammatesItem key={index}>
                <div>
                  <AppImage src={teammate.avatar} />
                </div>
                <BlockmateInfo>
                  <div>{teammate.name}</div>
                  <BlockmatePosition>{teammate.position}</BlockmatePosition>
                </BlockmateInfo>
              </BlockTeammatesItem>
            ))}
          </AppSlick>
        </div>
      </div>
    </BlockBlockTeammates>
  );
}

export default BlockTeammates;
