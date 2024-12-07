'use client';

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { AddressDetails } from '@/types';

export const defaultMapContainerStyle = {
  width: '100%',
  height: '480px',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 10.507,
  lng: -66.859,
};

const defaultMapZoom = 14;

const defaultMapOptions: google.maps.MapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  streetViewControl: false,
};

interface MapComponentProps {
  onCoordinatesChange: (addressDetails: AddressDetails) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onCoordinatesChange }) => {
  const [markerPosition, setMarkerPosition] =
    React.useState<google.maps.LatLngLiteral | null>(null);

  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat, lng });

      try {
        const geocoder = new google.maps.Geocoder();
        const result = await geocoder.geocode({ location: { lat, lng } });

        if (result.results[0]) {
          const addressComponents = result.results[0].address_components;
          const addressDetails: AddressDetails = {
            coordinates: {
              latitude: lat.toString(),
              longitude: lng.toString(),
            },
            zip: '',
            city: '',
            addressLine1: '',
            addressLine2: '',
            state: '',
          };

          addressComponents.forEach((component) => {
            const types = component.types;
            if (types.includes('postal_code')) {
              addressDetails.zip = component.long_name;
            } else if (types.includes('locality')) {
              addressDetails.city = component.long_name;
            } else if (types.includes('street_number')) {
              addressDetails.addressLine1 = component.long_name;
            } else if (types.includes('route')) {
              addressDetails.addressLine1 += ' ' + component.long_name;
            } else if (types.includes('administrative_area_level_1')) {
              addressDetails.state = component.short_name;
            }
          });

          addressDetails.addressLine1 = addressDetails.addressLine1.trim();
          addressDetails.addressLine2 =
            result.results[0].formatted_address.split(',')[0];

          onCoordinatesChange(addressDetails);
        }
      } catch (error) {
        console.error('Error fetching address details:', error);
      }
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={defaultMapContainerStyle}
      center={defaultMapCenter}
      zoom={defaultMapZoom}
      options={defaultMapOptions}
      onClick={handleMapClick}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export { MapComponent };
