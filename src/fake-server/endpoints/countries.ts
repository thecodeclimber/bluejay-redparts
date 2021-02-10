/* eslint-disable import/prefer-default-export */

// application
import { clone } from '~/fake-server/utils';
import { ICountry } from '~/interfaces/country';

const countries: ICountry[] = [
    { code: 'RAND', name: 'Random Federation' },
    { code: 'LAND', name: 'RandomLand' },

    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'RU', name: 'Russia' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'US', name: 'United States' },
];

export function getCountries(): Promise<ICountry[]> {
    return Promise.resolve(clone(countries));
}
