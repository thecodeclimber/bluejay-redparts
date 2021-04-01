import styled, { css } from 'styled-components';

export const StatusBadgeBody = styled.div`
  position: relative;
  min-height: 23px;
  border-radius: 11.5px;
  min-width: 31px;
`;

export const StatusBadgeTooltip = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:focus {
    outline: none;
  }
`;

export const StatusBadgeText = styled.div`
  direction: ltr;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 13px;
  line-height: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const TypeSuccess = css`
  ${StatusBadgeBody} {
    background-color: #e2f2da;
    color: #44782a;
  }
`;

const StatusBadgeHasText = css`
  ${StatusBadgeTooltip} {
    display: none;
  }
`;

const StatusBadgeHasIcon = css`
  ${StatusBadgeText} {
    direction: ltr;
    padding-inline-start: 28px;
  }
`;

const selectProps = (props: any) => {
  if (props.type === 'success') return TypeSuccess;
  if (props.hasText) return StatusBadgeHasText;
  if (props.hasIcon) return StatusBadgeHasIcon;
  return;
};

export const StatusBadgeStyledComponent = styled.div`
  ${(props: { type?: string; hasText?: boolean; hasIcon?: boolean }) =>
    css`
      ${selectProps}
    `};
`;

export const StatusBadgeIcon = styled.div`
  fill: currentColor;
  position: absolute;
  top: calc(50% - 13 / 2);
  opacity: 0.85;
  direction: ltr;
  svg {
    display: block;
  }
`;
