import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css";

import styles from "~/styles/index.css";
import mapboxCustomStyles from "~/styles/mapbox.css";
import { links as popupStyles } from "~/components/map-popup";

import AffinumOverlay from "~/components/affinum-overlay";
import { lazy, Suspense } from "react";
import ClientOnly from "~/components/client-only";

let Map = lazy(() => import("~/components/map"));

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: mapboxStyles
        },
        {
            rel: "stylesheet",
            href: mapboxCustomStyles,
        },
        ...popupStyles(),
    ];
}

export default function Index() {
    return (
        <>
            <ClientOnly>
                <Suspense>
                    <Map />
                </Suspense>
            </ClientOnly>
            <AffinumOverlay/>
        </>
    );
}

