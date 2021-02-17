import { useState, useEffect } from "react";


function useFetchService(url)
{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error_message, setErrorMessage] = useState(null);

    useEffect(() => getBlogs(url), []);

    function getBlogs(url)
    {
        setTimeout(() => fetch(url)
            .then(response => process(response))
            .then(data => updateOkStatus(data))
            .catch(error => updateErrorStatus(error)), 1000);
    }


    function process(response)
    {
        if (!response.ok)
            throw Error("That endpoint does not exist");
        return response.json();
    }

    function updateErrorStatus(error)
    {
        setErrorMessage(error.message);
        setPending(false);
        setData(null);
    }

    function updateOkStatus(data)
    {
        setData(data);
        setPending(false);
        setErrorMessage(null);
    }

    return { data, pending, error_message }
}

export default useFetchService;