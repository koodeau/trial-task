import CategoryType from "./CategoryType";

type BlogType = {
    title: string,
    body: string,
    image: {
        url: string,
    },
    slug: string,
    publishedBy: {
        name: string,
    },
    createdAt: string,
    categories: Array<CategoryType>,
};

export default BlogType;
