import { useState, useEffect } from "react";

function useFetchOnInitialRender(url)
{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error_message, setErrorMessage] = useState(null);

    useEffect(() => getBlogs(url, [setData, setPending, setErrorMessage]), []);

    return { data, pending, error_message }
}


function getBlogs(url, setters)
{
    const abort_controller = new AbortController();

    setTimeout(() => fetch(url, { signal: abort_controller.signal })
        .then(response => process(response))
        .then(data => updateOkStatus(data, setters))
        .catch(error => updateErrorStatus(error, setters)), 800);

    return () => abort_controller.abort();//clean up ...
}


function process(response)
{
    if (!response.ok)
        throw Error("That endpoint does not exist");
    return response.json();
}

function updateErrorStatus(error, [setData, setPending, setErrorMessage])
{
    if (error.name === 'AbortError')
        return;
        
    setErrorMessage(error.message);
    setPending(false);
    setData(null);
}

function updateOkStatus(data, [setData, setPending, setErrorMessage])
{
    setData(data);
    setPending(false);
    setErrorMessage(null);
}

export default useFetchOnInitialRender;