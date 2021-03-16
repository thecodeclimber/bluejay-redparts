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
    ProductProductForm ,
    ProductFormBody ,
    ProductFormRow ,
    ProductFormTitle ,
    ProductFormControl ,
    InputRadioLabel ,
    InputRadioLabelList ,
    InputRadioLabelItem ,
    InputRadioLabelInput ,
    InputRadioLabelTitle ,
    InputRadioColor ,
    InputRadioColorList ,
    Input ,
    Span ,
} from '~/styled-components/shop/ProductForm';
interface Props extends React.HTMLAttributes<HTMLElement> {
    options: IProductOption[];
    namespace?: string;
}

function ProductForm(props: Props) {
    const {
        options,
        namespace,
        className,
        ...rootProps
    } = props;
    const { register } = useFormContext();
    const ns = useMemo(() => (namespace ? `${namespace}.` : ''), [namespace]);

    const optionsTemplate = options.map((option, optionIdx) => (
        <ProductFormRow key={optionIdx} >
            <ProductFormTitle >{option.name}</ProductFormTitle>
            <ProductFormControl>
                {option.type === 'default' && (
                    <InputRadioLabel >
                        <InputRadioLabelList >
                            {option.values.map((value, valueIdx) => (
                                <InputRadioLabelItem key={valueIdx} >
                                    <InputRadioLabelInput
                                        type="radio"
                                        name={`${ns}${option.slug}`}
                                        value={value.slug}
                                        ref={register({ required: true })}
                                    />

                                    <InputRadioLabelTitle >{value.name}</InputRadioLabelTitle>
                                </InputRadioLabelItem>
                            ))}
                        </InputRadioLabelList>
                    </InputRadioLabel>
                )}
                {option.type === 'color' && (
                    <InputRadioColor >
                        <InputRadioColorList >
                            {option.values.map((value, valueIdx) => (
                                <React.Fragment key={valueIdx}>
                                    <label
                                        className={classNames('input-radio-color__item', {
                                            'input-radio-color__item--white': colorType(value.color) === 'white',
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
    ));

    const rootClasses = classNames('product-form', className);

    return (
        <ProductProductForm >
            <ProductFormBody >
                {optionsTemplate}
            </ProductFormBody>
        </ProductProductForm>
    );
}

export default ProductForm;
