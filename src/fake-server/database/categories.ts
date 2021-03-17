// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import {
  IBaseCategory,
  IBlogCategory,
  ICategory,
  IShopCategory,
} from '~/interfaces/category';

const getNextId = makeIdGenerator();

function makeShopCategory(
  def: ICategoryDef,
  parent: IShopCategory | null
): IShopCategory {
  return {
    id: getNextId(),
    type: 'shop',
    name: def.name,
    slug: def.slug,
    image: def.image || null,
    items: def.items,
    parent,
    children: [],
    layout: def.layout ? def.layout : 'products',
    customFields: {},
  };
}

function makeBlogCategory(
  def: ICategoryDef,
  parent: IBlogCategory | null
): IBlogCategory {
  return {
    id: getNextId(),
    type: 'blog',
    name: def.name,
    slug: def.slug,
    image: def.image || null,
    items: def.items,
    parent,
    children: [],
    customFields: {},
  };
}

function makeCategories<T extends IBaseCategory>(
  makeFn: (def: ICategoryDef, parent: T | null) => T,
  defs: ICategoryDef[],
  parent: T | null = null
): T[] {
  const categories: T[] = [];

  defs.forEach((def) => {
    const category: T = makeFn(def, parent);

    if (def.children) {
      category.children = makeCategories(makeFn, def.children, category);
    }

    categories.push(category);
  });

  return categories;
}

function flatTree<T extends ICategory>(categories: T[]): T[] {
  let result: T[] = [];

  categories.forEach((category) => {
    result = [...result, category, ...flatTree(category.children as T[])];
  });

  return result;
}

const shopCategoriesDef: ICategoryDef[] = [
  {
    name: 'Anchor',
    slug: 'anchor',
    image: '/images/categories/category-1.jpg',
    items: 131,
    children: [
      { name: 'Conical', slug: 'conical' },
      { name: 'E-Z', slug: 'e-z' },
      { name: 'Hammer Drive', slug: 'hammer-drive' },
      { name: 'Hollow Wall', slug: 'hollow-wall' },
      { name: 'Kit', slug: 'kit' },
      { name: 'Nail', slug: 'nail' },
      { name: 'Drop-In', slug: 'drop-in' },
      { name: 'Machine Screw', slug: 'machine-screw' },
      { name: 'Setting Tools', slug: 'setting-tools' },
      { name: 'Shield', slug: 'Shield' },
      { name: 'Sleeve', slug: 'Sleeve' },
      { name: 'Wedge', slug: 'Wedge' },
    ],
  },
  {
    name: 'Bolts',
    slug: 'bolts',
    image: '/images/categories/category-2.jpg',
    items: 356,
    children: [
      { name: 'Carriage', slug: 'Carriage' },
      { name: 'Elevator', slug: 'elevator' },
      { name: 'Flange', slug: 'flange' },
      { name: 'Control Motor', slug: 'control-motor' },
      { name: 'Flange Locknut', slug: 'flange-locknut' },
      { name: 'Hanger', slug: 'hanger' },
      { name: 'Hex Head', slug: 'hex-head' },
      { name: 'Lag', slug: 'lag' },
      { name: 'Stove', slug: 'stove' },
      { name: 'Threaded Rod', slug: 'threaded-rod' },
      { name: 'Toggle', slug: 'Toggle' },
    ],
  },
  {
    name: 'Hex Head Cap Screws',
    slug: 'hex-head-cap-screws',
    image: '/images/categories/category-3.jpg',
    items: 54,
    children: [{ name: 'Hex Cap Screws', slug: 'hex-cap-screws' }],
  },
  {
    name: 'Nuts',
    slug: 'nuts',
    image: '/images/categories/category-4.jpg',
    items: 274,
    children: [
      { name: 'Cap', slug: 'cap' },
      { name: 'Coupling', slug: 'coupling' },
      { name: 'Hex', slug: 'hex' },
      { name: 'Locknuts', slug: 'locknuts' },
      { name: 'Machine Screw', slug: 'machine-screw' },
      { name: 'T-Nuts', slug: 't-nuts' },
      { name: 'Wing', slug: 'wing' },
    ],
  },
  {
    name: 'Pins',
    slug: 'pins',
    image: '/images/categories/category-3.jpg',
    items: 54,
    children: [{ name: 'Cotter Pins', slug: 'cotter-pins' }],
  },
  {
    name: 'Screws',
    slug: 'screws',
    image: '/images/categories/category-5.jpg',
    items: 508,
    children: [
      { name: 'Concrete', slug: 'concrete' },
      { name: 'Deck Screws', slug: 'deck-screws' },
      { name: 'Drywall ', slug: 'drywall' },
      { name: 'Framing', slug: 'framing' },
      { name: 'K Lath', slug: 'k-lath' },
      { name: 'Machine', slug: 'machine' },
      { name: 'Self Drilling', slug: 'self-drilling' },
      { name: 'Self Piercing', slug: 'self-piercing' },
      { name: 'Sheet Metal', slug: 'sheet-metal' },
      { name: 'Thread Cutting', slug: 'thread-cutting' },
      { name: 'Wall Plate', slug: 'wall-plate' },
      { name: 'Wood', slug: 'wood' },
    ],
  },
  {
    name: 'Washer',
    slug: 'washer',
    image: '/images/categories/category-6.jpg',
    items: 95,
    children: [
      { name: 'Fender', slug: 'fender' },
      { name: 'Finishing', slug: 'finishing' },
      { name: 'Flat', slug: 'flat' },
      { name: 'Lock Washer', slug: 'lock-washer' },
      { name: 'Machine Screw', slug: 'machine-screw' },
    ],
  },
  {
    name: 'Oils & Lubricants',
    slug: 'oils-lubricants',
    image: '/images/categories/category-7.jpg',
    items: 179,
  },
  {
    name: 'Tools & Garage',
    slug: 'tools-garage',
    image: '/images/categories/category-8.jpg',
    items: 106,
  },
];

const blogCategoriesDef: ICategoryDef[] = [
  {
    name: 'Latest News',
    slug: 'latest-news',
  },
  {
    name: 'Special Offers',
    slug: 'special-offers',
    children: [
      {
        name: 'Spring Sales',
        slug: 'spring-sales',
      },
      {
        name: 'Summer Sales',
        slug: 'summer-sales',
      },
      {
        name: 'Autumn Sales',
        slug: 'autumn-sales',
      },
      {
        name: 'Christmas Sales',
        slug: 'christmas-sales',
      },
      {
        name: 'Other Sales',
        slug: 'other-sales',
      },
    ],
  },
  {
    name: 'New Arrivals',
    slug: 'new-arrivals',
  },
  {
    name: 'Reviews',
    slug: 'reviews',
  },
  {
    name: 'Wheels & Tires',
    slug: 'wheels-tires',
  },
  {
    name: 'Engine & Drivetrain',
    slug: 'engine-drivetrain',
  },
  {
    name: 'Transmission',
    slug: 'transmission',
  },
  {
    name: 'Performance',
    slug: 'performance',
  },
];

export const shopCategoriesTree: IShopCategory[] = makeCategories(
  makeShopCategory,
  shopCategoriesDef
);

export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: IBlogCategory[] = makeCategories(
  makeBlogCategory,
  blogCategoriesDef
);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
