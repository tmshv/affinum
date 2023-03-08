import { useEffect, useRef } from "react";
import bbox from "@turf/bbox";
import type { LngLatBoundsLike } from "mapbox-gl";

export default function useProjectBounds(href: string) {
    const data = useRef<Map<number, LngLatBoundsLike>>(new Map())
    useEffect(() => {
        const stop = new AbortController()
        fetch(href, {
            signal: stop.signal,
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("not ok")
                }
                return res.json()
            })
            .then((fc: GeoJSON.FeatureCollection) => {
                data.current = fc.features.reduce((acc, feature) => {
                    acc.set(feature.properties!.id, bbox(feature))
                    return acc
                }, new Map())
            })
            .catch(err => { })
        return () => {
            stop.abort()
        }
    }, [href])

    return (id: number) => data.current.get(id)
}

