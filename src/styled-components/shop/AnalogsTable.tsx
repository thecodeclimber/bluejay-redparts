import styled, { css } from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const AnalogsTableStyledComponent = styled.div`
  display: block;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    table {
      width: 100%;
      font-size: 15px;
      text-indent: initial;
      border-spacing: 2px;
      border-color: grey;
    }
    th:not(:first-child),
    td:not(:first-child) {
      padding-left: 16px;
    }
    th:first-child {
      padding-left: 14px;
      padding-bottom: 6px;
    }
    th:last-child {
      padding-right: 14px;
    }
    td:last-child {
      padding-right: 14px;
      border-right: 1px solid
        ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
    }
    td:first-child {
      direction: left;
      padding-left: 14px;
      border-left: 1px solid
        ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
    }
    tr:nth-child(n) {
      border-bottom: 1px solid
        ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
    }
    tr:hover {
      background-color: ${(props) =>
        `${props.theme.colors.widgetsearchbuttonhoverbgcolor}`};
    }
    td {
      border-top: 1px solid
        ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
      padding: 10px 0;
    }
  }
`;

export const AnalogsTableColumnBrand = styled.div`
  text-align: center;
`;

export const AnalogsTableColumnPrice = styled.div`
  text-align: right;
`;

export const AnalogsTableColumnRating = styled.div`
  text-align: center;
`;

export const AnalogsTableProductName = styled(AppLink)`
  color: inherit;
  transition: color 0.12s;
`;

export const AnalogsTableSku = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 13px;
  line-height: 1;
  margin-top: 1px;
  margin-bottom: 4px;
`;

export const AnalogsTableRating = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const AnalogstableRatingStars = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnalogsTableRatingLabel = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 13px;
  line-height: 1;
  @media (min-width: ${(props) => `${props.theme.breakPoints.sm}px`}) {
    margin-top: 6px;
  }
`;

export const AnalogsTableCountry = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 13px;
  line-height: 1;
  margin-top: 1px;
  margin-bottom: 4px;
`;
