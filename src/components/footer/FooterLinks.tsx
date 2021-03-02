// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { ILink } from '~/interfaces/link';
import {
  FooterLinksTitle,
  FooterLink,
  FooterLinksList,
  FooterLinksItem,
  FooterLinksLink,
} from '~/styled-components/footer/FooterLinks';
interface Props extends React.HTMLAttributes<HTMLElement> {
  header: React.ReactNode;
  links: ILink[];
}

function FooterLinks(props: Props) {
  const { header, links } = props;

  return (
    <FooterLink>
      <FooterLinksTitle>{header}</FooterLinksTitle>
      <FooterLinksList>
        {links.map((link, index) => (
          <FooterLinksItem key={index}>
            <FooterLinksLink href={link.url}>{link.title}</FooterLinksLink>
          </FooterLinksItem>
        ))}
      </FooterLinksList>
    </FooterLink>
  );
}

export default FooterLinks;
