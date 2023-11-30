import { Children } from 'react'
import styles from "./styles.css"
import Masonry from 'react-masonry-css'

export const links = () => [
    { rel: "stylesheet", href: styles },
]

export type LadderGalleryProps = {
    children: React.ReactNode
}

const LadderGallery: React.FC<LadderGalleryProps> = ({ children }) => {
    return (
        <section>
            <Masonry
                breakpointCols={2}
                className="ladder-gallery"
                columnClassName="ladder-gallery-col"
            >
                {children}
            </Masonry>
        </section>
    )
}

export default LadderGallery

