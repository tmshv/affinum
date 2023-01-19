import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import { Popup, useMap } from "react-map-gl";

import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

async function nextTick(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 0))
}

type Info = {
    coord: GeoJSON.Position,
    title: string,
    src: string,
};

export type MapPopupProps = {

}

const MapPopup: React.FC<MapPopupProps> = () => {
    const [info, setInfo] = useState<Info | null>(null);
    const { current } = useMap();

    useEffect(() => {
        if (!current) {
            return
        }
        const map = current.getMap();
        const cb = async (event: mapboxgl.MapMouseEvent) => {
            // const coord = event.lngLat
            const point = event.point

            const map = event.target;
            const fs = map.queryRenderedFeatures(point, {
                layers: ["project-circle"],
            })

            if (fs.length === 0) {
                console.log("click on nothing")
                setInfo(null);
                return
            }

            const feature = fs[0];
            const geom = feature.geometry as GeoJSON.Point;

            setInfo(null);
            await nextTick();
            setInfo({
                coord: geom.coordinates,
                title: feature.properties.name,
                src: "/p.png",
            });
        }

        map.on("click", cb);

        return () => {
            map.off("click", cb);
        }
    }, [current]);

    if (!info) {
        console.log("no popcoord")
        return null;
    }

    return (
        <Popup
            longitude={info.coord[0]}
            latitude={info.coord[1]}
            anchor="bottom"
            onClose={() => setInfo(null)}
        >
            <img className="cover" src={info.src} alt={"1"} width={100} height={100} />
            <div className="caption">
                {info.title}
            </div>
        </Popup>
    );
}

export default MapPopup

