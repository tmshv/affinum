import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

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
                <Outlet />
                <ScrollRestoration />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(
                            data.ENV
                        )}`,
                    }}
                />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
