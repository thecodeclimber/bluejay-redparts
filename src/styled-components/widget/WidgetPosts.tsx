import styled from 'styled-components';

export const WidgetWidgetPosts = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
`;

export const WidgetHeader = styled.div`
  padding: 1.375rem 1.5rem;
  h4 {
    font-size: ${(props) => `${props.theme.headers.h5.fontSize}`};
    font-weight: ${(props) => `${props.theme.headers.h5.fontWeight}`};
    margin-bottom: 0;
  }
`;

export const WidgetPostsList = styled.ul`
  list-style: none;
  padding: 0 1.5rem 1.5rem;
  margin: 0;
`;

export const WidgetPostsItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
`;

export const WidgetPostsImage = styled.div`
  flex-shrink: 0;
  position: relative;
  margin-right: 14px;
  img {
    width: 70px;
    height: 70px;
    display: block;
    border-radius: 1.5px;
    object-fit: cover;
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    bottom: 0;
    background: rgba(26, 26, 26, 0.2);
    border-radius: 1.5px;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    left: 0;
    right: 0;
  }
  &:hover:before {
    opacity: 1;
  }
`;

export const WidgetPostsInfo = styled.div`
  padding-top: 5px;
`;

export const WidgetPostsName = styled.div`
  font-size: 15px;
  line-height: 19px;
  overflow: hidden;
  max-height: 38px;
  a {
    color: inherit;
    transition: color 0.12s;
  }
  a:hover {
    color: #007bff;
  }
`;

export const WidgetPostsDate = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-top: 3px;
  position: relative;
  padding-left: 22px;
  &:before {
    position: absolute;
    display: block;
    content: '';
    height: 1px;
    width: 16px;
    background: currentColor;
    opacity: 0.6;
    top: 10px;
    left: 0;
  }
`;
