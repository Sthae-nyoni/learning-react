import React from 'react';
import { Link } from 'react-router-dom'
import { Blog } from '../../util/models'

interface BlogPreviewProps
{
    blog: Blog;
}

function BlogPreview({ blog }: BlogPreviewProps)
{
    return (
        <div className="blog-preview">
            <Link to={`/blogs/${blog.id}`}>
                <h2>Title: {blog.title}</h2>
                <p>Written by: {blog.author}</p>
            </Link>
        </div>
    );
}

export default BlogPreview;

