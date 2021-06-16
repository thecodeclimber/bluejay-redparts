// react
import React, { useEffect, useState } from 'react';
import {
  VehicleSelectItem,
  VehicleSelectItemControl,
  VehicleSelectItemLoader,
  VehicleSelectList,
  VehicleVehicleSelect,
} from '~/styled-components/components/VehicleSelect';

import { AxiosRequestConfig } from 'axios';
import { FormattedMessage } from 'react-intl';
// application
import axios from '~/axios';
// third-party
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function VehicleSelect(props: any) {
  const router = useRouter();
  const { onVehicleChange, ...rootProps } = props;
  const categories = useSelector((state: any) => state.categories);
  const [subcategory, setSubcategory] = useState([]);
  const [diameter, setDiameter] = useState([]);
  const [lengthList, setLengthList] = useState({ values: [] });
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<any>({
    category: '',
    type: '',
    diameter: '',
    length: '',
  });
  const capitalize = (string: string): string =>
    string[0].toUpperCase() + string.slice(1);

  const handleChange = (e: any) => {
    setForm((prevState: object) => {
      switch (e.target.name) {
        case 'category':
          return {
            category: e.target.value,
            type: '',
            diameter: '',
            length: '',
          };
        case 'type':
          return {
            ...prevState,
            type: e.target.value,
            diameter: '',
            length: '',
          };
        case 'diameter':
          return { ...prevState, diameter: e.target.value };
        case 'length':
          return { ...prevState, length: e.target.value };
        default:
          return prevState;
      }
    });
  };

  useEffect(() => {
    if (form.category != '') {
      if (categories.categories.length) {
        categories.categories.forEach((category: any) => {
          if (category.name === form.category) {
            setSubcategory(category.sub_categories);
          }
        });
      }
    }
    if (form.type != '') {
      categories.categories.forEach((category: any) => {
        if (category.name === form.category) {
          if (category?.sub_categories?.length) {
            category?.sub_categories.forEach((subcat: any) => {
              if (subcat?.name === form.type) {
                if (subcat?.attributes?.length) {
                  subcat.attributes.forEach((att: any) => {
                    if (att?.attribute === '609cf0d560a41d956a81ecd0') {
                      fetchDiameter(att);
                    }
                    if (att?.attribute === '60a4aec4faa6352009c5c180') {
                      fetchLength(att);
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  }, [form]);

  const fetchDiameter = async (att: any) => {
    const diameters = await axios.get(`/attributes/diameter/${att.values}`);
    diameters.data.length ? setDiameter(diameters.data) : setDiameter([]);
  };
  const fetchLength = async (att: any) => {
    const { data } = await axios.post(`/attributes/length/${att.attribute}`, {
      values: att.values,
    });
    setLengthList(data);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.category !== '' && form.category !== '' && form.diameter !== '') {
      if (!form) {
        return;
      }

      router.push(
        `/catalog/sub_category/${form.type
          .toLowerCase()
          .replace(/ /g, '_')}/products?diameter=${form.diameter}${
          form.length ? '&length=' + form.length : ''
        }`
      );
    }
  };

  return (
    <form className="block-finder__form" onSubmit={onSubmit}>
      <VehicleVehicleSelect className="block-finder__select" {...rootProps}>
        <VehicleSelectList>
          <VehicleSelectItem loading={loading ? 1 : 0}>
            <VehicleSelectItemControl
              aria-label="Category"
              name="category"
              value={form.category}
              disabled={disabled}
              onChange={(e) => handleChange(e)}
            >
              <option value="none">Select Category</option>
              {categories.categories.map((category: any) => (
                <option key={category._id} value={category.name}>
                  {capitalize(category.name)}
                </option>
              ))}
            </VehicleSelectItemControl>
            <VehicleSelectItemLoader />
          </VehicleSelectItem>

          <VehicleSelectItem loading={loading ? 1 : 0}>
            <VehicleSelectItemControl
              aria-label="Type"
              name="type"
              value={form.type}
              disabled={form?.category === '' || subcategory?.length === 0}
              onChange={(e) => handleChange(e)}
            >
              {subcategory.length > 0 && (
                <option value="none">Select Type</option>
              )}
              {subcategory.length === 0 && <option>No Type present</option>}
              {subcategory.length > 0 &&
                subcategory.map((subcategory: any) => (
                  <option key={subcategory._id} value={subcategory.name}>
                    {capitalize(subcategory.name)}
                  </option>
                ))}
            </VehicleSelectItemControl>
            <VehicleSelectItemLoader />
          </VehicleSelectItem>

          <VehicleSelectItem loading={loading ? 1 : 0}>
            <VehicleSelectItemControl
              aria-label="diameter"
              name="diameter"
              value={form.diameter}
              disabled={
                form?.type === '' ||
                diameter.length === 0 ||
                subcategory.length === 0
              }
              onChange={(e) => handleChange(e)}
            >
              {diameter.length > 0 && (
                <option value="none">Select Diameter</option>
              )}
              {diameter.length === 0 && <option>No Diameter present</option>}
              {diameter.length > 0 &&
                diameter.map((diameter: any, index: any) => (
                  <option key={index} value={diameter}>
                    {capitalize(diameter)}
                  </option>
                ))}
            </VehicleSelectItemControl>
            <VehicleSelectItemLoader />
          </VehicleSelectItem>

          <VehicleSelectItem loading={loading ? 1 : 0}>
            <VehicleSelectItemControl
              aria-label="length"
              name="length"
              value={form.length}
              disabled={form.type === '' || lengthList?.values?.length === 0}
              onChange={(e) => handleChange(e)}
            >
              {lengthList?.values?.length > 0 && (
                <option value="">Select Length</option>
              )}
              {lengthList?.values?.length === 0 && (
                <option>No Length present</option>
              )}
              {lengthList?.values?.length > 0 &&
                lengthList?.values?.map((itemLength: any) => (
                  <option key={itemLength._id} value={itemLength.value}>
                    {capitalize(itemLength.value)}
                  </option>
                ))}
            </VehicleSelectItemControl>
            <VehicleSelectItemLoader />
          </VehicleSelectItem>
        </VehicleSelectList>
      </VehicleVehicleSelect>
      <button
        className="block-finder__button"
        type="submit"
        disabled={
          form.category === '' ||
          form.type === '' ||
          form.diameter === '' ||
          form.category === 'none' ||
          form.type === 'none' ||
          form.diameter === 'none'
        }
      >
        <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
      </button>
    </form>
  );
}
export default VehicleSelect;
