/* eslint-disable import/prefer-default-export */

// application
import { IVehicle } from '~/interfaces/vehicle';

export abstract class VehicleApi {
  abstract getCategory(): Promise<number[]>;

  abstract getSubCategory(year: number): Promise<string[]>;

  abstract getDiameter(year: number, make: string): Promise<string[]>;

  abstract getLength(
    year: number,
    make: string,
    model: string
  ): Promise<IVehicle[]>;

  abstract getVehicleByVin(vin: string): Promise<IVehicle>;

  abstract getUserVehicles(): Promise<IVehicle[]>;

  abstract addUserVehicle(vehicleId: number): Promise<void>;

  abstract removeUserVehicle(vehicleId: number): Promise<void>;
}
