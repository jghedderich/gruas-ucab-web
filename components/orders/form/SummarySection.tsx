'use client';

import React from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { Policy } from '@/types';
import { SummaryDetails } from './SummaryDetails';
import { useRouteMap } from '@/hooks/use-route-map';

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
  const { directions, distance, duration } = useRouteMap({
    origin,
    destination,
  });

  return (
    // remove border-t
    <section className="border-t border-gray-200 pt-5">
      <h4 className="font-semibold text-lg">Resumen de la orden</h4>
      <p className="text-sm mb-5 text-gray-500">
        Todos los datos generales de la orden.
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
