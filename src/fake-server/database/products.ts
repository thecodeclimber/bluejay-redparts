/* eslint-disable import/prefer-default-export */

// application
import { brands } from '~/fake-server/database/brands';
import { IBrand } from '~/interfaces/brand';
import { IProduct, IProductAttribute } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { makeIdGenerator, nameToSlug } from '~/fake-server/utils';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { IProductAttributesDef, IProductDef } from '~/fake-server/interfaces/product-def';
import { shopCategoriesList } from '~/fake-server/database/categories';

const getNextId = makeIdGenerator();

function resolveProductAttributesDef(attributesDef: IProductAttributesDef): IProductAttribute[] {
    const attributes: IProductAttribute[] = [];
    const keys = Object.keys(attributesDef);

    for (let i = 0; i < keys.length; i += 1) {
        const attributeName = keys[i];
        const attribute: IProductAttribute = {
            name: attributeName,
            slug: nameToSlug(attributeName),
            featured: false,
            values: [],
        };

        const valuesDef = attributesDef[attributeName];
        let valueNames: string[] = [];

        if (typeof valuesDef === 'string') {
            valueNames = [valuesDef];
        } else {
            if (valuesDef[0] === true) {
                attribute.featured = true;
                valuesDef.splice(0, 1);
            }

            valueNames = valuesDef as string[];
        }

        valueNames.forEach((valueName) => {
            attribute.values.push({
                name: valueName,
                slug: nameToSlug(valueName),
            });
        });

        if (attribute.values.length > 0) {
            attributes.push(attribute);
        }
    }

    return attributes;
}

function makeProducts(defs: IProductDef[]): IProduct[] {
    return defs.map((def) => {
        let badges: string[] = [];

        if (def.badges) {
            if (typeof def.badges === 'string') {
                badges = [def.badges];
            } else {
                badges = def.badges.slice(0);
            }
        }

        let brand: IBrand = {
            slug: 'brandix',
            name: 'Brandix',
            image: '',
            country: 'JP',
        };

        if (def.brand) {
            brand = brands.find((x) => x.slug === def.brand) || brand;
        }

        const categorySlugs: string[] = def.categories || ['tools-garage'];
        const categories = categorySlugs
            .map((categorySlug) => shopCategoriesList.find((x) => x.slug === categorySlug))
            .map((x) => (x ? prepareCategory(x) : null))
            .filter((x) => x !== null) as IShopCategory[];

        const attributesDef: IProductAttributesDef = {
            Speed: [true, '750 RPM'],
            'Power Source': [true, 'Cordless-Electric'],
            'Battery Cell Type': [true, 'Lithium'],
            Voltage: [true, '20 Volts'],
            'Battery Capacity': [true, '2 Ah'],
            Material: ['Aluminium', 'Plastic'],
            'Engine Type': 'Brushless',
            Length: '99 mm',
            Width: '207 mm',
            Height: '208 mm',
        };

        return {
            id: getNextId(),
            name: def.name,
            excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,
                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed
                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque
                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie
                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et
                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget
                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris
                    vitae tellus.
                </p>
                <h4>Etiam lacus lacus mollis in mattis</h4>
                <p>
                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel
                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien
                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.
                </p>
                <p>
                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac
                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.
                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique
                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,
                    sit amet fringilla odio scelerisque non.
                </p>
            `,
            slug: def.slug,
            sku: def.sku,
            partNumber: 'BDX-750Z370-S',
            stock: 'in-stock',
            price: def.price,
            compareAtPrice: def.compareAtPrice || null,
            images: def.images.slice(0),
            badges,
            rating: def.rating,
            reviews: def.reviews,
            availability: def.availability,
            compatibility: def.compatibility || 'all',
            brand,
            type: {
                slug: 'default',
                name: 'Default',
                attributeGroups: [
                    {
                        name: 'General',
                        slug: 'general',
                        attributes: [
                            'speed',
                            'power-source',
                            'battery-cell-type',
                            'voltage',
                            'battery-capacity',
                            'material',
                            'engine-type',
                        ],
                    },
                    {
                        name: 'Dimensions',
                        slug: 'dimensions',
                        attributes: [
                            'length',
                            'width',
                            'height',
                        ],
                    },
                ],
            },
            attributes: resolveProductAttributesDef(
                {
                    ...attributesDef,
                    ...def.attributes,
                },
            ),
            options: [
                {
                    type: 'default',
                    slug: 'material',
                    name: 'Material',
                    values: [
                        { slug: 'steel', name: 'Steel' },
                        { slug: 'aluminium', name: 'Aluminium' },
                        { slug: 'thorium', name: 'Thorium' },
                    ],
                },
                {
                    type: 'color',
                    slug: 'color',
                    name: 'Color',
                    values: [
                        { slug: 'white', name: 'White', color: '#fff' },
                        { slug: 'yellow', name: 'Yellow', color: '#ffd333' },
                        { slug: 'red', name: 'Red', color: '#ff4040' },
                        { slug: 'blue', name: 'Blue', color: '#4080ff' },
                    ],
                },
            ],
            tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
            categories,
            customFields: {},
        };
    });
}

const productsDef: IProductDef[] = [
    {
        name: 'Brandix Spark Plug Kit ASR-400',
        slug: 'brandix-spark-plug-kit-asr-400',
        sku: '140-10440-B',
        price: 19,
        images: [
            '/images/products/product-1-1.jpg',
            '/images/products/product-1-2.jpg',
        ],
        badges: ['sale', 'new', 'hot'],
        rating: 4,
        reviews: 3,
        availability: 'in-stock',
        compatibility: [1, 2],
        attributes: {
            Color: 'White',
        },
    },
    {
        name: 'Brandix Brake Kit BDX-750Z370-S',
        slug: 'brandix-brake-kit-bdx-750z370-s',
        sku: '573-23743-C',
        price: 224,
        images: [
            '/images/products/product-2-1.jpg',
            '/images/products/product-2-2.jpg',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        compatibility: [1],
        attributes: {
            Color: 'Silver',
        },
    },
    {
        name: 'Left Headlight Of Brandix Z54',
        slug: 'left-headlight-of-brandix-z54',
        sku: '009-50078-Z',
        price: 349,
        compareAtPrice: 415,
        images: [
            '/images/products/product-3-1.jpg',
            '/images/products/product-3-2.jpg',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        attributes: {
            Color: 'Red',
        },
    },
    {
        name: 'Glossy Gray 19\' Aluminium Wheel AR-19',
        slug: 'glossy-gray-19-aluminium-wheel-ar-19',
        sku: 'A43-44328-B',
        price: 589,
        images: [
            '/images/products/product-4-1.jpg',
            '/images/products/product-4-2.jpg',
        ],
        badges: ['hot'],
        rating: 4,
        reviews: 26,
        availability: 'in-stock',
        compatibility: 'unknown',
        attributes: {
            Color: 'Black',
        },
    },
    {
        name: 'Twin Exhaust Pipe From Brandix Z54',
        slug: 'twin-exhaust-pipe-from-brandix-z54',
        sku: '729-51203-B',
        price: 749,
        images: [
            '/images/products/product-5-1.jpg',
            '/images/products/product-5-2.jpg',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Light Gray',
        },
    },
    {
        name: 'Motor Oil Level 5',
        slug: 'motor-oil-level-5',
        sku: '573-49386-C',
        price: 23,
        images: [
            '/images/products/product-6-1.jpg',
            '/images/products/product-6-2.jpg',
        ],
        rating: 5,
        reviews: 2,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Gray',
        },
    },
    {
        name: 'Brandix Engine Block Z4',
        slug: 'brandix-engine-block-z4',
        sku: '753-38573-B',
        price: 452,
        compareAtPrice: 573,
        images: [
            '/images/products/product-7-1.jpg',
            '/images/products/product-7-2.jpg',
        ],
        rating: 0,
        reviews: 0,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Dark Gray',
        },
    },
    {
        name: 'Brandix Clutch Discs Z175',
        slug: 'brandix-clutch-discs-z175',
        sku: '472-67382-Z',
        price: 345,
        images: [
            '/images/products/product-8-1.jpg',
            '/images/products/product-8-2.jpg',
        ],
        rating: 3,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Coal',
        },
    },
    {
        name: 'Brandix Manual Five Speed Gearbox',
        slug: 'brandix-manual-five-speed-gearbox',
        sku: '855-78336-G',
        price: 879,
        images: [
            '/images/products/product-9-1.jpg',
            '/images/products/product-9-2.jpg',
        ],
        rating: 4,
        reviews: 6,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Orange',
        },
    },
    {
        name: 'Set of Car Floor Mats Brandix Z4',
        slug: 'set-of-car-floor-mats-brandix-z4',
        sku: '473-75662-R',
        price: 78,
        compareAtPrice: 94,
        images: [
            '/images/products/product-10-1.jpg',
            '/images/products/product-10-2.jpg',
        ],
        rating: 4,
        reviews: 16,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Yellow',
        },
    },
    {
        name: 'Taillights Brandix Z54',
        slug: 'taillights-brandix-z54',
        sku: '521-57812-H',
        price: 60,
        images: [
            '/images/products/product-11-1.jpg',
            '/images/products/product-11-2.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Pear Green',
        },
    },
    {
        name: 'Wiper Blades Brandix WL2',
        slug: 'wiper-blades-brandix-wl2',
        sku: '994-34346-B',
        price: 12,
        images: [
            '/images/products/product-12-1.jpg',
            '/images/products/product-12-2.jpg',
        ],
        rating: 5,
        reviews: 41,
        availability: 'in-stock',
        attributes: {
            Color: 'Green',
        },
    },
    {
        name: 'Fantastic 12-Stroke Engine With A Power of 1991 hp',
        slug: 'fantastic-12-stroke-engine-with-a-power-of-1991-hp',
        sku: '985-00884-S',
        price: 2579,
        images: [
            '/images/products/product-13-1.jpg',
            '/images/products/product-13-2.jpg',
        ],
        rating: 3,
        reviews: 17,
        availability: 'in-stock',
        attributes: {
            Color: 'Emerald',
        },
    },
    {
        name: 'Set of Four 19 Inch Spiked Tires',
        slug: 'set-of-four-19-inch-spiked-tires',
        sku: '855-56888-U',
        price: 327,
        images: [
            '/images/products/product-14-1.jpg',
            '/images/products/product-14-2.jpg',
        ],
        rating: 4,
        reviews: 9,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Shamrock',
        },
    },
    {
        name: '40 Megawatt Low Beam Lamp',
        slug: '40-megawatt-low-beam-lamp',
        sku: '345-99553-E',
        price: 4,
        compareAtPrice: 8,
        images: [
            '/images/products/product-15-1.jpg',
            '/images/products/product-15-2.jpg',
        ],
        rating: 4,
        reviews: 31,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Color: 'Shakespeare',
        },
    },
    {
        name: 'Brandix Driver\'s seat',
        slug: 'brandix-drivers-seat',
        sku: '563-73744-Q',
        price: 78,
        images: [
            '/images/products/product-16-1.jpg',
            '/images/products/product-16-2.jpg',
        ],
        rating: 3,
        reviews: 4,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Blue',
        },
    },
    {
        name: 'Air Filter From Ash\'s Chainsaw',
        slug: 'air-filter-from-ashs-chainsaw',
        sku: '999-60606-X',
        price: 666.99,
        images: [
            '/images/products/product-17-1.jpg',
            '/images/products/product-17-2.jpg',
        ],
        rating: 5,
        reviews: 66,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Dark Blue',
        },
    },
    {
        name: 'Side Rearview Mirror',
        slug: 'side-rearview-mirror',
        sku: '545-74573-D',
        price: 40,
        compareAtPrice: 60,
        images: [
            '/images/products/product-18-1.jpg',
            '/images/products/product-18-2.jpg',
        ],
        rating: 4,
        reviews: 25,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Violet',
        },
    },
    {
        name: 'Brandix Car Door Lock',
        slug: 'brandix-car-door-lock',
        sku: '965-73344-F',
        price: 21,
        compareAtPrice: 31,
        images: [
            '/images/products/product-19-1.jpg',
            '/images/products/product-19-2.jpg',
        ],
        badges: ['sale'],
        rating: 3,
        reviews: 24,
        availability: 'in-stock',
        brand: 'turbo-electric',
        attributes: {
            Color: 'Purple',
        },
    },
    {
        name: 'Air Suspension For Brandix Car',
        slug: 'air-suspension-for-brandix-car',
        sku: '365-32667-P',
        price: 162,
        compareAtPrice: 174,
        images: [
            '/images/products/product-20-1.jpg',
            '/images/products/product-20-2.jpg',
        ],
        rating: 5,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Cerise',
        },
    },
    {
        name: 'Sunset Brake Kit',
        slug: 'sunset-brake-kit',
        sku: 'SSX-780B390-S',
        price: 1259,
        images: [
            '/images/products/product-21-1.jpg',
            '/images/products/product-21-2.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'sunset',
        attributes: {
            Color: 'Orange',
        },
    },
    {
        name: 'Specter Brake Kit',
        slug: 'specter-brake-kit',
        sku: 'SCT-123A380-S',
        price: 799,
        images: [
            '/images/products/product-22-1.jpg',
            '/images/products/product-22-2.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'specter',
        attributes: {
            Color: 'Green',
        },
    },
    {
        name: 'Brake Kit',
        slug: 'brake-kit',
        sku: 'NNO-120K643-S',
        price: 569,
        images: [
            '/images/products/product-23-1.jpg',
            '/images/products/product-23-2.jpg',
        ],
        rating: 3,
        reviews: 9,
        availability: 'in-stock',
        brand: 'no-name',
        attributes: {
            Color: 'Shamrock',
        },
    },
    {
        name: 'STP Generator Platinum',
        slug: 'stp-generator-platinum',
        sku: 'STP-577843-E',
        price: 379,
        images: [
            '/images/products/product-24-1.jpg',
            '/images/products/product-24-2.jpg',
        ],
        rating: 5,
        reviews: 22,
        availability: 'in-stock',
        brand: 'red-gate',
        attributes: {
            Color: 'Dark Blue',
        },
    },
];

export const products: IProduct[] = makeProducts(productsDef);
