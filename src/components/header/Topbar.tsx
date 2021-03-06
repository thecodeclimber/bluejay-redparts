// react
import React from "react";
// third-party
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
// application
import {
  TopbarStyledComponent,
  TopbarItemText,
  TopbarLink,
  TopbarItemSpring,
  TopbarButtonLabel,
  TopbarItemTitle,
} from "~/styled-components/header/Topbar";
import AppLink from "~/components/shared/AppLink";
import DropdownCurrency from "~/components/header/DropdownCurrency";
import DropdownLanguage from "~/components/header/DropdownLanguage";
import url from "~/services/url";
import { useCompare } from "~/store/compare/compareHooks";

type Layout = "spaceship-start" | "spaceship-end" | "classic";

interface Props {
  layout: Layout;
}

function Topbar(props: Props) {
  const { layout } = props;
  const compare = useCompare();

  const rootClasses = classNames( `topbar--spaceship-end`);

  return (
    <TopbarStyledComponent className={rootClasses}>
      {layout === "spaceship-start" && (
        <React.Fragment>
          <TopbarItemText className="d-none d-xxl-flex">
            <FormattedMessage id="TEXT_TOPBAR_PHONE" values={{ phone: "(800) 060-0730" }} />
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageAboutUs()}>
              <FormattedMessage id="LINK_ABOUT_US" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageContactUs()}>
              <FormattedMessage id="LINK_CONTACTS" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.trackOrder()}>
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </TopbarLink>
          </TopbarItemText>
        </React.Fragment>
      )}
      {layout === "classic" && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageAboutUs()}>
              <FormattedMessage id="LINK_ABOUT_US" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageContactUs()}>
              <FormattedMessage id="LINK_CONTACTS" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.pageStoreLocation()}>
              <FormattedMessage id="LINK_STORE_LOCATION" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.trackOrder()}>
              <FormattedMessage id="LINK_TRACK_ORDER" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemText>
            <TopbarLink as="a" href={url.blog()}>
              <FormattedMessage id="LINK_BLOG" />
            </TopbarLink>
          </TopbarItemText>
          <TopbarItemSpring />
        </React.Fragment>
      )}
      {layout !== "spaceship-start" && (
        <React.Fragment>
          <TopbarItemText>
            <TopbarLink as="a" href={url.compare()}>
              <TopbarButtonLabel>
                <FormattedMessage id="TEXT_TOPBAR_COMPARE" />:
              </TopbarButtonLabel>
              <TopbarItemTitle>{compare.items.length}</TopbarItemTitle>
            </TopbarLink>
          </TopbarItemText>

          <DropdownCurrency />

          <DropdownLanguage />
        </React.Fragment>
      )}
    </TopbarStyledComponent>
  );
}

export default Topbar;
