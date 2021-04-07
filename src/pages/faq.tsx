// react
import React from 'react';
// application
import {
  Faq,
  FaqHeader,
  FaqHeaderTitle,
  FaqSection,
  FaqSectionTitle,
  FaqSectionBody,
  FaqQuestion,
  FaqQuestionTitle,
  Typography,
  FaqFooter,
  FaqFooterTitle,
  FaqFooterSubtitle,
} from '~/styled-components/pages/Faq';
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';

function Page() {
  return (
    <React.Fragment>
      <PageTitle>Frequently Asked Questions</PageTitle>

      <BlockSpace layout="spaceship-ledge-height" />

      <Faq className="block">
        <div className="container container--max--xl">
          <FaqHeader>
            <FaqHeaderTitle as="h1">Frequently Asked Questions</FaqHeaderTitle>
          </FaqHeader>

          <FaqSection>
            <FaqSectionTitle as="h3">Shipping Information</FaqSectionTitle>
            <FaqSectionBody>
              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  What shipping methods are available?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>

              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  Do you ship internationally?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>

              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  How might I obtain an estimated date of delivery?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>

              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  Can I split my order to ship to different locations?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>
            </FaqSectionBody>
          </FaqSection>

          <FaqSection>
            <FaqSectionTitle as="h3">Payment Information</FaqSectionTitle>
            <FaqSectionBody>
              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  What payments methods are available?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>

              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  Can I split my payment?
                </FaqQuestionTitle>
                <div>
                  <Typography>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </Typography>
                </div>
              </FaqQuestion>
            </FaqSectionBody>
          </FaqSection>

          <FaqSection>
            <FaqSectionTitle as="h3">Orders and Returns</FaqSectionTitle>
            <FaqSectionBody>
              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  How do I return or exchange an item?
                </FaqQuestionTitle>
                <div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
              </FaqQuestion>

              <FaqQuestion>
                <FaqQuestionTitle as="h5">
                  How do I cancel an order?
                </FaqQuestionTitle>
                <div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
              </FaqQuestion>
            </FaqSectionBody>
          </FaqSection>

          <FaqFooter>
            <FaqFooterTitle>Still Have A Questions?</FaqFooterTitle>
            <FaqFooterSubtitle>
              We will be happy to answer any questions you may have.
            </FaqFooterSubtitle>
            <AppLink href={url.pageContactUs()} className="btn btn-primary">
              Contact Us
            </AppLink>
          </FaqFooter>
        </div>
      </Faq>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
