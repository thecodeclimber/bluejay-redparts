// react
import React from 'react';
// application
import {
  Widget,
  WidgetHeader,
  WidgetAboutUsBody,
  WidgetAboutUsText,
  WidgetAboutUsSocialLinks
} from '~/styled-components/widget/WidgetAboutUs';

import { SocialLinksList,SocialLinksItem} from '~/styled-components/SocialLinks';
import AppLink from '~/components/shared/AppLink';
// data
import theme from '~/data/theme';

function WidgetAboutUs() {
  const socialLinks = [
    { name: 'rss', icon: 'fas fa-rss', url: theme.author.profile_url },
    { name: 'youtube', icon: 'fab fa-youtube', url: theme.author.profile_url },
    {
      name: 'facebook',
      icon: 'fab fa-facebook-f',
      url: theme.author.profile_url,
    },
    { name: 'twitter', icon: 'fab fa-twitter', url: theme.author.profile_url },
    {
      name: 'instagram',
      icon: 'fab fa-instagram',
      url: theme.author.profile_url,
    },
  ];

  return (
    <Widget className="card">
      <WidgetHeader>
        <h4>About Blog</h4>
      </WidgetHeader>
      <WidgetAboutUsBody>
        <WidgetAboutUsText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
          viverra nulla sem vitae neque. Quisque id sodales libero.
        </WidgetAboutUsText>
        <WidgetAboutUsSocialLinks className="social-links">
          <SocialLinksList>
            {socialLinks.map((socialLink, index) => (
              <SocialLinksItem
                key={index}
                className={`social-links__item social-links__item--${socialLink.name}`}
              >
                <AppLink href={socialLink.url} target=" _blank">
                  <i className={`widget-social__icon ${socialLink.icon}`} />
                </AppLink>
              </SocialLinksItem>
            ))}
          </SocialLinksList>
        </WidgetAboutUsSocialLinks>
      </WidgetAboutUsBody>
    </Widget>
  );
}

export default WidgetAboutUs;
