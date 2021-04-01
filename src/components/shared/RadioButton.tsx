// react
import React from 'react';
// third-party
import classNames from 'classnames';
//application
import {
  InputRadio,
  InputRadioBody,
  InputRadioCircle,
  InputRadioInput,
} from '~/styled-components/components/InputRadio';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<any>;
}

function RadioButton(props: Props) {
  const { className, inputRef, ...inputProps } = props;

  return (
    <InputRadio className={classNames(className)}>
      <InputRadioBody>
        <InputRadioInput type="radio" ref={inputRef} {...inputProps} />
        <InputRadioCircle />
      </InputRadioBody>
    </InputRadio>
  );
}

export default RadioButton;
