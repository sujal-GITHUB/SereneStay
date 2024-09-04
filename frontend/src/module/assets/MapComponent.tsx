// MapComponent.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { HotelList,Hotel } from "../../module/HoTelContent/types/HotelsType"; // Adjust the import path accordingly
import mockHotels from "../../pages/api/mockHotels.json"; // Adjust the import path accordingly

const MapComponent = () => {
  // Extract hotel data and ensure coordinates are correctly formatted
  const hotels: HotelList = {
    hotels: mockHotels.hotels.map((hotel: any) => ({
      ...hotel,
      coordinates: hotel.coordinates as [number, number], // Ensure correct tuple format
    })) as Hotel[],
  };

  // Determine the initial position
  const initialHotel = hotels.hotels[0];
  const initialPosition: [number, number] = initialHotel
    ? initialHotel.coordinates
    : [51.505, -0.09]; // Fallback position if no hotels are available

  return (
    <MapContainer center={initialPosition} zoom={13} className="w-96 h-64 rounded-xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hotels.hotels.map((hotel: Hotel, index: number) => {
        const { coordinates, name, location, rating } = hotel;
        console.log(`Marker for ${name}:`, coordinates); // Debugging coordinates

        return (
          <Marker
            key={index}
            position={coordinates}
            icon={L.icon({ // Use default Leaflet icon
              iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
              iconSize: [25, 41], // Size of the icon
              iconAnchor: [12, 41], // Anchor position of the icon
              popupAnchor: [1, -34] // Popup position
            })}
          >
            <Popup>
              <strong>{name}</strong><br />
              {location}<br />
              Rating: {rating}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;