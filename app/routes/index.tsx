import styles from "~/styles/index.css";
import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css";
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
    ];
}

export default function Index() {
    return (
        <ClientOnly>
            <Suspense>
                <Map />
            </Suspense>
        </ClientOnly>
    );
}

