import { Link } from 'react-router-dom'

function BlogPreview({ blog, deleteBlog })
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

