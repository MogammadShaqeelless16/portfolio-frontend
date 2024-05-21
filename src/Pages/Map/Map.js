import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import icon from 'leaflet/dist/images/marker-icon.png'; // Default Leaflet marker icon

const MapPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation([latitude, longitude]);
          },
          (error) => {
            console.error('Error getting user location:', error);
            // Handle location access error (optional)
          }
        );
      } else {
        console.warn('Geolocation not supported by this browser.');
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const map = L.map(mapRef.current).setView(userLocation, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const marker = L.marker(userLocation, { icon: L.icon({ iconUrl: icon }) }).addTo(map);
      marker.bindPopup('You are here'); // Simple popup message
    }
  }, [userLocation]);

  return (
    <div ref={mapRef} style={{ height: '720px' }} /> // Map container using mapRef
  );
};

export default MapPage;
