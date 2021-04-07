// react
import React from 'react';
// application
import {
  About,
  AboutBody,
  AboutImage,
  AboutImageBg,
  AboutImageDecor,
  AboutCard,
  AboutCardTitle,
  AboutCardText,
  AboutCardAuthor,
  AboutCardSignature,
  AboutIndicators,
  AboutIndicatorsBody,
  AboutIndicatorsItem,
  AboutIndicatorsItemValue,
  AboutIndicatorsItemTitle,
} from '~/styled-components/pages/About';
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';

function Page() {
  return (
    <React.Fragment>
      <PageTitle>About Us</PageTitle>

      <About>
        <AboutBody>
          <AboutImage>
            <AboutImageBg
              style={{
                backgroundImage: `url(${baseUrl('/images/about.jpg')})`,
              }}
            />
            <AboutImageDecor as={Decor} type="bottom" />
          </AboutImage>

          <AboutCard>
            <AboutCardTitle>About Us</AboutCardTitle>
            <AboutCardText>
              RedParts is an international company with 30 years of history
              selling spare parts for cars, trucks and motorcycles. During our
              work we managed to create a unique service for the sale and
              delivery of spare parts around the world.
            </AboutCardText>
            <AboutCardAuthor>Ryan Ford, CEO RedParts</AboutCardAuthor>
            <AboutCardSignature>
              <AppImage src="/images/signature.jpg" width="160" height="55" />
            </AboutCardSignature>
          </AboutCard>

          <AboutIndicators>
            <AboutIndicatorsBody>
              <AboutIndicatorsItem>
                <AboutIndicatorsItemValue>350</AboutIndicatorsItemValue>
                <AboutIndicatorsItemTitle>
                  Stores around the world
                </AboutIndicatorsItemTitle>
              </AboutIndicatorsItem>
              <AboutIndicatorsItem>
                <AboutIndicatorsItemValue>80 000</AboutIndicatorsItemValue>
                <AboutIndicatorsItemTitle>
                  Original auto parts
                </AboutIndicatorsItemTitle>
              </AboutIndicatorsItem>
              <AboutIndicatorsItem>
                <AboutIndicatorsItemValue>5 000</AboutIndicatorsItemValue>
                <AboutIndicatorsItemTitle>
                  Satisfied customers
                </AboutIndicatorsItemTitle>
              </AboutIndicatorsItem>
            </AboutIndicatorsBody>
          </AboutIndicators>
        </AboutBody>
      </About>

      <BlockSpace layout="divider-xl" />

      <BlockTeammates />

      <BlockSpace layout="divider-xl" />

      <BlockReviews />

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
