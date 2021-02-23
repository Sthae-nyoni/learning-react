import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import useGetDataOnInitialRender from "../../hooks/FetchDataHook";
import { deleteData } from "../../util/http"
import type { Blog } from '../../util/models';

interface Url
{
    id?: string;
}

interface ArticleBodyProps
{
    article_details: Blog;
}

function BlogDetailsPage()
{
    const { id } = useParams<Url>();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, pending, error_message } = useGetDataOnInitialRender<Blog>(url);
    const history = useHistory();

    const redirectFunction = () => history.push('/');

    return (
        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {error_message && <div>{error_message}</div>}
            {
                blog &&
                <div>
                    <ArticleBody article_details={blog} />
                    <button onClick={() => deleteData(url, redirectFunction)}>delete</button>
                </div>
            }
        </div>
    );
}


function ArticleBody({ article_details }: ArticleBodyProps)
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