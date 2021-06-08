// react
import React, { useCallback, useRef, useState, useEffect } from 'react';
// third-party
import classNames from 'classnames';
import axios from '../../axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
// application
import {
  DepartmentsStyledComponent,
  DepartmentsButton,
  DepartmentsMenu,
  DepartmentsButtonIcon,
  DepartmentsButtonArrow,
  DepartmentsArrow,
  DepartmentsBody,
  DepartmentsButtonTitle,
  DepartmentsList,
  DepartmentsListPadding,
  DepartmentsItemLink,
  DepartmentsItemList,
  DepartmentsItemArrow,
} from '~/styled-components/header/Departments';
import AppLink from '~/components/shared/AppLink';
import Megamenu from '~/components/header/Megamenu';
import {
  ArrowRoundedDown9x6Svg,
  ArrowRoundedRight7x11Svg,
  Menu16x12Svg,
} from '~/svg';
import { createProductName } from '../../store/shop/shopHelpers';
import { IDepartmentsLink } from '~/interfaces/departments-link';
import { useGlobalMousedown } from '~/services/hooks';
// data

interface Props {
  label: React.ReactNode;
}

function Departments(props: Props) {
  const { label } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [currentItem, setCurrentItem] = useState<IDepartmentsLink | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    async function fetchCategories() {
      const res = await axios.get('/categories');
      setCategoriesData(res.data.data);
    }
    fetchCategories();
  }, []);

  const handleBodyMouseLeave = () => {
    setCurrentItem(null);
  };

  const handleListPaddingMouseEnter = () => {
    setCurrentItem(null);
  };

  const handleItemMouseEnter = (item: IDepartmentsLink) => {
    setCurrentItem(item);
  };

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
    setCurrentItem(null);
  }, [setIsOpen, setCurrentItem]);

  useGlobalMousedown(
    (event) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen, rootRef]
  );

  return (
    <DepartmentsStyledComponent ref={rootRef}>
      <DepartmentsButton type="button" onClick={handleButtonClick}>
        <DepartmentsButtonIcon>
          <Menu16x12Svg />
        </DepartmentsButtonIcon>
        <DepartmentsButtonTitle>{label}</DepartmentsButtonTitle>
        <DepartmentsButtonArrow isOpen={isOpen}>
          <ArrowRoundedDown9x6Svg />
        </DepartmentsButtonArrow>
      </DepartmentsButton>
      {isOpen && (
        <DepartmentsMenu>
          <DepartmentsArrow />
          <DepartmentsBody onMouseLeave={handleBodyMouseLeave}>
            <DepartmentsList>
              <DepartmentsListPadding
                role="presentation"
                onMouseEnter={handleListPaddingMouseEnter}
              />
              {categoriesData.length > 0 &&
                categoriesData.map((item: any, index) => {
                  return (
                    <DepartmentsItemList
                      itemHover={item === currentItem}
                      key={index}
                      onMouseEnter={() => handleItemMouseEnter(item)}
                    >
                      <DepartmentsItemLink
                        as={AppLink}
                        href={`/catalog/category/${item.name
                          .toLowerCase()
                          .replace(/ /g, '_')}/products`}
                        onClick={() => {
                          handleItemClick();
                        }}
                      >
                        {createProductName(item.name)}
                        {item.sub_categories.length > 0 && (
                          <DepartmentsItemArrow>
                            <ArrowRoundedRight7x11Svg />
                          </DepartmentsItemArrow>
                        )}
                      </DepartmentsItemLink>
                    </DepartmentsItemList>
                  );
                })}
              <DepartmentsListPadding
                role="presentation"
                onMouseEnter={handleListPaddingMouseEnter}
              />
            </DepartmentsList>

            <div>
              {categoriesData.length > 0 &&
                categoriesData.map((item: any, index) => {
                  if (!item.sub_categories) {
                    return null;
                  }

                  const itemClasses = classNames(
                    'departments__megamenu',
                    `departments__megamenu--size--sm`,
                    {
                      'departments__megamenu--open': item === currentItem,
                    }
                  );

                  return (
                    <Megamenu
                      className={itemClasses}
                      menu={item.sub_categories}
                      key={index}
                      onItemClick={handleItemClick}
                    />
                  );
                })}
            </div>
          </DepartmentsBody>
        </DepartmentsMenu>
      )}
    </DepartmentsStyledComponent>
  );
}

export default React.memo(Departments);
