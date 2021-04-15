/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IVehicle } from '~/interfaces/vehicle';
import { VehicleApi } from '~/api/base';
import {
  addUserVehicles,
  getSubCategory,
  getDiameter,
  getUserVehicles,
  getVehicleByVin,
  getLength,
  getCategory,
  removeUserVehicles,
} from '~/fake-server/endpoints';

export class FakeVehicleApi extends VehicleApi {
  getCategory(): Promise<number[]> {
    return getCategory();
  }

  getSubCategory(year: any): Promise<string[]> {
    return getSubCategory(year);
  }

  getDiameter(year: number, make: string): Promise<string[]> {
    return getDiameter(year, make);
  }

  getLength(year: number, make: string, model: string): Promise<IVehicle[]> {
    return getLength(year, make, model);
  }

  getVehicleByVin(vin: string): Promise<IVehicle> {
    return getVehicleByVin(vin);
  }

  getUserVehicles(): Promise<IVehicle[]> {
    return getUserVehicles();
  }

  addUserVehicle(vehicleId: number): Promise<void> {
    return addUserVehicles(vehicleId);
  }

  removeUserVehicle(vehicleId: number): Promise<void> {
    return removeUserVehicles(vehicleId);
  }
}
