import { useParams, useHistory } from "react-router-dom";
import useFetchOnInitialRender from "../../hooks/FetchDataHook";
import { deleteData } from "../../util/http"

function BlogDetailsPage()
{
    const { id } = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, pending, error_message } = useFetchOnInitialRender(url);
    const history = useHistory();

    return (
        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {error_message && <div>{error_message}</div>}
            {
                blog &&
                <div>
                    <ArticleBody article_details={blog} />
                    <button onClick={() => deleteData(url, history)}>delete</button>
                </div>
            }
        </div>
    );
}


function ArticleBody({ article_details })
{
    return (
        <div>
            <h2>Title: {article_details.title}</h2>
            <p>Writen by: {article_details.author}</p>
            <div>{article_details.body}</div>
        </div>
    );
}


export default BlogDetailsPage;