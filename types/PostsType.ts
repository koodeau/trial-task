type PostsType = {
    data: {
        allGraphCmsPost: {
            nodes: Array<
                {
                    title: string,
                    slug: string,
                }
            >,
        },
    },
};

export default PostsType;




