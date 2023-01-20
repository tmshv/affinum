import { useEffect } from "react";
import { useMap } from "react-map-gl";

export default function useHover(source: string, layerId: string) {
    const { current } = useMap();

    useEffect(() => {
        const map = current?.getMap();
        if (!map) {
            return;
        }

        let hoveredStateId: string | number | null = null;

        const over = async (event: mapboxgl.MapLayerMouseEvent) => {
            if (event.features.length > 0) {
                if (hoveredStateId !== null) {
                    map.setFeatureState(
                        { source, id: hoveredStateId },
                        { hover: false }
                    );
                }
                hoveredStateId = event.features[0].id;
                map.setFeatureState(
                    { source, id: hoveredStateId },
                    { hover: true }
                );
            }
        }
        const out = async () => {
            if (hoveredStateId !== null) {
                map.setFeatureState(
                    { source, id: hoveredStateId },
                    { hover: false }
                );
            }
            hoveredStateId = null;
        }

        map.on("mousemove", layerId, over);
        map.on("mouseleave", layerId, out);

        return () => {
            map.off("mouseover", over);
            map.off("mouseout", out);
        }
    }, [current, source, layerId]);
}
