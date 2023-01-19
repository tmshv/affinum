import { Map as MapGl } from "react-map-gl";

export type MapProps = {
}

const Map: React.FC<MapProps> = () => {
    const mapboxAccessToken=(window as any).ENV.MAPBOX_ACCESS_KEY

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
        // onLoad={event => {
        //     const map = event.target;
        //     map.on("move", () => {
        //         console.log("coord", map.getCenter())
        //         console.log("zoom", map.getZoom())
        //         console.log("bearing", map.getBearing())
        //         console.log("pitch", map.getPitch())
        //     })
        // }}
        />
    );
}

export default Map

