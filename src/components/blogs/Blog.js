function Blog({ blog })
{
    return (
        <div className="blog-preview">
            <h2>Title: {blog.title}</h2>
            <p>Written by: {blog.author}</p>
        </div>
    );
}

export default Blog;

