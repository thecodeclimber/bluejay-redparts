// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import {
  FooterNewsLetter,
  FooterNewsLetterTitle,
  FooterNewsLetterText,
  FooterNewsLetterForm,
  FooterNewsLetterFormInput,
  FooterNewsLetterFormButton,
  FooterNewsLetterSocialLinks,
  SocialLinksList,
  FooterNewsLetterTextSocial,
  SocialLinksItems,
} from '~/styled-components/footer/FooterNewsLetter';
// data
import theme from '~/data/theme';

const FooterNewsletter: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => {
    const intl = useIntl();

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const socialLinks = [
        { type: 'facebook', url: theme.author.profile_url, icon: 'fab fa-facebook-f' },
        { type: 'twitter', url: theme.author.profile_url, icon: 'fab fa-twitter' },
        { type: 'youtube', url: theme.author.profile_url, icon: 'fab fa-youtube' },
        { type: 'instagram', url: theme.author.profile_url, icon: 'fab fa-instagram' },
        { type: 'rss', url: theme.author.profile_url, icon: 'fas fa-rss' },
    ];

    return (
        <FooterNewsLetter>
            <FooterNewsLetterTitle>
                <FormattedMessage id="HEADER_NEWSLETTER" />
            </FooterNewsLetterTitle>
            <FooterNewsLetterText>
                <FormattedMessage id="TEXT_NEWSLETTER_MESSAGE" />
      </FooterNewsLetterText>

            <FooterNewsLetterForm onSubmit={handleFormSubmit}>
                <label className="sr-only" htmlFor="footer-newsletter-address">
                    <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                </label>
                <FooterNewsLetterFormInput
                    id="footer-newsletter-address"
                    type="text"
                    placeholder={intl.formatMessage({id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER',})}
               />
        <FooterNewsLetterFormButton type="submit">
          <FormattedMessage id="BUTTON_SUBSCRIBE" />
        </FooterNewsLetterFormButton>
      </FooterNewsLetterForm>

      <FooterNewsLetterTextSocial>
        <FormattedMessage id="TEXT_SOCIAL_LINKS_MESSAGE" />
      </FooterNewsLetterTextSocial>

      <FooterNewsLetterSocialLinks>
        <SocialLinksList>
          {socialLinks.map((link, index) => (
            <SocialLinksItems key={index} link={link.type}>
              <AppLink href={link.url} target="_blank">
                <i className={link.icon} />
              </AppLink>
            </SocialLinksItems>
          ))}
        </SocialLinksList>
      </FooterNewsLetterSocialLinks>
    </FooterNewsLetter>
  );
};

export default FooterNewsletter;
