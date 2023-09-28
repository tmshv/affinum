import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css";
import styles from "~/styles/index.css";
import mapboxCustomStyles from "~/styles/mapbox.css";
import { links as mainMainStyles } from "~/components/main-map";

import { Outlet } from "@remix-run/react";
import MainMap from "~/components/main-map";

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
        ...mainMainStyles(),
    ]
}

export default function Map() {
    return (
        <>
            <MainMap>
                <Outlet />
            </MainMap>
        </>
    )
}
