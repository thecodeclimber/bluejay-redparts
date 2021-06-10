// react
import React, { useState, useEffect } from 'react';
// third-party
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
// application
import axios from '~/axios';
import {
  VehicleVehicleSelect,
  VehicleSelectList,
  VehicleSelectItem,
  VehicleSelectItemControl,
  VehicleSelectItemLoader,
} from '~/styled-components/components/VehicleSelect';

function VehicleSelect(props: any) {
  const router = useRouter();
  const { onVehicleChange, ...rootProps } = props;
  const categories = useSelector((state: any) => state.categories);
  const [subcategory, setSubcategory] = useState([]);
  const [diameter, setDiameter] = useState([]);
  const [lengthList, setLengthList] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<any>({
    category: '',
    type: '',
    diameter: '',
    length: '',
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.category !== '' && form.category !== '' && form.diameter !== '') {
      if (!form) {
        return;
      }

      router.push(
        `/catalog/sub_category/${form.type
          .toLowerCase()
          .replace(/ /g, '_')}/products?diameter=${form.diameter}`
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
                <option key={category._id}>{category.name}</option>
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
                  <option key={subcategory._id}>{subcategory.name}</option>
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
                  <option key={index}>{diameter}</option>
                ))}
            </VehicleSelectItemControl>
            <VehicleSelectItemLoader />
          </VehicleSelectItem>

          <VehicleSelectItem loading={loading ? 1 : 0}>
            <VehicleSelectItemControl
              aria-label="length"
              name="length"
              value={form.length}
              disabled={form?.length === '' || lengthList.length === 0}
              onChange={(e) => handleChange(e)}
            >
              {lengthList.length > 0 && <option value="">Select Length</option>}
              {lengthList.length === 0 && <option>No Length present</option>}
              {lengthList.length > 0 &&
                lengthList.map((itemLength: any) => (
                  <option key={itemLength._id}>{itemLength.value}</option>
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
