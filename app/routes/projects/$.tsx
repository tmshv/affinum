import { json } from "@remix-run/node"
import type { LoaderFunction } from "@remix-run/node"
import { getMDXComponent } from "mdx-bundler/client"
import { useCallback, useContext, useMemo, useState } from "react"
import { getPost } from "~/lib/api"
import { useLoaderData, useMatches } from "@remix-run/react"
import Hero from "~/components/hero"
import AffinumLogo from "~/components/affinum-logo"
import Wide from "~/components/wide"
import { Float } from "~/components/float"

import styles from "~/styles/index.css"
import projectStyles from "~/styles/project.css"
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"
import { links as floatFinks } from "~/components/float"
import { links as flexLinks } from "~/components/flex"
import { links as productHeroLinks } from "~/components/productHero"
import { AppContext, Padding } from "~/context/AppContext"
import { MapProjectZoomer } from "~/components/map-project-zoomer"
import { useMedia } from "react-use"
import { Flex } from '~/components/flex'
import { ProductHero } from '~/components/productHero'
import { FlexItem } from '~/components/flex/item'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: projectStyles,
        },
        ...heroLinks(),
        ...wideLinks(),
        ...floatFinks(),
        ...flexLinks(),
        ...productHeroLinks(),
    ]
}

type LoaderData = {
    frontmatter: any
    code: string
}

export const loader: LoaderFunction = async ({ params, request }) => {
    const slug = params["*"]
    if (!slug) throw new Response("Not found", { status: 404 })

    const post = await getPost(slug)
    if (post) {
        const { frontmatter, code } = post
        return json({ frontmatter, code })
    } else {
        throw new Response("Not found", { status: 404 })
    }
}

const Paragraph: React.FC = (props: any) => {
    if (typeof props.children !== 'string' && props.children.type === 'img') {
        return <>{props.children}</>
    }

    return (
        <p {...props} />
    )
}

export default function Post() {
    const isMobile = useMedia("(max-width: 768px)", false)
    const { code } = useLoaderData<LoaderData>()
    const Component = useMemo(() => getMDXComponent(code), [code])
    const context = useContext(AppContext)
    const [padding, setPadding] = useState<Padding | null>(null)
    const changed = useCallback((width: number, absoluteWidth: number) => {
        const s = 10
        const right = s + absoluteWidth
        if (padding?.right === right) {
            return
        }
        setPadding({
            left: s,
            right,
            top: s,
            bottom: s,
        })
        context?.setSidePanelRatio(width)
    }, [padding, context])

    const matches = useMatches()
    const slug = matches[0].params["*"]

    const content = (
        <article>
            <Component components={{
                Hero,
                Wide,
                AffinumLogo,
                p: Paragraph,
                Flex,
                FlexItem,
                ProductHero,
            }} />
        </article>
    )

    return (
        <>
            {content}
        </>
    )

    if (isMobile) {
        return (
            <main style={{
                width: "100%",
                height: "100%",
                zIndex: 10,
                position: "absolute",
                overflow: "auto",
            }}>
                {content}
            </main>
        )
    }

    return (
        <>
            {!padding || !slug ? null : (
                <MapProjectZoomer
                    padding={padding}
                    slug={slug}
                />
            )}
            <Float
                value={context?.sidePanelRatio ?? 0.65}
                onChange={changed}
            >
                {content}
            </Float>
        </>
    )
}

