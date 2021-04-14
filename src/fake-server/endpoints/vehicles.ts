// application
import { clone, delayResponse, error } from '~/fake-server/utils';
import { IVehicle } from '~/interfaces/vehicle';
import { userVehicles, vehicles } from '~/fake-server/database/vehicles';
import { attribute_3 } from '~/fake-server/database/attributes';
import { shopCategoriesTree } from '~/fake-server/database/categories';

export function getCategory(): Promise<number[]> {
  const result: any[] = [];

  shopCategoriesTree.forEach((vehicle) => {
    if (vehicle?.name) {
      result.push(vehicle?.name);
    }
  });

  return delayResponse(Promise.resolve(result.sort()), 750);
}

export function getSubCategory(year: string): Promise<string[]> {
  const result: any[] = [];

  const CategoryIndex = shopCategoriesTree.findIndex(
    (category) => category?.name == year
  );

  shopCategoriesTree[CategoryIndex]?.children.forEach((subCategory: any) =>
    result.push(subCategory.name)
  );

  return delayResponse(Promise.resolve(result.sort()), 750);
}

export function getDiameter(year: number, make: string): Promise<string[]> {
  const result: string[] = [];

  attribute_3.forEach((attribute) => {
    if (attribute.diameter) {
      result.push(attribute.diameter);
    }
  });

  return delayResponse(Promise.resolve(result.sort()), 750);
}

export function getLength(
  year: number,
  make: string,
  model: string
): Promise<IVehicle[]> {
  const result: any[] = [];

  attribute_3.forEach((attribute) => {
    if (attribute.length) {
      result.push(attribute.length);
    }
  });

  return delayResponse(Promise.resolve(result.sort()), 750);
}

export function getVehicleByVin(vin: string): Promise<IVehicle> {
  const vinValue = vin.trim();

  const vehicle = vehicles.find((x) => x.model === 'Focus S');

  if (vinValue === '' || vinValue === 'error' || !vehicle) {
    return error('Page Not Found');
  }

  return Promise.resolve(vehicle);
}

export function getUserVehicles(): Promise<IVehicle[]> {
  return Promise.resolve(clone(userVehicles));
}

export function addUserVehicles(vehicleId: number): Promise<void> {
  const index = userVehicles.findIndex((x) => x.id === vehicleId);
  const vehicle = vehicles.find((x) => x.id === vehicleId);

  if (vehicle && index === -1) {
    userVehicles.push(vehicle);
  }

  return delayResponse(Promise.resolve());
}

export function removeUserVehicles(vehicleId: number): Promise<void> {
  const index = userVehicles.findIndex((x) => x.id === vehicleId);

  if (index !== -1) {
    userVehicles.splice(index, 1);
  }

  return delayResponse(Promise.resolve());
}
