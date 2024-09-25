'use client';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const mapContainerStyle = {
  height: '400px',
  width: '100%',
  borderRadius: '8px',
};

const center = {
  lat: 10.4806,
  lng: -66.9036, // Caracas, Venezuela
};

export const MapComponent = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState({ lat: 0, lng: 0 });

  const onMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      setMarker({
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
      });
      onLocationSelect({
        latitude: event.latLng?.lat(),
        longitude: event.latLng?.lng(),
      });
    },
    [onLocationSelect]
  );
  if (loadError) {
    return <div>Error al cargar mapa: {loadError.message}</div>;
  }
  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      onClick={onMapClick}
    >
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
};
