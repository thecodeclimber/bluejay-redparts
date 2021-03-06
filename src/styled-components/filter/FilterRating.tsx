import styled from 'styled-components';
import Checkbox from '~/components/shared/Checkbox';

export const FilterRatingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: -8px 0;
`;

export const FilteRatingItemLabel = styled.label`
  padding: 2px 0;
  cursor: pointer;
  display: flex;
  margin: 8px 0;
`;

export const FilterRatingCheckbox = styled(Checkbox)`
  direction: ltr;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const FilterRatingItemStars = styled.span`
  padding: 2px 0;
  flex-grow: 1;
`;

export const FilterRatingItemCounter = styled.span`
  direction: ltr;
  margin-left: 12px;
  padding-top: 2px;
  font-size: 12px;
  line-height: 12px;
  color: #6c757d;
`;
