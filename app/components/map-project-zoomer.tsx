import { useCallback, useContext, useEffect, useRef } from "react";
import { useMapLayerClick } from "~/hooks/map-click";
import type { MapClickCallback } from "~/hooks/map-click";
import useProjectBounds from "~/hooks/use-project-bounds";
import { AppContext } from "~/context/AppContext";
import { useMap } from "react-map-gl";

async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function usePadding() {
    const context = useContext(AppContext)
    if (!context) {
        return null
    }
    return context.padding
}

export type MapProjectZoomerProps = {
    slug: string
    padding: {
        top: number
        left: number
        right: number
        bottom: number
    }
}

export const MapProjectZoomer: React.FC<MapProjectZoomerProps> = ({ padding, slug }) => {
    const context = useContext(AppContext)
    const { current } = useMap()
    const flag = useRef(false)

    useEffect(() => {
        flag.current = false
    }, [slug])

    useEffect(() => {
        if (flag.current) {
            return
        }

        if (!padding) {
            return
        }

        const map = current?.getMap()
        if (!map) {
            return
        }

        const bounds = context!.getProjectBounds(slug)
        if (!bounds) {
            return
        }

        map.fitBounds(bounds as mapboxgl.LngLatBoundsLike, {
            padding,
        })
        flag.current = true
    }, [padding, current, slug, context])

    return null
}

