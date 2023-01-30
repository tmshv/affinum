import type { LayerProps } from "react-map-gl";
import { Layer, Map as MapGl, Source } from "react-map-gl";
import MapLayerHoverable from "./map-layer-hoverable";
import MapPopup from "./map-popup";

const layerStyleCircle: LayerProps = {
    id: "project-circle",
    type: "circle",
    paint: {
        "circle-radius": 8,
        "circle-color": "#111111",
    }
};

const layerStyleSymbol: LayerProps = {
    id: "project-id",
    type: "symbol",
    paint: {
        "text-color": "#ffffff",
    },
    layout: {
        "text-field": ["get", "id"],
        "text-size": 10,
        "text-allow-overlap": true,
    }
};

export type MapProps = {
}

const Map: React.FC<MapProps> = () => {
    const mapboxAccessToken = (window as any).ENV.MAPBOX_ACCESS_KEY

    return (
        <MapGl
            initialViewState={{
                longitude: 96.73466789797476,
                latitude: 68.28074443801353,
                zoom: 2.012179390339392,
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
            mapStyle="mapbox://styles/tmshv/cld4aqnw8000e01qwdzz15s6s"
            mapboxAccessToken={mapboxAccessToken}
            minZoom={1}
            maxBounds={[
                [8.414178767074475, 28.939372626536084],
                [196.44705902596996, 83.1613784193168],
            ]}
            projection={"mercator"}
        >
            <MapLayerHoverable />
            <Source id="projects" type="geojson" data="/projects.geojson">
                <Layer {...layerStyleCircle} />
                <Layer {...layerStyleSymbol} />
            </Source>
            <MapPopup />
        </MapGl>
    );
}

export default Map

