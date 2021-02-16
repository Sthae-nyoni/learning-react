import { useState, useEffect } from "react";
import Blog from "../blogs/Blog";


function Home()
{
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => getBlogs(), []);

    function getBlogs()
    {
        fetch("http://localhost:8000/blogs")
            .then(response => response.json())
            .then(data => setBlogs(data));
    }

    function deleteBlog(id)
    {
        const new_blogs = blogs.filter(blog => blog.id !== id);
        setBlogs(new_blogs);
    }

    return (
        <div className="home">
            <div className="blog-list">
                {blogs && blogs.map(blog => <Blog blog={blog} key={blog.id} deleteBlog={deleteBlog} />)}
            </div>
        </div>
    );
}

export default Home;