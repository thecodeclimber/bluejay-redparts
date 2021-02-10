// application
import { IDepartmentsLink } from '~/interfaces/departments-link';

const dataHeaderDepartments: IDepartmentsLink[] = [
    {
        title: 'Headlights & Lighting',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'xl',
            image: '/images/departments/departments-2.jpg',
            columns: [
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Bumpers', url: '/catalog/products' },
                                { title: 'Hoods', url: '/catalog/products' },
                                { title: 'Grilles', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Door Handles', url: '/catalog/products' },
                                { title: 'Car Covers', url: '/catalog/products' },
                                { title: 'Tailgates', url: '/catalog/products' },
                            ],
                        },
                        { title: 'Suspension', url: '/catalog/products' },
                        { title: 'Steering', url: '/catalog/products' },
                        { title: 'Fuel Systems', url: '/catalog/products' },
                        { title: 'Transmission', url: '/catalog/products' },
                        { title: 'Air Filters', url: '/catalog/products' },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/catalog/products',
                            links: [
                                { title: 'Headlights', url: '/catalog/products' },
                                { title: 'Tail Lights', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Turn Signals', url: '/catalog/products' },
                                { title: 'Switches & Relays', url: '/catalog/products' },
                                { title: 'Corner Lights', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/catalog/products',
                            links: [
                                { title: 'Brake Discs', url: '/catalog/products' },
                                { title: 'Wheel Hubs', url: '/catalog/products' },
                                { title: 'Air Suspension', url: '/catalog/products' },
                                { title: 'Ball Joints', url: '/catalog/products' },
                                { title: 'Brake Pad Sets', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Floor Mats', url: '/catalog/products' },
                                { title: 'Gauges', url: '/catalog/products' },
                                { title: 'Consoles & Organizers', url: '/catalog/products' },
                                { title: 'Mobile Electronics', url: '/catalog/products' },
                                { title: 'Steering Wheels', url: '/catalog/products' },
                                { title: 'Cargo Accessories', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Engine & Drivetrain',
                            url: '/catalog/products',
                            links: [
                                { title: 'Air Filters', url: '/catalog/products' },
                                { title: 'Oxygen Sensors', url: '/catalog/products' },
                                { title: 'Heating', url: '/catalog/products' },
                                { title: 'Exhaust', url: '/catalog/products' },
                                { title: 'Cranks & Pistons', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Tools & Garage',
                            url: '/catalog/products',
                            links: [
                                { title: 'Repair Manuals', url: '/catalog/products' },
                                { title: 'Car Care', url: '/catalog/products' },
                                { title: 'Code Readers', url: '/catalog/products' },
                                { title: 'Tool Boxes', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Interior Parts',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'lg',
            image: '/images/departments/departments-1.jpg',
            columns: [
                {
                    size: 3,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Bumpers', url: '/catalog/products' },
                                { title: 'Hoods', url: '/catalog/products' },
                                { title: 'Grilles', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Door Handles', url: '/catalog/products' },
                                { title: 'Car Covers', url: '/catalog/products' },
                                { title: 'Tailgates', url: '/catalog/products' },
                            ],
                        },
                        { title: 'Suspension', url: '/catalog/products' },
                        { title: 'Steering', url: '/catalog/products' },
                        { title: 'Fuel Systems', url: '/catalog/products' },
                        { title: 'Transmission', url: '/catalog/products' },
                        { title: 'Air Filters', url: '/catalog/products' },
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/catalog/products',
                            links: [
                                { title: 'Headlights', url: '/catalog/products' },
                                { title: 'Tail Lights', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Turn Signals', url: '/catalog/products' },
                                { title: 'Switches & Relays', url: '/catalog/products' },
                                { title: 'Corner Lights', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/catalog/products',
                            links: [
                                { title: 'Brake Discs', url: '/catalog/products' },
                                { title: 'Wheel Hubs', url: '/catalog/products' },
                                { title: 'Air Suspension', url: '/catalog/products' },
                                { title: 'Ball Joints', url: '/catalog/products' },
                                { title: 'Brake Pad Sets', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Floor Mats', url: '/catalog/products' },
                                { title: 'Gauges', url: '/catalog/products' },
                                { title: 'Consoles & Organizers', url: '/catalog/products' },
                                { title: 'Mobile Electronics', url: '/catalog/products' },
                                { title: 'Steering Wheels', url: '/catalog/products' },
                                { title: 'Cargo Accessories', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Tools & Garage',
                            url: '/catalog/products',
                            links: [
                                { title: 'Repair Manuals', url: '/catalog/products' },
                                { title: 'Car Care', url: '/catalog/products' },
                                { title: 'Code Readers', url: '/catalog/products' },
                                { title: 'Tool Boxes', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Switches & Relays',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'md',
            image: '/images/departments/departments-3.jpg',
            columns: [
                {
                    size: 4,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Bumpers', url: '/catalog/products' },
                                { title: 'Hoods', url: '/catalog/products' },
                                { title: 'Grilles', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Door Handles', url: '/catalog/products' },
                                { title: 'Car Covers', url: '/catalog/products' },
                                { title: 'Tailgates', url: '/catalog/products' },
                            ],
                        },
                        { title: 'Suspension', url: '/catalog/products' },
                        { title: 'Steering', url: '/catalog/products' },
                        { title: 'Fuel Systems', url: '/catalog/products' },
                        { title: 'Transmission', url: '/catalog/products' },
                        { title: 'Air Filters', url: '/catalog/products' },
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/catalog/products',
                            links: [
                                { title: 'Headlights', url: '/catalog/products' },
                                { title: 'Tail Lights', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Turn Signals', url: '/catalog/products' },
                                { title: 'Switches & Relays', url: '/catalog/products' },
                                { title: 'Corner Lights', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/catalog/products',
                            links: [
                                { title: 'Brake Discs', url: '/catalog/products' },
                                { title: 'Wheel Hubs', url: '/catalog/products' },
                                { title: 'Air Suspension', url: '/catalog/products' },
                                { title: 'Ball Joints', url: '/catalog/products' },
                                { title: 'Brake Pad Sets', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Floor Mats', url: '/catalog/products' },
                                { title: 'Gauges', url: '/catalog/products' },
                                { title: 'Consoles & Organizers', url: '/catalog/products' },
                                { title: 'Mobile Electronics', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Tires & Wheels',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            image: '/images/departments/departments-4.jpg',
            columns: [
                {
                    size: 6,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Bumpers', url: '/catalog/products' },
                                { title: 'Hoods', url: '/catalog/products' },
                                { title: 'Grilles', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Door Handles', url: '/catalog/products' },
                                { title: 'Car Covers', url: '/catalog/products' },
                                { title: 'Tailgates', url: '/catalog/products' },
                            ],
                        },
                        { title: 'Suspension', url: '/catalog/products' },
                        { title: 'Steering', url: '/catalog/products' },
                        { title: 'Fuel Systems', url: '/catalog/products' },
                        { title: 'Transmission', url: '/catalog/products' },
                        { title: 'Air Filters', url: '/catalog/products' },
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/catalog/products',
                            links: [
                                { title: 'Headlights', url: '/catalog/products' },
                                { title: 'Tail Lights', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Turn Signals', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Tools & Garage',
        url: '/catalog/products',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Bumpers', url: '/catalog/products' },
                                { title: 'Hoods', url: '/catalog/products' },
                                { title: 'Grilles', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Door Handles', url: '/catalog/products' },
                                { title: 'Car Covers', url: '/catalog/products' },
                                { title: 'Tailgates', url: '/catalog/products' },
                            ],
                        },
                        { title: 'Suspension', url: '/catalog/products' },
                        { title: 'Steering', url: '/catalog/products' },
                        { title: 'Fuel Systems', url: '/catalog/products' },
                        { title: 'Transmission', url: '/catalog/products' },
                        { title: 'Air Filters', url: '/catalog/products' },
                    ],
                },
            ],
        },
    },
    { title: 'Clutches', url: '/catalog/products' },
    { title: 'Fuel Systems', url: '/catalog/products' },
    { title: 'Steering', url: '/catalog/products' },
    { title: 'Suspension', url: '/catalog/products' },
    { title: 'Body Parts', url: '/catalog/products' },
    { title: 'Transmission', url: '/catalog/products' },
    { title: 'Air Filters', url: '/catalog/products' },
];

export default dataHeaderDepartments;
