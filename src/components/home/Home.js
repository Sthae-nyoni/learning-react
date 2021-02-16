import { useState, useEffect } from "react";
import Blog from "../blogs/Blog";


function Home()
{
    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true);
    const [error_message, setErrorMessage] = useState(null);

    useEffect(() => getBlogs(), []);

    function getBlogs()
    {
        setTimeout(() => fetch("http://localhost:8000/blogs")
            .then(response => process(response))
            .then(data => updateOkStatus(data))
            .catch(error => updateErrorStatus(error)), 1000);
    }


    function process(response)
    {
        if (!response.ok)
            throw Error("That endpoint does not exist");
        return response.json();
    }

    function updateErrorStatus(error)
    {
        setErrorMessage(error.message);
        setPending(false);
        setBlogs(null);
    }

    function updateOkStatus(data)
    {
        setBlogs(data);
        setPending(false);
        setErrorMessage(null);
    }

    function deleteBlog(id)
    {
        const new_blogs = blogs.filter(blog => blog.id !== id);
        setBlogs(new_blogs);
    }

    return (
        <div className="home">
            <div className="blog-list">
                {error_message && <div>{error_message}</div>}
                {pending && <div>Loading...</div>}
                {blogs && blogs.map(blog => <Blog blog={blog} key={blog.id} deleteBlog={deleteBlog} />)}
            </div>
        </div>
    );
}

export default Home;