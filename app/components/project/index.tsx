// import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import useMapPointer from "~/hooks/map-pointer";
import useMapClick from "~/hooks/map-click";

import styles from "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: styles },
];

// type Info = {
//     content: string,
// };

export type ProjectProps = {
    layerName: string
}

const Project: React.FC<ProjectProps> = ({ layerName }) => {
    // const [info, setInfo] = useState<Info | null>(null);
    const navigate = useNavigate()

    useMapPointer([layerName]);
    useMapClick(layerName, event => {
        if (event.features!.length > 0) {
            const f = event.features![0]
            const href = f.properties!.href

            navigate(href)

            // setInfo({
            //     content,
            // })
        }
    })

    return null;
    // if (!info) {
    //     return null;
    // }

    // return (
    //     <div
    //         style={{
    //             position: "absolute",
    //             top: 0,
    //             right: 0,
    //             zIndex: 100,
    //         }}
    //         className={"project-body"}
    //     >
    //         <iframe
    //             title={"project"}
    //             src="/projects/baimak"
    //         />
    //     </div>
    // );
}

export default Project

