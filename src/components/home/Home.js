import { useState, useEffect } from "react";
import Blog from "../blogs/Blog";


function Home()
{
    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => getBlogs(), []);

    function getBlogs()
    {
        setTimeout(() => fetch("http://localhost:8000/blogs")
            .then(response => response.json())
            .then(data => updateState(data)), 1000);
    }

    function updateState(data)
    {
        setBlogs(data);
        setPending(false);
    }

    function deleteBlog(id)
    {
        const new_blogs = blogs.filter(blog => blog.id !== id);
        setBlogs(new_blogs);
    }

    return (
        <div className="home">
            {pending && <div>Loading...</div>}
            <div className="blog-list">
                {blogs && blogs.map(blog => <Blog blog={blog} key={blog.id} deleteBlog={deleteBlog} />)}
            </div>
        </div>
    );
}

export default Home;