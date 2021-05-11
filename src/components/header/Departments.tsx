// react
import React, { useCallback, useRef, useState } from 'react';
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
  DepartmentsMegamenu,
} from '~/styled-components/header/Departments';
import Megamenu from '~/components/header/Megamenu';
import {
  ArrowRoundedDown9x6Svg,
  ArrowRoundedRight7x11Svg,
  Menu16x12Svg,
} from '~/svg';
import { IDepartmentsLink } from '~/interfaces/departments-link';
import { useGlobalMousedown } from '~/services/hooks';
// data
import dataHeaderDepartments from '~/data/headerDepartments';

interface Props {
  label: React.ReactNode;
}

function Departments(props: Props) {
  const { label } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<IDepartmentsLink | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen((state) => !state);
  };

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
              {dataHeaderDepartments.map((item, index) => {
                const itemHasSubmenu = !!item.submenu;
                return (
                  <DepartmentsItemList
                    itemHover={item === currentItem}
                    key={index}
                    onMouseEnter={() => handleItemMouseEnter(item)}
                  >
                    <DepartmentsItemLink
                      href={item.url}
                      onClick={() => handleItemClick()}
                      {...item.customFields?.anchorProps}
                    >
                      {item.title}
                      {itemHasSubmenu && (
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
              {dataHeaderDepartments.map((item, index) => {
                if (!item.submenu) {
                  return null;
                }

                return (
                  <DepartmentsMegamenu
                    as={Megamenu}
                    itemSize={item.submenu.size}
                    currentItem={item === currentItem}
                    menu={item.submenu}
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
