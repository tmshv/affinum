import type { LayerProps } from "react-map-gl";
import { Layer, Map as MapGl, Source } from "react-map-gl";

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
                longitude: 82.73392878639856,
                latitude: 63.22686757599939,
                zoom: 3.5447911120175033,
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={mapboxAccessToken}
            projection={"globe"}
            onLoad={event => {
                // const map = event.target;
                // console.log(map.getStyle())
                //     map.on("move", () => {
                //         console.log("coord", map.getCenter())
                //         console.log("zoom", map.getZoom())
                //         console.log("bearing", map.getBearing())
                //         console.log("pitch", map.getPitch())
                //     })
            }}
        >

            <Source id="projects" type="geojson" data="/projects.geojson">
                <Layer {...layerStyleCircle} />
                <Layer {...layerStyleSymbol} />
            </Source>
        </MapGl>
    );
}

export default Map

