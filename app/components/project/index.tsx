import { useNavigate } from "@remix-run/react";
import useMapPointer from "~/hooks/map-pointer";
import { useMapClick, useMapLayerClick } from "~/hooks/map-click";

export const links = () => [
];

export type ProjectProps = {
    layerName: string
}

const Project: React.FC<ProjectProps> = ({ layerName }) => {
    const navigate = useNavigate()
    useMapPointer([layerName]);
    useMapClick(() => {
        navigate("/")
    })
    useMapLayerClick(layerName, event => {
        if (event.features!.length > 0) {
            const f = event.features![0]
            const href = f.properties!.href
            event.originalEvent.stopPropagation()
            navigate(href)
        }
    })

    return null;
}

export default Project

