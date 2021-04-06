import styled, { css } from 'styled-components';

export const ImageTag = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const ImageBody = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ImageTypeProduct = styled.div`
  ${ImageBody} {
    padding-bottom: 100% * (1 / 1);
  }
`;
