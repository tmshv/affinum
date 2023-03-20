import { useCallback, useEffect, useRef, useState } from "react"

function clamp(value: number, min: number, max: number) {
    if (value < min) {
        return min
    }
    if (value > max) {
        return max
    }
    return value
}

export default function useResizeHandler(startWidth: number, minWidth: number, maxWidth: number) {
    const ref = useRef<HTMLDivElement>(null)
    const refx = useRef<number>(0)
    const [width, setWidth] = useState({
        width: startWidth,
        absoluteWidth: startWidth * window.innerWidth,
    })

    const up = useCallback(() => {
        refx.current = 0
    }, [])

    useEffect(() => {
        const down = (event: MouseEvent) => {
            event.preventDefault()
            refx.current = event.pageX
        }

        const move = (event: MouseEvent) => {
            if (!refx.current) {
                return
            }
            // take right part and translate to %
            const containerWidth = window.innerWidth;
            let x = event.pageX;
            let w = containerWidth - x;
            let r = w / containerWidth;
            const width = clamp(r, minWidth, maxWidth)
            setWidth({
                width,
                absoluteWidth: width * w,
            })
        }

        ref!.current!.addEventListener("mousedown", down)
        document.addEventListener("mouseup", up, true)
        document.addEventListener("mousemove", move, true)

        return () => {
            document.removeEventListener("mouseup", up, true)
            document.removeEventListener("mousemove", move, true)
        }
    }, [startWidth, minWidth, maxWidth, up])

    return {
        ref,
        width: width.width,
        absoluteWidth: width.absoluteWidth,
    }
}
