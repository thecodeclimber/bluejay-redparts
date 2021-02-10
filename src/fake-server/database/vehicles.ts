// application
import { IVehicle } from '~/interfaces/vehicle';
import { makeIdGenerator } from '~/fake-server/utils';
import { IVehicleDef } from '~/fake-server/interfaces/vehicle-def';

const getNextId = makeIdGenerator();

function makeVehicles(defs: IVehicleDef[]): IVehicle[] {
    return defs.map((def) => {
        const range = typeof def.year === 'number' ? [def.year, def.year] : def.year;
        const years = [];

        for (let i = range[0]; i <= range[1]; i += 1) {
            years.push(i);
        }

        return years.map((year) => ({
            id: getNextId(),
            year,
            make: def.make,
            model: def.model,
            engine: def.engine,
        }));
    }).reduce((acc, v) => [...acc, ...v], []);
}

const vehiclesDef: IVehicleDef[] = [
    {
        year: 2011,
        make: 'Ford',
        model: 'Focus S',
        engine: '2.0L 1742DA L4 FI Turbo',
    },
    {
        year: 2019,
        make: 'Audi',
        model: 'Q7 Premium',
        engine: '3.0L 5626CC L6 QK',
    },
    {
        year: 2015,
        make: 'Kia',
        model: 'Rio LX',
        engine: '1.6L 8306JK L5 RL',
    },
    {
        year: 2008,
        make: 'BMW',
        model: 'M5',
        engine: '5.0L 8351XZ V10 DB',
    },
    {
        year: [2008, 2018],
        make: 'Alfa Romeo',
        model: '4C',
        engine: '1.7L 1742CC L4 FI Turbo',
    },
    {
        year: [2008, 2018],
        make: 'Aston Martin',
        model: 'DB11',
        engine: '5.2L 5204CC V12 FI Turbo',
    },
    {
        year: [2008, 2018],
        make: 'Dodge',
        model: 'Challenger GT',
        engine: '3.6L 3604CC V6 FI',
    },
    {
        year: [2008, 2018],
        make: 'Lexus',
        model: 'LS460',
        engine: '4.6L 4608CC V8 FI',
    },
    {
        year: [2008, 2018],
        make: 'Nissan',
        model: 'Juke S',
        engine: '1.6 1618CC L4 FI Turbo',
    },
];

export const vehicles: IVehicle[] = makeVehicles(vehiclesDef);

export const userVehicles: IVehicle[] = vehicles.slice(0, 3);
