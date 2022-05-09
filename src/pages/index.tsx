import * as React from "react";
import { graphql, Link } from "gatsby";
import routes from "../config/constants/routes";
import PostsType from "../../types/PostsType";


const MainPage = ({ data } : PostsType) => {
    const posts = data.allGraphCmsPost.nodes

    return (
    <main className="py-[70px] px-[40px] bg-stone-100 h-[100vh] w-full">
        <h1 className="md:text-3xl mb-[40px] font-bold text-2xl">Example blog site</h1>
        <div className="w-full mx-auto border-t-2 border-black pt-[20px]">
            <h2 className="md:text-3xl mb-[40px] font-bold text-xl">Posts:</h2>
            {
                posts.map((post, index) =>
                    <Link
                        key={index}
                        to={routes.BLOG + post.slug}
                        className="
                        block mb-[25px]
                        w-fit
                        last:mb-0
                        after:h-0.5
                        after:w-0
                        hover:after:w-full
                        after:block
                        after:bg-black
                        after:transition-[width]
                        after:duration-300
                        "
                    >
                        <span className="md:text-xl font-medium">
                            {post.title}
                        </span>
                    </Link>
                )}
        </div>
    </main>
    )
}

export const mainPageQuery = graphql`
    query AllPosts {
        allGraphCmsPost {
            nodes {
                title
                slug
            }
        }
    }
`

export default MainPage
