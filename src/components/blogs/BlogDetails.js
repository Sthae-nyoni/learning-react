import { useParams } from "react-router-dom";

function BlogDetails()
{
    const { id } = useParams();
    return (
        <div>This is the blog details {id}</div>
    );
}

export default BlogDetails;