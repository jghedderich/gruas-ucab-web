'use client';

import React from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { Policy } from '@/types';
import { SummaryDetails } from './SummaryDetails';

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

interface SummarySectionProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  policy: Policy;
}

export function SummarySection({
  origin,
  destination,
  policy,
}: SummarySectionProps) {
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
    <section className="border-t border-gray-200 pt-5">
      <h4 className="font-semibold text-lg">Resumen de la orden</h4>
      <p className="text-sm mb-5 text-gray-500">
        Revise los datos de la orden para su confirmación.
      </p>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={origin}
        options={defaultMapOptions}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <SummaryDetails policy={policy} distance={distance} duration={duration} />
    </section>
  );
}
