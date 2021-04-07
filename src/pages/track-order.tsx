// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  CardTitle,
  CardBodyPadding2,
} from '~/styled-components/components/Card';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';

function Page() {
  const intl = useIntl();

  return (
    <React.Fragment>
      <PageTitle>{intl.formatMessage({ id: 'HEADER_TRACK_ORDER' })}</PageTitle>

      <BlockSpace layout="after-header" />

      <div className="block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card ml-md-3 mr-md-3">
                <CardBodyPadding2 className="card-body">
                  <CardTitle as="h1" cardtitlelg>
                    <FormattedMessage id="HEADER_TRACK_ORDER" />
                  </CardTitle>

                  <p className="mb-4">
                    <FormattedMessage id="TEXT_TRACK_ORDER_HELP" />
                  </p>
                  <form>
                    <div className="form-group">
                      <label htmlFor="track-order-id">
                        <FormattedMessage id="INPUT_ORDER_ID_LABEL" />
                      </label>
                      <input
                        id="track-order-id"
                        type="text"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: 'INPUT_ORDER_ID_PLACEHOLDER',
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="track-email">
                        <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                      </label>
                      <input
                        id="track-email"
                        type="email"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER',
                        })}
                      />
                    </div>
                    <div className="form-group pt-4 mb-1">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                      >
                        <FormattedMessage id="BUTTON_TRACK" />
                      </button>
                    </div>
                  </form>
                </CardBodyPadding2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
