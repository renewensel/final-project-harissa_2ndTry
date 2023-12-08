import React from "react";
import MapWithNoSSR from "@/components/MapWithNoSSR";
import About from "@/components/About";

const MapPage = () => {
    return (
        <>
            <h1>Map Page</h1>
            <div>
                <MapWithNoSSR />
            </div>
        </>
    );
};

export default MapPage;
