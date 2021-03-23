// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import { IProductAttributeGroup } from '~/interfaces/product';
import {
  Spec,
  SpecSection,
  SpecSectionTitle,
  SpecRow,
  SpecName,
  SpecValue,
  SpecDisclaimer,
} from '~/styled-components/shop/Specification';
interface Props {
  groups: IProductAttributeGroup[];
}

function Specification(props: Props) {
  const { groups } = props;

  return (
    <Spec>
      {groups.map((group, groupIndex) => (
        <SpecSection key={groupIndex}>
          <SpecSectionTitle>{group.name}</SpecSectionTitle>
          {group.attributes.map((attribute, attributeIndex) => (
            <SpecRow key={attributeIndex}>
              <SpecName>{attribute.name}</SpecName>
              <SpecValue>
                {attribute.values.map((x) => x.name).join(', ')}
              </SpecValue>
            </SpecRow>
          ))}
        </SpecSection>
      ))}
      <SpecDisclaimer>
        <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
      </SpecDisclaimer>
    </Spec>
  );
}

export default Specification;
