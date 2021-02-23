import React from 'react';
import { useState } from "react";
import { postData } from "../../util/http"
import { useHistory } from "react-router-dom";

const TITLE = 'Title';
const BODY = 'Body';


interface InputFieldProps
{
    description: string;
    variable: string;
    updateVariable: React.Dispatch<React.SetStateAction<string>>;
}

interface BlogAuthorProps
{
    author: string;
    setAuthor: React.Dispatch<React.SetStateAction<string>>;
}

function CreateBlogPage()
{
    const url = 'http://localhost:8000/blogs';
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('luigi');
    const blog = { title, author, body };
    const history = useHistory();

    const redirectFunction = () =>history.push('/');

    return (
        <div className="create-blog">
            <h2>Add a new blog below</h2>
            <form onSubmit={event => postData(url, event, blog, redirectFunction)} >
                <InputField description={TITLE} variable={title} updateVariable={setTitle} />
                <InputField description={BODY} variable={body} updateVariable={setBody} />
                <BlogAuthor author={author} setAuthor={setAuthor} />
                <button>Add Blog</button>
            </form>
        </div>
    );
}

function InputField({ description, variable, updateVariable }: InputFieldProps)
{
    return (
        <div>
            <label>{description}</label>
            {
                description === 'Title' ?
                    <input required value={variable} onChange={e => updateVariable(e.target.value)} /> :
                    <textarea required placeholder="Body" value={variable} onChange={e => updateVariable(e.target.value)} />
            }
        </div>
    );
}


function BlogAuthor({ author, setAuthor }: BlogAuthorProps)
{
    return (
        <div>
            <select value={author} onChange={e => setAuthor(e.target.value)} >
                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
            </select>
        </div>
    );
}


export default CreateBlogPage;