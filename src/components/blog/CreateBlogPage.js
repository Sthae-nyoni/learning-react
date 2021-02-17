import { useState } from "react";

const TITLE = 'Title';
const BODY = 'Body';

function CreateBlogPage()
{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('luigi');

    return (
        <div className="create-blog">
            <h2>Add a new blog below</h2>
            <form >
                <InputField description={TITLE} variable={title} updateInput={setTitle} />
                <InputField description={BODY} variable={body} updateInput={setBody} />
                <BlogAuthor author={author} setAuthor={setAuthor} />
                <button>Add Blog</button>
            </form>
        </div>
    );
}

function InputField({ description, variable, updateInput })
{
    return (
        <div>
            <label>{description}</label>
            {
                description === 'Title' ?
                    <input required value={variable} onChange={e => updateInput(e.target.value)} /> :
                    <textarea placeholder="Body" value={variable} onChange={e => updateInput(e.target.value)} />
            }
        </div>
    );
}


function BlogAuthor({ author, setAuthor })
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