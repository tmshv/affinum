import type { LayerProps } from "react-map-gl";
import { Layer, Source } from "react-map-gl";
import useHover from "~/hooks/use-hover";

const layer: LayerProps = {
    id: "russia-states-border",
    type: "fill",
    paint: {
        "fill-color": "#ffffff",
        "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.4,
            0.0
        ],
    },
};

export type MapLayerHoverableProps = {
}

const MapLayerHoverable: React.FC<MapLayerHoverableProps> = () => {
    useHover("russia-states","russia-states-border");

    return (
        <Source id="russia-states" type="geojson" data="/states.geojson">
            <Layer {...layer} />
        </Source>
    );
}

export default MapLayerHoverable

