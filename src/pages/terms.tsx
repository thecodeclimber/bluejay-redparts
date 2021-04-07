// react
import React from 'react';
// application
import {
  Document,
  DocumentHeader,
  DocumentTitle,
  DocumentSubTitle,
  DocumentContent,
  Typography,
  DocumentSignature,
} from '~/styled-components/common/Document';
import AppImage from '~/components/shared/AppImage';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import Terms from '~/components/shared/Terms';

function Page() {
  return (
    <React.Fragment>
      <PageTitle>Terms And Conditions</PageTitle>

      <BlockSpace layout="spaceship-ledge-height" />

      <div className="block">
        <div className="container">
          <Document>
            <DocumentHeader>
              <DocumentTitle as="h1">Terms And Conditions</DocumentTitle>
              <DocumentSubTitle>
                This Agreement was last modified on 27 May 2018.
              </DocumentSubTitle>
            </DocumentHeader>
            <DocumentContent className="card">
              <Typography>
                <Terms />

                <DocumentSignature>
                  <AppImage
                    src="/images/signature.jpg"
                    width="160"
                    height="55"
                  />
                </DocumentSignature>
              </Typography>
            </DocumentContent>
          </Document>
        </div>
      </div>

      <BlockSpace layout="before-footer" />
    </React.Fragment>
  );
}

export default Page;
