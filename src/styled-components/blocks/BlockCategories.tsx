import styled from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const BlockBlockCategories = styled.div``;

export const BlockCategoriesHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlockCategoriesTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: -24px;
  padding: 0 64px 28px;
`;

export const BlockCategoriesBody = styled.div`
  position: relative;
  background-color: ${(props) =>
    `${props.theme.colors.blockcategoriesbgcolor}`};
  padding: 76px 0 64px;
  box-shadow: inset 0 1px 5px
    ${(props) => `${props.theme.colors.blockcategoriesbodycolor}`};
`;

export const BlockCategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    margin: -8px;
  }
  @media (min-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    margin: -12px;
  }
`;

export const BlockCategoriesItem = styled.div`
  display: flex;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    width: calc((100% - 48px) / 3);
    margin: 8px;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) {
    width: calc((100% - 32px) / 2);
    margin: 8px;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    width: calc((100% - 48px) / 3);
    margin: 8px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: calc((100% - 32px) / 2);
    margin: 8px;
  }
  @media (max-width: 474px) {
    width: calc((100% - 16px) / 1);
    margin: 8px;
  }
`;

export const BlockCardBody = styled.div`
  position: relative;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
  flex-grow: 1;
  width: 100%;
`;

export const BlockCardContent = styled.div`
  display: flex;
  @media (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (min-width: ${(props) =>
      `${props.theme.breakPoints.xs}`}px) {
    flex-direction: column;
  }
  @media (max-width: 359px) {
    flex-direction: column;
  }
`;

export const CategoryCardImage = styled.div`
  width: 160px;
  padding: 24px 0;
  margin: 0 32px;
  flex-shrink: 0;
  img {
    max-width: 100%;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    width: 120px;
    margin: 0 26px;
  }
  @media (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (min-width: ${(props) =>
      `${props.theme.breakPoints.xs}`}px) {
    width: 132px;
    margin: 0 26px;
    padding: 20px 0;
    align-self: center;
  }
  @media (max-width: 359px) {
    width: 132px;
    margin: 0 26px;
    padding: 24px 0;
    align-self: center;
  }
`;

export const CategoryCardInfo = styled.div`
  flex-grow: 1;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 0;
  padding-right: 28px;
  @media (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) and (min-width: ${(props) =>
      `${props.theme.breakPoints.xs}`}px) {
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 0;
    padding-bottom: 20px;
  }
  @media (max-width: 359px) {
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 0;
    padding-bottom: 24px;
  }
`;

export const CategoryCardName = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  font-size: 18px;
  line-height: 24px;
  a {
    color: inherit;
    transition: color 0.12s;
  }
  a:hover {
    color: ${(props) => `${props.theme.colors.linkcolor}`};
  }
`;

export const CategoryCardChildren = styled.ul`
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  font-size: 15px;
  li {
    position: relative;
    color: ${(props) => `${props.theme.colors.listcolor}`};
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 11px;
    padding-right: 0;

    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      background: currentColor;
      opacity: 0.7;
      top: 10px;
      left: 0;
    }
  }
  a {
    transition: color 0.12s;
    color: inherit;
  }
  a:hover {
    color: ${(props) => `${props.theme.colors.linkcolor}`};
  }
`;

export const CategoryCardActions = styled.div`
  margin-top: 8px;
`;

export const CategoryCardLink = styled(AppLink)`
  font-size: 14px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  color: ${(props) => `${props.theme.colors.linkcolor}`};
  &:hover {
    text-decoration: underline;
  }
`;
