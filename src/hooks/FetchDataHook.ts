import { useEffect, useState } from "react";
import { ResponseData } from "../util/models";


function useGetDataOnInitialRender<T>(url: string): ResponseData<T | null>
{
    const [data, setData] = useState<T | null>(null);
    const [pending, setPending] = useState(true);
    const [error_message, setErrorMessage] = useState<string>('');

    const setters = [setData, setPending, setErrorMessage];

    useEffect(() => getData(url, setters), []);

    return { data, pending, error_message }
}


function getData<T>(url: string, setters: React.Dispatch<React.SetStateAction<any>>[])
{
    const abort_controller = new AbortController();
    setTimeout(() => fetch(url, { signal: abort_controller.signal })
        .then(response => process<T>(response))
        .then(data => updateOkStatus(data, setters))
        .catch(error => updateErrorStatus(error, setters)), 800);

    /*
    * We return this function as a clean up method that will be called
    * when this process is interupted or disturbed. This helps stop all 
    * process which would update state and the try to apply those changeson
    * a component that is otherwise maybe dismounted. So generally as a rule
    * of thumb when you use the useEffect method in any way shape or form make
    * sure to return some form of clean incase bad stuff happens.
    */
    return () => abort_controller.abort();
}


function process<T>(response: Response): Promise<T>
{
    if (!response.ok)
        throw Error("That endpoint does not exist");
    return response.json();
}

function updateErrorStatus(error: Error, [setData, setPending, setErrorMessage]: React.Dispatch<React.SetStateAction<any>>[])
{
    if (error.name === 'AbortError')
        return;
    setErrorMessage(error.message);
    setPending(false);
    setData(null);
}

function updateOkStatus<T>(data: T, [setData, setPending, setErrorMessage]: React.Dispatch<React.SetStateAction<any>>[])
{
    setData(data);
    setPending(false);
    setErrorMessage(null);
}

export default useGetDataOnInitialRender;