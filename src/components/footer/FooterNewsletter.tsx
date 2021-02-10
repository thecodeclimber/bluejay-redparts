// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
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
        <div className="footer-newsletter">
            <h5 className="footer-newsletter__title">
                <FormattedMessage id="HEADER_NEWSLETTER" />
            </h5>
            <div className="footer-newsletter__text">
                <FormattedMessage id="TEXT_NEWSLETTER_MESSAGE" />
            </div>

            <form className="footer-newsletter__form" onSubmit={handleFormSubmit}>
                <label className="sr-only" htmlFor="footer-newsletter-address">
                    <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                </label>
                <input
                    id="footer-newsletter-address"
                    type="text"
                    className="footer-newsletter__form-input"
                    placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}
                />
                <button
                    type="submit"
                    className="footer-newsletter__form-button"
                >
                    <FormattedMessage id="BUTTON_SUBSCRIBE" />
                </button>
            </form>

            <div className="footer-newsletter__text footer-newsletter__text--social">
                <FormattedMessage id="TEXT_SOCIAL_LINKS_MESSAGE" />
            </div>

            <div className="footer-newsletter__social-links social-links">
                <ul className="social-links__list">
                    {socialLinks.map((link, index) => (
                        <li key={index} className={`social-links__item social-links__item--${link.type}`}>
                            <AppLink href={link.url} target="_blank">
                                <i className={link.icon} />
                            </AppLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterNewsletter;
