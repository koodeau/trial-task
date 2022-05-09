import React from 'react';
import BlogHeader from "../components/blocks/BlogHeader";
import BlogBody from "../components/blocks/BlogBody";
import BlogType from "../../types/BlogType";


function Blog({ pageContext }: { pageContext: { blogData: BlogType} }) {
    const { title, body, createdAt, publishedBy, image, categories }: BlogType = pageContext.blogData
    const { DateTime } = require('luxon')
    const creatingDate = DateTime.fromISO(createdAt).toFormat('LLL dd yyyy')

    return (
        <main>
            <BlogHeader categories={categories} title={title} imageSrc={image.url} />
            <BlogBody title={title} body={body} author={publishedBy.name} date={creatingDate} />
        </main>
    );
}

export default Blog;
