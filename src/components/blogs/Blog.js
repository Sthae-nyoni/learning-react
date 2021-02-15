function Blog({ blog, deleteBlog })
{
    return (
        <div className="blog-preview">
            <h2>Title: {blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <button onClick={() => deleteBlog(blog.id)}>delete</button>
        </div>
    );
}

export default Blog;

