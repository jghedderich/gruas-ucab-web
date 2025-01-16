import { DriverWithVehicle } from '@/types';

const vehicleTypeMapping = {
  suv: 'Heavy',
  van: 'Heavy',
  pickup: 'Heavy',
  sedan: 'Medium',
  coupe: 'Medium',
  hatchback: 'Light',
  motorcycle: 'Motorcycle',
};

const vehicleHierarchy = ['Motorcycle', 'Light', 'Medium', 'Heavy'];

function isDriverSuitable(
  driverVehicleType: string,
  requiredVehicleType: string
): boolean {
  return (
    vehicleHierarchy.indexOf(driverVehicleType) >=
    vehicleHierarchy.indexOf(requiredVehicleType)
  );
}

export function filterDriversForClientVehicle(
  drivers: DriverWithVehicle[],
  clientVehicleType: string
): DriverWithVehicle[] {
  const lowercaseClientVehicleType = clientVehicleType.toLowerCase();
  const requiredDriverVehicleType =
    vehicleTypeMapping[lowercaseClientVehicleType];

  if (!requiredDriverVehicleType) {
    console.log(`Unrecognized client vehicle type: ${clientVehicleType}`);
    return [];
  }

  return drivers.filter((driver) =>
    isDriverSuitable(driver.vehicle.type, requiredDriverVehicleType)
  );
}
