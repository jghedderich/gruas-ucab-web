import { DriverWithVehicle, IPagination, Provider } from '@/types';

export function parseProvidersForVehicles(
  providers: IPagination<Provider>
): DriverWithVehicle[] {
  const driverList: DriverWithVehicle[] = [];

  providers.data.forEach((provider) => {
    provider.drivers.forEach((driver) => {
      const vehicle = provider.vehicles.find((v) => v.id === driver.vehicleId);
      if (vehicle) {
        driverList.push({
          driver,
          provider,
          vehicle,
        });
      }
    });
  });

  return driverList;
}
