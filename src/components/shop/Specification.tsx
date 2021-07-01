// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import axios from '~/axios';
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
  product: any;
}

function Specification(props: Props) {
  const { groups, product } = props;
  const [diameter, setDiameter] = useState<any>();

  useEffect(() => {
    product.attributes.map((attribute: any) => {
      if (attribute.attribute === '609cf0d560a41d956a81ecd0') {
        fetchAttribute(attribute.value);
      }
    });
  }, [product]);

  const fetchAttribute = async (id: any) => {
    const result = await axios.get(`/attributes/diameter/${id}`);
    setDiameter(result.data);
  };

  return (
    <Spec>
      {diameter &&
        groups.map((group, groupIndex) => (
          <SpecSection key={groupIndex}>
            <SpecSectionTitle>{group.name}</SpecSectionTitle>
            <SpecRow>
              <SpecName>diameter</SpecName>
              <SpecValue>{diameter}</SpecValue>
            </SpecRow>
          </SpecSection>
        ))}
      <SpecDisclaimer>
        <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
      </SpecDisclaimer>
    </Spec>
  );
}

export default Specification;
