import { links as popupStyles } from "~/components/map-popup";
import { links as projectStyles } from "~/components/project";

import AffinumOverlay from "~/components/affinum-overlay";
import { lazy, Suspense } from "react";
import ClientOnly from "~/components/client-only";

let Map = lazy(() => import("~/components/map"));

export function links() {
    return [
        ...popupStyles(),
        ...projectStyles(),
    ];
}

export default function MainMap() {
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

