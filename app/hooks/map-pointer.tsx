import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import { useMap } from "react-map-gl";

export default function useMapPointer(layerIds: string[]) {
    const { current } = useMap();

    useEffect(() => {
        const map = current?.getMap();
        if(!map) {
            return;
        }
        const over = async (event: mapboxgl.MapMouseEvent) => {
            const element = map.getCanvasContainer();
            element.style.cursor = "pointer";
        }
        const out = async (event: mapboxgl.MapMouseEvent) => {
            const element = map.getCanvasContainer();
            element.style.cursor = "default";
        }

        map.on("mouseover", layerIds, over);
        map.on("mouseout", layerIds, out);

        return () => {
            map.off("mouseover", over);
            map.off("mouseout", out);
        }
    }, [current]);
}

