// react
import React, { useMemo } from 'react';
// third-party

import classNames from 'classnames';
import { UncontrolledTooltip } from 'reactstrap';
import { useFormContext } from 'react-hook-form';
// application
import { colorType } from '~/services/color';
import { IProductOption } from '~/interfaces/product';
import {
  ProductProductForm,
  ProductFormBody,
  ProductFormRow,
  ProductFormTitle,
  ProductFormControl,
  InputRadioLabel,
  InputRadioLabelList,
  InputRadioLabelItem,
  InputRadioLabelInput,
  InputRadioLabelTitle,
  InputRadioColor,
  InputRadioColorList,
  Input,
  Span,
} from '~/styled-components/shop/ProductForm';
interface Props extends React.HTMLAttributes<HTMLElement> {
  options: IProductOption[];
  namespace?: string;
  material: any;
}

function ProductForm(props: Props) {
  const { options, material, namespace, className, ...rootProps } = props;
  const { register } = useFormContext();
  const ns = useMemo(() => (namespace ? `${namespace}.` : ''), [namespace]);
  const optionsTemplate =
    material.length > 0
      ? options.map((option, optionIdx) => (
          <ProductFormRow key={optionIdx}>
            <ProductFormTitle>{option.name}</ProductFormTitle>
            <ProductFormControl>
              {option.type === 'default' && (
                <InputRadioLabel>
                  <InputRadioLabelList>
                    {material.map((value: any, index: any) => (
                      <InputRadioLabelItem key={index}>
                        <InputRadioLabelInput
                          type="radio"
                          name={`${ns}${value}`}
                          value={value}
                          ref={register({ required: true })}
                        />

                        <InputRadioLabelTitle>{value}</InputRadioLabelTitle>
                      </InputRadioLabelItem>
                    ))}
                  </InputRadioLabelList>
                </InputRadioLabel>
              )}
              {option.type === 'color' && (
                <InputRadioColor>
                  <InputRadioColorList>
                    {option.values.map((value, valueIdx) => (
                      <React.Fragment key={valueIdx}>
                        <label
                          className={classNames('input-radio-color__item', {
                            'input-radio-color__item--white':
                              colorType(value.color) === 'white',
                          })}
                          id={`product-option-${optionIdx}-${valueIdx}`}
                          style={{ color: value.color }}
                          title={value.name}
                        >
                          <Input
                            type="radio"
                            name={`${ns}${option.slug}`}
                            value={value.slug}
                            ref={register({ required: true })}
                          />
                          <Span />
                        </label>

                        <UncontrolledTooltip
                          target={`product-option-${optionIdx}-${valueIdx}`}
                          fade={false}
                          delay={{ show: 0, hide: 0 }}
                        >
                          {value.name}
                        </UncontrolledTooltip>
                      </React.Fragment>
                    ))}
                  </InputRadioColorList>
                </InputRadioColor>
              )}
            </ProductFormControl>
          </ProductFormRow>
        ))
      : null;

  return (
    <ProductProductForm>
      <ProductFormBody>{optionsTemplate}</ProductFormBody>
    </ProductProductForm>
  );
}

export default ProductForm;
