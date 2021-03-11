import styled from 'styled-components';

export const WidgetNewsLetter = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  background: ${(props) => `${props.theme.colors.widgetnewsletterbgcolor}`};
  border-radius: 2px;
  padding: 2.25rem 2.5rem 2.5rem;
  color: ${(props) => `${props.theme.colors.white}`};
  text-align: center;
`;

export const WidgetNewsLetterTitle = styled.div`
  font-size: 24px;
  letter-spacing: 0.02em;
  position: relative;
  margin-bottom: 1.375rem;
  padding-bottom: 1.25rem;
  &:after {
    position: absolute;
    display: block;
    content: '';
    height: 1px;
    width: 56px;
    background: ${(props) => `${props.theme.colors.selectarrowcolor}`};
    bottom: 0;
    left: calc(50% - 28px);
  }
  h4 {
    margin-bottom: 0;
    font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  }
`;

export const WidgetNewsLetterForm = styled.div``;

export const WidgetNewsLetterText = styled.div`
  font-size: 15px;
  color: ${(props) => `${props.theme.colors.widgetnewslettertextcolor}`};
  line-height: 24px;
  margin-bottom: 1.625rem;
`;

export const WidgetNewsLetterEmail = styled.input`
  display: block;
  width: 100%;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  height: 38px;
  padding: 0 12px;
  font-size: 15px;
  font-family: inherit;
  background-clip: padding-box;
  transition: border 0.2s, background 0.2s;
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: ${(props) => `${props.theme.colors.lightGrey}`};
  border-color: ${(props) => `${props.theme.colors.lightGrey}`};
  &::placeholder {
    transition: color 0.2s;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.16);
  }
  &:focus {
    outline: none;
    background-color: transparent;
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

export const WidgetNewsLetterButton = styled.button`
  border: none;
  font-size: 15px;
  border-radius: 2px;
  padding: 0.5rem 1.3125rem;
  margin-top: 1.25rem;
  width: 100%;
  transition: background 0.2s, color 0.2s;
  background-color: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.white}`};
  &:active {
    transition-duration: 0.1s, 0.1s;
    background-color: ${(props) => `${props.theme.colors.lightGrey}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
  &:hover {
    background-color: ${(props) => `${props.theme.colors.grey}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
  &:focus {
    outline: none;
  }
`;
