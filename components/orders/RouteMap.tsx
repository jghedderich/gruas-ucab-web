'use client';

import React from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '480px',
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
}

export function RouteMap({ origin, destination }: RouteMapProps) {
  const [directions, setDirections] =
    React.useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = React.useState<string>('');
  const [duration, setDuration] = React.useState<string>('');

  React.useEffect(() => {
    if (origin && destination) {
      const directionsService = new google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            setDirections(result);
            const route = result.routes[0];
            if (route && route.legs[0]) {
              setDistance(route.legs[0].distance?.text || '');
              setDuration(route.legs[0].duration?.text || '');
            }
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={origin}
        options={defaultMapOptions}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <div className="mt-4">
        <p>
          <strong>Distancia:</strong> {distance}
        </p>
        <p>
          <strong>Tiempo de viaje:</strong> {duration}
        </p>
      </div>
    </div>
  );
}
