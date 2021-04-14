// application
import { IVehicle } from '~/interfaces/vehicle';
import { makeIdGenerator } from '~/fake-server/utils';
import { IVehicleDef } from '~/fake-server/interfaces/vehicle-def';

const getNextId = makeIdGenerator();

function makeVehicles(defs: any[]): IVehicle[] {
  return defs
    .map((def) => {
      const years = [];
      years.push(def.year);

      return years.map((year) => ({
        id: getNextId(),
        year,
        make: def.make,
        model: def.model,
        engine: def.engine,
      }));
    })
    .reduce((acc, v) => [...acc, ...v], []);
}

const vehiclesDef: any[] = [
  {
    year: 'anchor',
    make: [
      'Conical',
      'E-Z',
      'Hammer Drive',
      'Hollow Wall',
      'Kit',
      'Nail',
      'Drop-In',
      'Machine Screw',
      'Setting Tools',
      'Shield',
      'Sleeve',
      'Wedge',
    ],
    model: 'Focus S',
    engine: '2.0L 1742DA L4 FI Turbo',
  },
  {
    year: 'bolts',
    make: [
      'Carriage',
      'Elevator',
      'Flange',
      'Control Motor',
      'Flange Locknut',
      'Hanger',
      'Hex Head',
      'Lag',
      'Stove',
      'Threaded Rod',
      'Toggle',
    ],
    model: 'Q7 Premium',
    engine: '3.0L 5626CC L6 QK',
  },
  {
    year: 'hex head cap screws',
    make: ['Hex Cap Screws'],
    model: 'Rio LX',
    engine: '1.6L 8306JK L5 RL',
  },
  {
    year: 'nuts',
    make: [
      'Cap',
      'Coupling',
      'Hex',
      'Locknuts',
      'Machine Screw',
      'T-Nuts',
      'Wing',
    ],
    model: 'M5',
    engine: '5.0L 8351XZ V10 DB',
  },
  {
    year: 'pins',
    make: ['Cotter Pins'],
    model: '4C',
    engine: '1.7L 1742CC L4 FI Turbo',
  },
  {
    year: 'screws',
    make: [
      'Concrete',
      'Deck Screws',
      'Drywall ',
      'Framing',
      'K Lath',
      'Machine',
      'Self Drilling',
      'Self Piercing',
      'Sheet Metal',
      'Thread Cutting',
      'Wall Plate',
      'Wood',
    ],
    model: 'DB11',
    engine: '5.2L 5204CC V12 FI Turbo',
  },
  {
    year: 'washers',
    make: ['Fender', 'Finishing', 'Flat', 'Lock Washer', 'Machine Screw'],
    model: 'Challenger GT',
    engine: '3.6L 3604CC V6 FI',
  },
];

export const vehicles: any[] = makeVehicles(vehiclesDef);

export const userVehicles: any[] = vehicles.slice(0, 3);
