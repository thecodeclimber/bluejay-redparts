import styled, { css } from 'styled-components';

export const DecorBody = styled.div`
  height: 38px;
  margin: 0 -10px -10px;
  overflow: hidden;
  position: relative;
`;

export const DecorStart = styled.div`
  border-bottom-left-radius: 2px;
  left: 10px;
  transform: skewX(30deg);
  height: 28px;
  width: calc(50% - 26.1658px);
  background: ${(props) => `${props.theme.colors.blockPostsLoaderBg}`};
`;

export const DecorEnd = styled.div`
  border-bottom-right-radius: 2px;
  right: 10px;
  transform: skewX(-30deg);
  height: 28px;
  width: calc(50% - 26.1658px);
  box-shadow: none;
  background: ${(props) => `${props.theme.colors.blockPostsLoaderBg}`};
`;

export const DecorCenter = styled.div`
  height: 28px;
  width: 34.3316px;
  ${(props: { slider?: boolean }) =>
    props.slider &&
    css`
      background: ${(props) => `${props.theme.colors.blockPostsLoaderBg}`};
    `};
`;

const DecorTypeBottom = css`
  width: 100%;
  position: relative;
  pointer-events: none;
  overflow: hidden;
  ${DecorStart}, ${DecorEnd} {
    position: absolute;
    width: calc((100% - 1350px - 160px) / 2);
    bottom: 0;
  }
  ${DecorStart} {
    left: 0;
    transform-origin: right bottom;
  }
  ${DecorEnd} {
    right: 0;
    transform-origin: left bottom;
  }
`;

const DecorTypeCenter = css`
  ${DecorBody} {
    overflow: hidden;
    position: relative;
  }
  ${DecorStart}, ${DecorEnd} {
    position: absolute;
  }
  ${DecorStart} {
    transform-origin: right top;
  }
  ${DecorEnd} {
    transform-origin: left top;
  }
  ${DecorCenter} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DecorType = (props: any) => {
  if (props.type === 'bottom') {
    return DecorTypeBottom;
  }
  return DecorTypeCenter;
};

export const DecorStyledComponent = styled.div`
  display: block;
  ${(props: { type?: string }) =>
    props.type &&
    css`
      ${DecorType}
    `};
`;
