import { useState } from "react";
import Blog from "../blogs/Blog";


function Home()
{
    const [blogs, setBlogs] = useState([
        { author: "mario", title: "Blog 1", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a.", id: 1 },
        { author: "luigi", title: "Blog 2", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a.", id: 2 },
        { author: "sonic", title: "Blog 3", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a.", id: 3 },
        { author: "shadow", title: "Blog 4", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a.", id: 4 },
    ]);


    function deleteBlog(id)
    {
        const new_blogs = blogs.filter(blog => blog.id !== id);
        setBlogs(new_blogs);
    }

    return (
        <div className="home">
            <div className="blog-list">
                {blogs.map(blog => <Blog blog={blog} key={blog.id} deleteBlog={deleteBlog} />)}
            </div>
        </div>
    );
}

export default Home;