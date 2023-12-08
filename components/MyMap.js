import React from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMap = () => {
    const center = [52.51309637687855, 13.417892856437913]; // Set your desired coordinates
    const zoom = 17; // Set your desired zoom level

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "600px", width: "600px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
