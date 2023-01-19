import { useState } from "react";
import { LayerProps, Popup } from "react-map-gl";
import { Layer, Map as MapGl, Source } from "react-map-gl";
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

const countryLayerFill: LayerProps = {
    id: "country-fill",
    type: "fill",
    paint: {
        "fill-color": "#344a19",
        "fill-opacity": 0.05,
    },
    layout: {
    }
};

const countryLayer: LayerProps = {
    id: "country-line",
    type: "line",
    paint: {
        "line-color": "#82827d",
        "line-width": 2,
        "line-dasharray": [6, 3],
    },
    layout: {
        "line-cap": "square",
    }
};

const countryLayer2: LayerProps = {
    id: "country-line-2",
    type: "line",
    paint: {
        "line-color": "#d0cfcd",
        "line-width": 2,
        "line-dasharray": [6, 3],
        "line-offset": -2,
    },
    layout: {
        "line-cap": "square",
    }
};

export type MapProps = {
}

const Map: React.FC<MapProps> = () => {
    const mapboxAccessToken = (window as any).ENV.MAPBOX_ACCESS_KEY

    return (
        <MapGl
            // globe
            // initialViewState={{
            //     longitude: 82.73392878639856,
            //     latitude: 63.22686757599939,
            //     zoom: 3.5447911120175033,
            // }}
            // mercator
            initialViewState={{
                longitude: 96.73466789797476,
                latitude: 68.28074443801353,
                zoom: 2.012179390339392,
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={mapboxAccessToken}
            // projection={"globe"}
            onLoad={event => {
                // const map = event.target;
                // console.log(map.getStyle())
                // map.on("move", () => {
                //     console.log("coord", map.getCenter())
                //     console.log("zoom", map.getZoom())
                //     console.log("bearing", map.getBearing())
                //     console.log("pitch", map.getPitch())
                // })
            }}
        >
            <Source id="country" type="geojson" data="/russia.geojson">
                <Layer {...countryLayerFill} beforeId={"building"} />
                <Layer {...countryLayer} beforeId={"building"} />
                <Layer {...countryLayer2} beforeId={"building"} />
            </Source>
            <Source id="projects" type="geojson" data="/projects.geojson">
                <Layer {...layerStyleCircle} />
                <Layer {...layerStyleSymbol} />
            </Source>

            <MapPopup>
            </MapPopup>
        </MapGl>
    );
}

export default Map

