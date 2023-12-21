import parseFrontMatter from "front-matter"
import { readFile, readdir } from "./fs.server"
import path from "path"
import { bundleMDX } from "./mdx.server"
// import haskell from "highlight.js/lib/languages/haskell";

export type Post = {
    slug: string
    title: string
}

export type PostMarkdownAttributes = {
    title: string
}

export async function getPost(slug: string) {
    const source = await readFile(
        path.join(`${__dirname}/../posts/`, slug + ".mdx"),
        "utf-8"
    )
    // const rehypeHighlight = await import("rehype-highlight").then(
    //     (mod) => mod.default
    // );
    // const { default: remarkGfm } = await import("remark-gfm");
    // const { default: rehypeAutolinkHeadings } = await import(
    //     "rehype-autolink-headings"
    // );

    // const { default: rehypeToc } = await import("rehype-toc");
    // const { default: rehypeSlug } = await import("rehype-slug");

    const post = await bundleMDX({
        source,
        mdxOptions(options, frontmatter) {
            // options.remarkPlugins = [
            //     ...(options.remarkPlugins ?? []),
            //     // remarkMdxImages,
            //     remarkGfm,
            //     // remarkBreaks,
            //     // [remarkFootnotes, { inlineNotes: true }],
            // ];
            // options.rehypePlugins = [
            //     ...(options.rehypePlugins ?? []),
            //     rehypeAutolinkHeadings,
            //     rehypeSlug,
            //     rehypeToc,
            //     [
            //         rehypeHighlight,
            //         { format: "detect", ignoreMissing: true, languages: { haskell } },
            //     ],
            // ];

            return options
        },
    }).catch((e) => {
        console.error(e)
        throw e
    })

    return post
}

export async function getProjects() {
    const files = await readdir(
        path.join(`${__dirname}/../posts/projects`),
        "utf-8",
    )
    const posts = await Promise.all(files.map(async (name) => {
        const source = await readFile(
            path.join(`${__dirname}/../posts/projects/`, name),
            "utf-8"
        )

        const data = await bundleMDX({
            source,
            mdxOptions(options, frontmatter) {
                return options
            },
        }).catch((e) => {
            console.error(e)
            throw e
        })
        return data
    }))

    return posts
}

export async function getPosts() {
    const postsPath = await fs.readdir(`${__dirname}/../../posts`, {
        withFileTypes: true,
    })

    const posts = await Promise.all(
        postsPath.map(async (dirent) => {
            const file = await readFile(
                path.join(`${__dirname}/../../posts`, dirent.name)
            )
            const { attributes } = parseFrontMatter(file.toString())
            return {
                slug: dirent.name.replace(/\.mdx/, ""),
                //@ts-ignore
                title: attributes.title,
            }
        })
    )
    return posts
}

