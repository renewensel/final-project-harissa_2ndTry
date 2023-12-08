import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/MyMap"), {
    ssr: false,
});

export default MapWithNoSSR;
