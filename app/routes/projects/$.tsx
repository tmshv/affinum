import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getPost } from "~/lib/api";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/hero"
import AffinumLogo from "~/components/affinum-logo";
import Wide from "~/components/wide";
import { Float } from "~/components/float";

import styles from "~/styles/index.css";
import projectStyles from "~/styles/project.css";
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"
import { links as floatFinks } from "~/components/float"

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
    ];
}

type LoaderData = {
    frontmatter: any;
    code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
    const slug = params["*"];
    if (!slug) throw new Response("Not found", { status: 404 });

    const post = await getPost(slug);
    if (post) {
        const { frontmatter, code } = post;
        return json({ frontmatter, code });
    } else {
        throw new Response("Not found", { status: 404 });
    }
};

const Paragraph: React.FC = (props: any) => {
    if (typeof props.children !== 'string' && props.children.type === 'img') {
        return <>{props.children}</>
    }

    return (
        <p {...props} />
    )
}

export default function Post() {
    const { code } = useLoaderData<LoaderData>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Float>
            <article>
                <Component components={{
                    Hero,
                    Wide,
                    AffinumLogo,
                    p: Paragraph,
                }} />
            </article>
        </Float>
    );
}

