// react
import React from 'react';
// third-party
import {
  InputCheck,
  InputCheckBody,
  InputCheckInput,
  InputCheckBox,
  InputCheckIcon,
} from '~/styled-components/components/InputCheck';
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<any>;
}

function Checkbox(props: Props) {
  const { className, inputRef, ...inputProps } = props;

  return (
    <InputCheck className={classNames(className)}>
      <InputCheckBody>
        <InputCheckInput type="checkbox" ref={inputRef} {...inputProps} />
        <InputCheckBox />
        <InputCheckIcon>
          <svg width="9px" height="7px">
            <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
          </svg>
        </InputCheckIcon>
      </InputCheckBody>
    </InputCheck>
  );
}

export default Checkbox;
