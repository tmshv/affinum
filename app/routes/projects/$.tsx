import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getPost } from "~/lib/api";
import { Link, useLoaderData } from "@remix-run/react";
import Hero from "~/components/hero"
import AffinumLogo from "~/components/affinum-logo";
import Wide from "~/components/wide";

import styles from "~/styles/index.css";
import projectStyles from "~/styles/project.css";
import { links as heroLinks } from "~/components/hero"
import { links as wideLinks } from "~/components/wide"

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
    const { code, frontmatter } = useLoaderData<LoaderData>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    const { title, location, cover, area, budget } = frontmatter

    return (
        <>
            {/* <Link to="/">← Back to blog index</Link> */}
            {/* <h1>{frontmatter.title}</h1> */}

            {/* <Hero */}
            {/*     title={title} */}
            {/*     location={location} */}
            {/*     src={cover} */}
            {/*     area={area} */}
            {/*     budget={budget} */}
            {/* > */}
            {/*     <p> */}
            {/*         Проект-победитель Всероссийского конкурса лучших проектов комфортной городской среды в малых городах и исторических поселениях. */}
            {/*     </p> */}
            {/*     <p> */}
            {/*         Реализация проекта даст Баймаку полноценную горо­дскую площадь. Парковка превратится в современное, разнообразное общественное пространство. На пло­щади появятся сцена и зеленые скверы с местами для */}
            {/*         отдыха. Памятник Алдар-Батыру и мемориал ВОВ будут */}
            {/*         благоустроены и включены в ансамбль площади. Авто­мобили займут места по периметру пространства вдоль проездов так, чтобы не мешать пешеходам. За зданием */}
            {/*         администрации будет разбит городской сад. */}
            {/*     </p> */}
            {/* </Hero> */}

            <article>
                <Component components={{
                    Hero,
                    Wide,
                    AffinumLogo,
                    p: Paragraph,
                }} />
            </article>
        </>
    );
}

