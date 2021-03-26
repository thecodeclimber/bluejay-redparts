import styled from 'styled-components';
import Checkbox from '~/components/shared/Checkbox';

export const FormCheck = styled.div`
  direction: ltr;
  position: relative;
  display: block;
  padding-left: 1.5rem;
`;

export const FormCheckInput = styled(Checkbox)`
  direction: ltr;
  margin-left: -1.5rem;
  position: absolute;
  margin-top: 0.1875rem;
`;
