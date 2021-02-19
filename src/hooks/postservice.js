import { useHistory } from "react-router-dom";


let post_meta_data =
{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: null
}

function postData(url, post_event, data, history)
{
    post_event.preventDefault();
    post_meta_data.body = JSON.stringify(data);
    fetch(url, post_meta_data)
        .then(() => history.push('/'));
}

export default postData;