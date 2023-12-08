import React from "react";
import MapWithNoSSR from "@/components/MapWithNoSSR";
import About from "@/components/About";
import Navigation from "@/components/Navigation";

const MapPage = () => {
    return (
        <>
            <Navigation className="header" />
            <h1>Map Page</h1>
            <div>
                <MapWithNoSSR style={{ zIndex: 12 }} />
            </div>
        </>
    );
};

export default MapPage;
