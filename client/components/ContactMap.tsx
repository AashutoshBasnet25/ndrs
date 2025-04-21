"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import type { LatLngTuple } from "leaflet"

// Singha Durbar coordinates
const OFFICE_LOCATION: LatLngTuple = [27.6994, 85.3209]

const markerIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function ContactMap() {
  return (
    <MapContainer 
      center={OFFICE_LOCATION} 
      zoom={16} 
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={OFFICE_LOCATION} icon={markerIcon}>
        <Popup>
          Nepal Disaster Response System<br />
          Singha Durbar, Kathmandu
        </Popup>
      </Marker>
    </MapContainer>
  )
} 