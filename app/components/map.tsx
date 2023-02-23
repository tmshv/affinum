import type { LayerProps, LngLatBoundsLike } from "react-map-gl";
import { Layer, Map as MapGl, Source } from "react-map-gl";
import MapLayerHoverable from "./map-layer-hoverable";
import MapPopup from "./map-popup";
import Project from "./project";

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
    id: "place-name",
    type: "symbol",
    paint: {
        "text-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 4,
        "text-translate": [10, 0],
    },
    layout: {
        "text-field": ["get", "name"],
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
                longitude: 96.734667,
                latitude: 68.280744,
                zoom: 2.012179,
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
            </Source>
            <Source id="places" type="geojson" data="/places.geojson">
                <Layer {...layerStyleSymbol} />
            </Source>
            <MapPopup
                layerName={"project-circle"}
            />
            <Project
                layerName={"project-circle"}
            />
        </MapGl>
    );
}

export default Map

