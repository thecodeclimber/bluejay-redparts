// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
// data
import theme from '~/data/theme';

function WidgetAboutUs() {
    const socialLinks = [
        { name: 'rss', icon: 'fas fa-rss', url: theme.author.profile_url },
        { name: 'youtube', icon: 'fab fa-youtube', url: theme.author.profile_url },
        { name: 'facebook', icon: 'fab fa-facebook-f', url: theme.author.profile_url },
        { name: 'twitter', icon: 'fab fa-twitter', url: theme.author.profile_url },
        { name: 'instagram', icon: 'fab fa-instagram', url: theme.author.profile_url },
    ];

    return (
        <div className="card widget widget-about-us">
            <div className="widget__header">
                <h4>About Blog</h4>
            </div>
            <div className="widget-about-us__body">
                <div className="widget-about-us__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam,
                    est erat faucibus purus,
                    eget viverra nulla sem vitae neque. Quisque id sodales libero.
                </div>
                <div className="widget-about-us__social-links social-links">
                    <ul className="social-links__list">
                        {socialLinks.map((socialLink, index) => (
                            <li key={index} className={`social-links__item social-links__item--${socialLink.name}`}>
                                <AppLink href={socialLink.url} target=" _blank">
                                    <i className={`widget-social__icon ${socialLink.icon}`} />
                                </AppLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WidgetAboutUs;
