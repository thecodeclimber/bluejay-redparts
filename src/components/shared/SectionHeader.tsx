// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  SectionHeaderStyledComponent,
  SectionHeaderBody,
  SectionHeaderTitle,
  SectionHeaderLinks,
  SectionHeaderSpring,
  SectionHeaderLinksItem,
  SectionHeaderLinksLink,
  SectionHeaderGroups,
  SectionHeaderGroupsButton,
  SectionHeaderArrows,
  SectionHeaderDivider,
  SectionHeaderArrowNext,
} from '~/styled-components/components/SectionHeader';
import AppLink from '~/components/shared/AppLink';
import Arrow from '~/components/shared/Arrow';
import { ILink } from '~/interfaces/link';

export interface ISectionHeaderGroup {
  name: string;
}

interface Props<T extends ISectionHeaderGroup> {
  sectionTitle?: React.ReactNode;
  arrows?: boolean;
  groups?: T[];
  currentGroup?: T;
  links?: ILink[];
  onNext?: () => void;
  onPrev?: () => void;
  onChangeGroup?: (group: T) => void;
}

function SectionHeader<T extends ISectionHeaderGroup>(props: Props<T>) {
  const {
    sectionTitle,
    arrows = false,
    groups = [],
    links = [],
    currentGroup,
    onNext,
    onPrev,
    onChangeGroup,
  } = props;

  return (
    <SectionHeaderStyledComponent className="section-header">
      <SectionHeaderBody>
        {sectionTitle && (
          <SectionHeaderTitle as="h2">{sectionTitle}</SectionHeaderTitle>
        )}

        <SectionHeaderSpring />

        {groups.length === 0 && links.length > 0 && (
          <SectionHeaderLinks as="ul">
            {links.map((link, index) => (
              <SectionHeaderLinksItem as="li" key={index}>
                <SectionHeaderLinksLink as={AppLink} href={link.url}>
                  {link.title}
                </SectionHeaderLinksLink>
              </SectionHeaderLinksItem>
            ))}
          </SectionHeaderLinks>
        )}

        {groups.length > 0 && (
          <SectionHeaderGroups>
            {groups.map((group, index) => (
              <li key={index}>
                <SectionHeaderGroupsButton
                  as="button"
                  isActive={group === currentGroup}
                  type="button"
                  onClick={() => onChangeGroup && onChangeGroup(group)}
                >
                  {group.name}
                </SectionHeaderGroupsButton>
              </li>
            ))}
          </SectionHeaderGroups>
        )}

        {arrows && (
          <SectionHeaderArrows>
            <Arrow direction="prev" onClick={onPrev} />
            <SectionHeaderArrowNext
              as={Arrow}
              direction="next"
              onClick={onNext}
            />
          </SectionHeaderArrows>
        )}
        <SectionHeaderDivider />
      </SectionHeaderBody>
    </SectionHeaderStyledComponent>
  );
}

export default SectionHeader;
