import { useParams } from "react-router-dom";
import useFetchService from "../../hooks/fetchservice";

function BlogDetailsPage()
{
    const { id } = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, pending, error_message } = useFetchService(url);

    return (

        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {error_message && <div>{error_message}</div>}
            {blog && <ArticleBody article_details={blog} />}
        </div>
    );
}


function ArticleBody({ article_details })
{
    return (
        <div>
            <h2>Title: {article_details.title}</h2>
            <p>Writen by: {article_details.author}</p>
            <p>{article_details.body}</p>
        </div>
    );
}


export default BlogDetailsPage;