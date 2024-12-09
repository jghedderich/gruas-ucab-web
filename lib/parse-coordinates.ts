export const parseCoordinates = (coordinates: {
  latitude: string;
  longitude: string;
}) => {
  const parsedLatitude = parseFloat(coordinates.latitude);
  const parsedLongitude = parseFloat(coordinates.longitude);

  return {
    lat: parsedLatitude,
    lng: parsedLongitude,
  };
};
