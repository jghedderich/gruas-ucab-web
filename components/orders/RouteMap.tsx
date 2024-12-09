import React from 'react';
import { DirectionsRenderer, GoogleMap } from '@react-google-maps/api';
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

interface RouteMapProps {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
}

export const RouteMap = ({ origin, destination }: RouteMapProps) => {
  const { directions } = useRouteMap({ origin, destination });
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={origin}
      options={defaultMapOptions}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};
