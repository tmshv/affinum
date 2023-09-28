import { json } from "@remix-run/node"
import type { MetaFunction } from "@remix-run/node"
import styles from "~/styles/index.css"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react"
import YandexMetrika from "./components/yandex-metrika"
import Layout from './components/layout'


import { links as layoutLinks } from "~/components/layout"

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Affinum Map",
    viewport: "width=device-width,initial-scale=1",
})

export async function loader() {
    return json({
        ENV: {
            MAPBOX_ACCESS_KEY: process.env.MAPBOX_ACCESS_KEY,
        },
    })
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        ...layoutLinks(),
    ]
}

export default function App() {
    const data = useLoaderData<typeof loader>()

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />

                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <Layout>
                    <Outlet />
                </Layout>
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
    )
}
