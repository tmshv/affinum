import { Outlet } from "@remix-run/react";
import AffinumOverlay from "~/components/affinum-overlay";
import { lazy, Suspense } from "react";
import ClientOnly from "~/components/client-only";

let Map = lazy(() => import("~/components/map"));

export default function Index() {
    return (
        <>
            <ClientOnly>
                <Suspense>
                    <Map />
                </Suspense>
            </ClientOnly>
            <AffinumOverlay/>

            <div style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "65%",
                height: "100%",
                overflow: "auto",
                background: "white",
            }}>
                <Outlet />
            </div>
        </>
    );
}

