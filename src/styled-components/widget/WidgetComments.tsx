import styled from 'styled-components';

export const WidgetWidgetComments = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const WidgetCommentsBody = styled.div`
  padding: 0 1.5rem 1.5rem;
  a {
    color: inherit;
    transition: color 0.15s;
  }
  a:hover {
    color: ${(props) => `${props.theme.colors.widgetanchorhovercolor}`};
  }
`;

export const WidgetCommentsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 2px;
`;

export const WidgetCommentsItem = styled.li`
  margin-bottom: 20px;
`;

export const WidgetAutherComments = styled.div`
  font-size: 15px;
  line-height: 18px;

  a {
    border-bottom: 2px solid
      ${(props) => `${props.theme.colors.widgetauthorbordercolor}`};
    transition: border 0.15s;
  }

  a:hover {
    border-color: ${(props) => `${props.theme.colors.widgetanchorhovercolor}`};
  }
`;

export const WidgetCommentsContent = styled.div`
  margin-top: 12px;
  font-size: 15px;
  line-height: 20px;
`;

export const WidgetCommentsMeta = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  display: flex;
  white-space: nowrap;
`;

export const WidgetCommentsDate = styled.div`
  flex-shrink: 0;
`;

export const WidgetCommentsName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 20px;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 2px;
    top: 8px;
    opacity: 0.8;
    left: 8px;
  }
`;
