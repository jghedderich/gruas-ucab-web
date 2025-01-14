import React, { useState } from 'react';
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import { useRouteMap } from '@/hooks/use-route-map';
import { DriverWithVehicle } from '@/types';

const mapContainerStyle = {
  width: '100%',
  height: '480px',
  borderRadius: '0.5rem',
};

const defaultMapOptions: google.maps.MapOptions = {
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
};

interface RouteMapProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  drivers?: DriverWithVehicle[];
}

export const RouteMap = ({ origin, destination, drivers }: RouteMapProps) => {
  const { directions } = useRouteMap({ origin, destination });
  const [selectedDriver, setSelectedDriver] =
    useState<DriverWithVehicle | null>(null);
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={origin}
      options={defaultMapOptions}
    >
      {directions && <DirectionsRenderer directions={directions} />}

      {drivers?.map((driver) => {
        const position = {
          lat: parseFloat(driver.driver.location.coordinates.latitude),
          lng: parseFloat(driver.driver.location.coordinates.longitude),
        };

        return (
          <Marker
            key={driver.driver.id}
            position={position}
            onClick={() => setSelectedDriver(driver)}
          />
        );
      })}

      {selectedDriver && (
        <InfoWindow
          position={{
            lat: parseFloat(
              selectedDriver.driver.location.coordinates.latitude
            ),
            lng: parseFloat(
              selectedDriver.driver.location.coordinates.longitude
            ),
          }}
          onCloseClick={() => setSelectedDriver(null)}
        >
          <article>
            <h3 className="font-semibold text-base">
              {selectedDriver.driver.name.firstName}{' '}
              {selectedDriver.driver.name.lastName}
            </h3>
            <p className="mb-2 -mt-1">{selectedDriver.provider.company.name}</p>
            <div className="flex items-center gap-1">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: selectedDriver.vehicle.color }}
              />
              <p>
                {selectedDriver.vehicle.brand} {selectedDriver.vehicle.model}
              </p>
            </div>

            <p>Matrícula: {selectedDriver.vehicle.licensePlate}</p>
            <p>Tipo: {selectedDriver.vehicle.type}</p>
          </article>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
