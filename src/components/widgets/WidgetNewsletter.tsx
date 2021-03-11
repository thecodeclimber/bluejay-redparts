// react
import React from 'react';
// application
import {
  WidgetNewsLetter,
  WidgetNewsLetterTitle,
  WidgetNewsLetterForm,
  WidgetNewsLetterText,
  WidgetNewsLetterEmail,
  WidgetNewsLetterButton,
} from '~/styled-components/widget/WidgetNewsletter';

function WidgetNewsletter() {
  return (
    <WidgetNewsLetter>
      <WidgetNewsLetterTitle>
        <h4>Newsletter</h4>
      </WidgetNewsLetterTitle>
      <WidgetNewsLetterForm>
        <form action="">
          <WidgetNewsLetterText>
            Enter your email address below to subscribe to our newsletter and
            keep up to date with the latest news, discounts and special offers.
          </WidgetNewsLetterText>
          <WidgetNewsLetterEmail type="text" placeholder="Email Address..." />
          <WidgetNewsLetterButton type="button">
            Subscribe
          </WidgetNewsLetterButton>
        </form>
      </WidgetNewsLetterForm>
    </WidgetNewsLetter>
  );
}

export default WidgetNewsletter;
