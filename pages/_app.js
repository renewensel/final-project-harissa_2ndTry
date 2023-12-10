import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./../styles/globals.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "react-leaflet-cluster/lib/assets/MarkerCluster.Default.css";
// Import Leaflet CSS
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    const router = useRouter();

    return (
        <>
            {/* <GlobalStyle /> */}
            <AnimatePresence mode="wait">
                <motion.div key={router.pathname}>
                    <SWRConfig
                        value={{
                            fetcher,
                            revalidateOnFocus: false, // Prevent automatic refetching on focus
                        }}
                    >
                        <SessionProvider session={session}>
                            <Component {...pageProps} />
                        </SessionProvider>

                        <motion.div
                            className="slide-in"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        ></motion.div>
                        <motion.div
                            className="slide-out"
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        ></motion.div>
                    </SWRConfig>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
