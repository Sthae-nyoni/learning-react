import { Blog } from "./models";

let post_meta_data =
{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: ''
}

const delete_meta_data =
{
    method: 'DELETE'
}

function postData(url: string, post_event: React.FormEvent<HTMLFormElement>, data: Blog, redirectFunction: () => void)
{
    post_event.preventDefault();
    post_meta_data.body = JSON.stringify(data);
    fetch(url, post_meta_data)
        .then(() => redirectFunction());
}


function deleteData(url: string, redirectFunction: () => void)
{
    fetch(url, delete_meta_data)
        .then(() => redirectFunction());
}

export { postData, deleteData };