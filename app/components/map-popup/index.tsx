import { useEffect, useState } from "react";
import { Popup, useMap } from "react-map-gl";
import type { MapLayerMouseEvent } from "react-map-gl";
import useMapPointer from "~/hooks/map-pointer";

import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

type Info = {
    coord: GeoJSON.Position,
    location: string,
    year: number,
    name: string,
    caption: string,
    src: string,
};

export type MapPopupProps = {
    layerName: string
}

const MapPopup: React.FC<MapPopupProps> = ({ layerName }) => {
    const [info, setInfo] = useState<Info | null>(null);
    const { current } = useMap();

    useMapPointer([layerName]);

    useEffect(() => {
        if (!current) {
            return
        }
        const map = current.getMap();
        const show = async (event: MapLayerMouseEvent) => {
            if (event.features?.length === 0) {
                return
            }
            const feature = event.features![0]
            setInfo(null);
            if (!feature.properties) {
                return;
            }
            const geom = feature.geometry as GeoJSON.Point;
            setInfo({
                coord: geom.coordinates,
                name: feature.properties.name,
                year: feature.properties.year,
                location: feature.properties.location,
                caption: feature.properties.caption ?? "Концепция развития городского парка",
                src: feature.properties.src,
            });
        }
        const clear = () => {
            setInfo(null)
        }

        map.on("mouseover", layerName, show);
        map.on("mouseleave", layerName, clear);

        return () => {
            map.off("mouseover", layerName, show);
            map.off("mouseleave", layerName, clear);
        }
    }, [current, layerName]);

    if (!info) {
        return null;
    }

    return (
        <Popup
            longitude={info.coord[0]}
            latitude={info.coord[1]}
            anchor="bottom"
            onClose={() => setInfo(null)}
        >
            {!info.src ? null : (
                <img
                    className="cover"
                    src={info.src}
                    alt={"1"}
                    width={100}
                    height={100}
                />
            )}
            <div className="caption">
                <p className="text">{info.location}</p>
                    <p className="text">{info.name}, {info.year} год</p>
                <p className="text">{info.caption}</p>
            </div>
        </Popup>
    );
}

export default MapPopup

