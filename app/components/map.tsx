import type { LayerProps, LngLatBoundsLike } from "react-map-gl";
import { Layer, Map as MapGl, Source } from "react-map-gl";
import MapLayerHoverable from "./map-layer-hoverable";
import MapPopup from "./map-popup";

const layerStyleCircle: LayerProps = {
    id: "project-circle",
    type: "circle",
    paint: {
        "circle-radius": 5,
        "circle-color": "#111111",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#eeeeee",
    }
};

const layerStyleSymbol: LayerProps = {
    id: "project-id",
    type: "symbol",
    paint: {
        "text-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 4,
        "text-translate": [10, 0],
    },
    layout: {
        "text-field": ["get", "city"],
        "text-size": 10,
        "text-anchor": "left",
    },
};

const maxBounds: LngLatBoundsLike = [
    [8.414178767074475, 28.939372626536084],
    [196.44705902596996, 83.1613784193168],
]

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
            maxBounds={maxBounds}
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

