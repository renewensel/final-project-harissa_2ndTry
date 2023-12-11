import React from "react";
import MapWithNoSSR from "@/components/MapWithNoSSR";
import About from "@/components/About";
import Navigation from "@/components/Navigation";

const MapPage = () => {
    return (
        <>
            <Navigation className="header" />
            <div>
                {/* <MapWithNoSSR style={{ zIndex: 12 }} /> */}
                <MapWithNoSSR />
                <div className="imprint-box">
                    <div className="imprint-box-imprint">
                        <h3>Imprint</h3>
                    </div>
                    <div className="imprint-box-company">
                        {" "}
                        <p>
                            <b>Harissa Oriental Cuisine</b>
                            <br />
                            BBE Bistro Betriebs- & Entwicklungsgesellschaft mbH
                            <br />
                            Brückenstr. 10a, 10179 Berlin
                        </p>
                        <br />
                        <p>
                            Fon: 0152 / 51 51 60 73
                            <br />
                            E-Mail: info@harissa-berlin.de
                            <br />
                        </p>
                        <br />
                        <p>
                            Geschäftsführer: Ramsi Hoffmann
                            <br />
                            USt-IdNr. DE275905662 Berlin Charlottenburg
                            <br />
                            HRB: 132686
                        </p>
                    </div>
                    <div className="imprint-box-copyright">
                        <p>
                            <b>Urheberrecht</b>
                            <br />
                            Copyright © 2011 harissa
                            <br />
                            Alle Rechte vorbehalten.
                            <br />
                            Die Inhalte dieser Website sind urheberrechtlich
                            geschützt. Ohne schriftliche Genehmigung seitens des
                            Betreibers darf der Inhalt dieser Seite in keiner
                            Form reproduziert oder unter Verwendung
                            elektronischer Systeme verarbeitet, vervielfältigt
                            oder verbreitet werden, es sei denn, Gegenteiliges
                            wäre ausdrücklich vermerkt.
                            <br />
                            <br />
                            Bildmaterial Copyright © harissa
                            <br />
                            <br />
                            <b>Links zu externen Websites</b>
                            <br />
                            Die Website enthält Links zu externen Websites. Da
                            diese Websites nicht unserem Einfluss unterliegen,
                            können wir keinerlei Verantwortung für deren Inhalte
                            und Datenschutzpolitik übernehmen. Marken- und
                            Warenzeichen Alle innerhalb dieser Website genannten
                            Marken- und Warenzeichen unterliegen uneingeschränkt
                            den Bestimmungen des jeweils gültigen
                            Kennzeichnungsrechtes und gegebenenfalls den
                            Besitzrechten der jeweiligen eingetragenen
                            Eigentümer.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapPage;
