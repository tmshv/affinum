import { useNavigate } from "@remix-run/react";
import useMapPointer from "~/hooks/map-pointer";
import { useMapClick, useMapLayerClick } from "~/hooks/map-click";

export default function useProjectClick(layerName: string) {
    const navigate = useNavigate()
    useMapPointer([layerName]);
    useMapClick(() => {
        navigate("/projects")
    })
    useMapLayerClick(layerName, event => {
        if (event.features!.length > 0) {
            const f = event.features![0]
            const href = f.properties!.href
            event.originalEvent.stopPropagation()
            navigate(href)
        }
    })
}

