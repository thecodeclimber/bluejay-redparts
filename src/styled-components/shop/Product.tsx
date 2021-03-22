import styled from 'styled-components';
import CompatibilityStatusBadge from '~/components/shared/CompatibilityStatusBadge';
import { TagBadge } from '~/styled-components/components/TagBadge';

export const ProductRating = styled.div`
  display: flex;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  font-size: 14px;
  line-height: 1;
`;

export const ProductRatingStars = styled.div`
  margin-left: 8px;
`;

export const ProductRatingLabel = styled.div`
  a {
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const ProductFit = styled(CompatibilityStatusBadge)`
  margin-left: 12px;
`;

export const TagBadgeSale = styled(TagBadge)`
  top: -7px;
  position: absolute;
  left: 22px;
`;