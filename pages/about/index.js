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
                <div>
                    <h3>Imprint</h3>
                    <p>
                        Harissa Oriental Cuisine BBE Bistro Betriebs- &
                        Entwicklungsgesellschaft mbH
                        <p>Brückenstr. 10a, 10179 Berlin</p>
                        <p>
                            Fon: 0152 / 51 51 60 73 E-Mail:
                            info@harissa-berlin.de Geschäftsführer: Ramsi
                            Hoffmann USt-IdNr. DE275905662 Berlin Charlottenburg
                            HRB: 132686
                        </p>
                    </p>
                </div>
                <div>
                    <p>
                        Urheberrecht Copyright © 2011 harissa Alle Rechte
                        vorbehalten. Die Inhalte dieser Website sind
                        urheberrechtlich geschützt. Ohne schriftliche
                        Genehmigung seitens des Betreibers darf der Inhalt
                        dieser Seite in keiner Form reproduziert oder unter
                        Verwendung elektronischer Systeme verarbeitet,
                        vervielfältigt oder verbreitet werden, es sei denn,
                        Gegenteiliges wäre ausdrücklich vermerkt. Bildmaterial
                        Copyright © harissa Links zu externen Websites Die
                        Website enthält Links zu externen Websites. Da diese
                        Websites nicht unserem Einfluss unterliegen, können wir
                        keinerlei Verantwortung für deren Inhalte und
                        Datenschutzpolitik übernehmen. Marken- und Warenzeichen
                        Alle innerhalb dieser Website genannten Marken- und
                        Warenzeichen unterliegen uneingeschränkt den
                        Bestimmungen des jeweils gültigen Kennzeichnungsrechtes
                        und gegebenenfalls den Besitzrechten der jeweiligen
                        eingetragenen Eigentümer.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MapPage;
