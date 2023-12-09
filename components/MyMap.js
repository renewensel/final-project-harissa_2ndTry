import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMap = () => {
    const center = [52.51311757687855, 13.417303856437913]; // Set your desired coordinates
    const zoom = 17; // Set your desired zoom level

    // Define the icon for the marker
    const markerIcon = L.icon({
        iconUrl: "/marker.svg", // Adjust the path based on your folder structure
        iconSize: [50, 50], // Adjust the size of the marker
        iconAnchor: [25, 50], // Adjust the anchor point of the marker
        popupAnchor: [0, -50], // Adjust the popup anchor point
    });

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "600px", width: "100" }}
            className="leaflet-map-container"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={markerIcon}>
                <Popup>
                    <b>Harissa Oriental Cuisine </b>
                    <br /> Brückenstr. 10a, 10179 Berlin
                    <br />
                    <br />
                    Mon - Fri: 11:00 - 14:45
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
