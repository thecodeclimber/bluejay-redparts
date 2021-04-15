// application
import { IDepartmentsLink } from '~/interfaces/departments-link';

const dataHeaderDepartments: IDepartmentsLink[] = [
  {
    title: 'Anchor',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: '1of5',
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Conical', url: '/catalog/conical/products' },
                { title: 'E-Z', url: '/catalog/e-z/products' },
                {
                  title: 'Hammer Drive',
                  url: '/catalog/hammer-drive/products',
                },
                { title: 'Hollow Wall', url: '/catalog/hollow-wall/products' },
                { title: 'Kit', url: '/catalog/kit/products' },
                { title: 'Nail', url: '/catalog/nail/products' },
                { title: 'Drop-In', url: '/catalog/drop-in/products' },
                {
                  title: 'Machine Screw',
                  url: '/catalog/machine-screw/products',
                },
                {
                  title: 'Setting Tools',
                  url: '/catalog/setting-tools/products',
                },
                { title: 'Shield', url: '/catalog/Shield/products' },
                { title: 'Sleeve', url: '/catalog/Sleeve/products' },
                { title: 'Wedge', url: '/catalog/Wedge/products' },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Bolts',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 3,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Carriage', url: '/catalog/Carriage/products' },
                { title: 'Elevator', url: '/catalog/elevator/products' },
                { title: 'Flange', url: '/catalog/flange/products' },
                {
                  title: 'Control Motor',
                  url: '/catalog/control-motor/products',
                },
                {
                  title: 'Flange Locknut',
                  url: '/catalog/flange-locknut/products',
                },
                { title: 'Hanger', url: '/catalog/hanger/products' },
                { title: 'Hex Head', url: '/catalog/hex-head/products' },
                { title: 'Lag', url: '/catalog/lag/products' },
                { title: 'Stove', url: '/catalog/stove/products' },
                {
                  title: 'Threaded Rod',
                  url: '/catalog/threaded-rod/products',
                },
                { title: 'Toggle', url: '/catalog/toggle/products' },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Hex Head Cap Screws',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 4,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                {
                  title: 'Hex Cap Screws',
                  url: '/catalog/hex-cap-screws/products',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Nuts',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 6,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Cap', url: '/catalog/cap/products' },
                { title: 'Coupling', url: '/catalog/coupling/products' },
                { title: 'Hex', url: '/catalog/hex/products' },
                { title: 'Locknuts', url: '/catalog/locknuts/products' },
                {
                  title: 'Machine Screw',
                  url: '/catalog/machine-screw/products',
                },
                { title: 'T-Nuts', url: '/catalog/t-nuts/products' },
                { title: 'Wing', url: '/catalog/wing/products' },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Pins',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 12,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Cotter Pins', url: '/catalog/cotter-pins/products' },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Screws',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 12,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Concrete', url: '/catalog/concrete/products' },
                { title: 'Deck Screws', url: '/catalog/deck-screws/products' },
                { title: 'Drywall ', url: '/catalog/drywall/products' },
                { title: 'Framing', url: '/catalog/framing/products' },
                { title: 'K Lath', url: '/catalog/k-lath/products' },
                { title: 'Machine', url: '/catalog/machine/products' },
                {
                  title: 'Self Drilling',
                  url: '/catalog/self-drilling/products',
                },
                {
                  title: 'Self Piercing',
                  url: '/catalog/self-piercing/products',
                },
                { title: 'Sheet Metal', url: '/catalog/sheet-metal/products' },
                {
                  title: 'Thread Cutting',
                  url: '/catalog/thread-cutting/products',
                },
                { title: 'Wall Plate', url: '/catalog/wall-plate/products' },
                { title: 'Wood', url: '/catalog/wood/products' },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Washer',
    url: '/catalog/products',
    submenu: {
      type: 'megamenu',
      size: 'sm',
      columns: [
        {
          size: 12,
          links: [
            {
              title: 'Sub Categories',
              url: '/catalog/products',
              links: [
                { title: 'Fender', url: '/catalog/fender/products' },
                { title: 'Finishing', url: '/catalog/finishing/products' },
                { title: 'Flat', url: '/catalog/flat/products' },
                { title: 'Lock Washer', url: '/catalog/lock-washer/products' },
                {
                  title: 'Machine Screw',
                  url: '/catalog/machine-screw/products',
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export default dataHeaderDepartments;
