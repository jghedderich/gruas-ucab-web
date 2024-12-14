'use client';

import React from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { CostDetail, Policy } from '@/types';
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
  additionalCosts?: CostDetail[];
}

export function SummarySection({
  origin,
  destination,
  policy,
  additionalCosts,
}: SummarySectionProps) {
  const { directions, distance, duration } = useRouteMap({
    origin,
    destination,
  });

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={origin}
        options={defaultMapOptions}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <SummaryDetails
        policy={policy}
        distance={distance}
        duration={duration}
        additionalCosts={additionalCosts}
      />
    </>
  );
}
