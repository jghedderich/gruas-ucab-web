import { DriverWithVehicle, IPagination, Provider } from '@/types';

export function parseProvidersList(
  providers: IPagination<Provider>
): DriverWithVehicle[] {
  const driverList: DriverWithVehicle[] = [];

  providers.data.forEach((provider) => {
    provider.drivers.forEach((driver) => {
      const vehicle = provider.vehicles.find((v) => v.id === driver.vehicleId);
      if (vehicle && driver.isActive) {
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
