import React from 'react';
import useGetDataInitialRender from "../../hooks/FetchDataHook";
import BlogPreview from "../blog/BlogPreview";
import { Blog } from '../../util/models';

function Home()
{
    const url = "http://localhost:8000/blogs";
     const { data: blogs, pending, error_message } = useGetDataInitialRender<Blog[]>(url);

    return (
        <div className="home">
            <div className="blog-list">
                {error_message && <div>{error_message}</div>}
                {pending && <div>Loading...</div>}
                {blogs && blogs.map(blog => <BlogPreview blog={blog} key={blog.id} />)}
            </div>
        </div>
    );
}

export default Home;