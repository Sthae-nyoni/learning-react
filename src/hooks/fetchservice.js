import { useState, useEffect } from "react";



function useFetchService(url)
{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error_message, setErrorMessage] = useState(null);

    useEffect(() => getBlogs(url, [setData, setPending, setErrorMessage]), []);

    return { data, pending, error_message }
}


function getBlogs(url, setters)
{
    setTimeout(() => fetch(url)
        .then(response => process(response))
        .then(data => updateOkStatus(data, setters))
        .catch(error => updateErrorStatus(error, setters)), 1000);
}


function process(response)
{
    if (!response.ok)
        throw Error("That endpoint does not exist");
    return response.json();
}

function updateErrorStatus(error, [setData, setPending, setErrorMessage])
{
    setErrorMessage(error.message);
    setPending(false);
    setData(null);
}

function updateOkStatus(data,[setData, setPending, setErrorMessage])
{
    setData(data);
    setPending(false);
    setErrorMessage(null);
}

export default useFetchService;