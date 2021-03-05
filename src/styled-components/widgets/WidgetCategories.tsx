import styled from 'styled-components';

export const WidgetWidgetCategories = styled.div`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
`;

export const WidgetHeader = styled.div`
  padding: 1.375rem 1.5rem;
  > h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

 const WidgetCategoriesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const WidgetCategoriesListRoot = styled(WidgetCategoriesList)`
  padding: 0 1.5rem 1.5rem;
  font-size: 15px;
  line-height: 20px;
`;
