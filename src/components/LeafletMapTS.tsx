import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Resolve missing marker icon assets in bundlers (Vite/Webpack)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize:[25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],   
  shadowSize: [41, 41] 
});
L.Marker.prototype.options.icon = DefaultIcon;

// Strictly typed interface structural schema for markers
interface MapPin {
  id: number;
  coordinates: [number, number]; // Tuple type definition
  label: string;
}

const LeafletMapTS: React.FC = () => {
  const centralPosition: [number, number] = [20.5937, 78.9629]; // India
  
  const pinLocations: MapPin[] = [
    { id: 1, coordinates: [13.067439, 80.237617], label: "Chennai" },
    { id: 2, coordinates: [9.9252, 78.1198], label: "Madurai" },
    { id: 3, coordinates: [8.959021, 77.312935], label: "Tenkasi" },
    { id: 4, coordinates: [13.1438, 79.9089], label: "Tiruvallur" },
    { id: 5, coordinates: [9.5872, 77.9514], label: "Virudunagar" },
    { id: 6, coordinates: [12.932063, 79.333466], label: "Ranipet" },
    { id: 7, coordinates: [12.2286, 79.0665], label: "Tiruvannamalai" },
    { id: 8, coordinates: [12.8342, 79.7036], label: "Kanchipuram" },
    { id: 9, coordinates: [11.0163, 76.9558], label: "Coimbatore" },
    { id: 10, coordinates: [15.9129, 80.0800], label : "Andhra Pradesh"},
    { id: 11, coordinates: [22.3094, 72.1362], label : "Gujarat"},
    { id: 12, coordinates: [26.8467, 80.9462], label : "Uttar Pradesh"},
    { id: 13, coordinates: [15.317, 75.714], label : "Karnataka"},
    { id: 14, coordinates: [20.940920, 84.803467], label : "Odisha"},
    { id: 15, coordinates: [19.6633, 75.3003], label : "Maharashtra"}
  ];

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <MapContainer 
        center={centralPosition} 
        zoom={4} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        
        {pinLocations.map((pin: MapPin) => (
          <Marker key={pin.id} position={pin.coordinates}>
            <Popup>{pin.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMapTS;
