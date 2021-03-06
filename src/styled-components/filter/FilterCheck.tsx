import styled, { css } from 'styled-components';
import Checkbox from '~/components/shared/Checkbox';

export const FilterList = styled.div``;

export const FIlterListList = styled.div`
  margin: -8px 0;
`;

export const FilterListItem = styled.label`
  padding: 1px 0;
  cursor: pointer;
  display: flex;
  margin: 8px 0;
  ${(props : { item?: boolean }) => 
     props.item &&
     css`
      cursor: default;
     `
  }
`;

export const FilterListInput = styled(Checkbox)`
  flex-shrink: 0;
  margin-right: 7px;
`;

export const FilterListTitle = styled.span`
  padding: 1px 0;
  font-size: 14px;
  line-height: 16px;
  flex-grow: 1;
  ${(props : { item?: boolean }) => 
     props.item &&
     css`
      color: #6c757d;
     `
  }
`;

export const FilterListCounter = styled.span`
   padding-top: 3px;
    font-size: 12px;
    line-height: 12px;
    margin-left: 12px;
    color: #6c757d;
`;
