import { Flex } from '~/components/flex'
import flexStyles from "~/components/flex/styles.css"
import gridStyles from "~/components/grid/styles.css"
import { Grid } from '~/components/grid'
import projectStyles from "~/styles/project.css"

export function links() {
    return [
        {
            rel: "stylesheet",
            href: projectStyles,
        },
        {
            rel: "stylesheet",
            href: flexStyles,
        },
        {
            rel: "stylesheet",
            href: gridStyles,
        },
    ]
}

export default function About() {
    return (
        <article>
            <Flex
                left={(<>
                    <h1>Заголовок нахрен</h1>
                    <p>
                        paragraph text
                        We don’t have to make any modifications here to create our custom routes; we can create a new file for that. To access the controller we just created from the API, we need to attach it to a route.
                        Create a new file to contain our custom route definitions in the order/routes directory - ./src/api/order/routes/confirm-order.js
                        We’re creating an object with a routes key, which has a value of an array of route objects.
                        The first object here defines a route with the method of POST and a path - /orders/confirm/:id, where the /:id is a dynamic URL parameter and is going to change based on the id of the order we’re trying to confirm.
                        It also defines the handler, which is the controller that will be used in the route and in our case, that would be the confirmOrder controller we created
                    </p>
                </>)}
                right={<img src='/assets/biro-hero.jpg' />}
            />
            <h1>header 1 example</h1>
            <h2>header 2 example</h2>
            <Grid>
                <img src='/assets/biro-hero.jpg' />
                <img src='/assets/miass-hero.jpg' />
                <img src='/assets/satka-hero.jpg' />

                <img src='/assets/satka-hero.jpg' />
                <img src='/assets/biro-hero.jpg' />
                <img src='/assets/miass-hero.jpg' />
            </Grid>
        </article>
    )
}
