import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import "../styles/globals.css"; // Import Tailwind CSS

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <SWRConfig
                value={{
                    fetcher,
                    revalidateOnFocus: false, // Prevent automatic refetching on focus
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>
        </>
    );
}
