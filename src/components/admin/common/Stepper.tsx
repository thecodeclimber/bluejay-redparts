import { Badge, Divider } from '@chakra-ui/react';
import React from 'react';
const Stepper = (props: any) => {
  const { direction, currentStepNumber, steps, stepColor } = props;

  const stepsState = steps.map((step: any, index: any) => {
    const stepObj: any = {};
    stepObj.description = step;
    stepObj.highlighted = index === 1 ? true : false;
    stepObj.selected = index === 1 ? true : false;
    stepObj.completed = false;
    return stepObj;
  });
  const stepsJSX = stepsState.map((sp: any, index: any) => {
    return (
      <div className="step-wrapper" key={index}>
        <Badge
          className={`step-number ${
            sp.selected ? 'step-number-selected' : 'step-number-disabled'
          }`}
          variant="solid"
          colorScheme={currentStepNumber >= index ? stepColor : 'blackAlpha'}
        >
          {sp.completed ? <span>&#10003;</span> : index + 1}
        </Badge>
        <div className={`step-description`}>{sp.description}</div>
        {index !== steps.length - 1 && (
          <Divider
            className={`divider-line divider-line-${steps.length}`}
            style={{
              background: `${
                currentStepNumber > index ? stepColor : '#bdbdbd'
              }`,
            }}
          />
        )}
      </div>
    );
  });

  return <div className={`stepper-wrapper-${direction}`}>{stepsJSX}</div>;
};

export default Stepper;
