import { json } from "@remix-run/node";

import type { MetaFunction } from "@remix-run/node";

import mapboxStyles from "mapbox-gl/dist/mapbox-gl.css";
import styles from "~/styles/index.css";
import mapboxCustomStyles from "~/styles/mapbox.css";
import { links as mainMainStyles } from "~/components/main-map";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import MainMap from "./components/main-map";
import YandexMetrika from "./components/yandex-metrika";
import { AppContext, defaultAppContextValue } from "./context/AppContext";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Affinum Map",
    viewport: "width=device-width,initial-scale=1",
});

export async function loader() {
    return json({
        ENV: {
            MAPBOX_ACCESS_KEY: process.env.MAPBOX_ACCESS_KEY,
        },
    });
}

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
    ];
}

export default function App() {
    const data = useLoaderData<typeof loader>();

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />

                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <MainMap>
                    <Outlet />
                </MainMap>
                <ScrollRestoration />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(
                            data.ENV
                        )}`,
                    }}
                />
                <YandexMetrika counter={92606872} />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
