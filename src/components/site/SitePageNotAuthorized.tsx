// react
import React from 'react';
// application
import {
  NotFound,
  NotFound404,
  NotFoundContent,
  NotFoundTitle,
  NotFoundText,
  NotFoundSearch,
  NotFoundSearchInput,
} from '~/styled-components/pages/PageNotFound';
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';

function SitePageNotAuthorized() {
  return (
    <React.Fragment>
      <PageTitle>This Page Not Authorized for you</PageTitle>

      <BlockSpace layout="spaceship-ledge-height" />

      <div className="block">
        <div className="container">
          <NotFound>
            <NotFound404>Oops! Error 403</NotFound404>

            <NotFoundContent>
              <NotFoundTitle as="h1">Permission Denied</NotFoundTitle>

              <NotFoundText as="p">
                {"you can't go to the page you're looking for."}
                <br />
              </NotFoundText>

              <AppLink href={url.home()} className="btn btn-secondary btn-sm">
                Go To Home Page
              </AppLink>
            </NotFoundContent>
          </NotFound>
        </div>
      </div>
      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default SitePageNotAuthorized;
