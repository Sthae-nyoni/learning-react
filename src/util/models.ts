interface Blog
{
    author: string;
    title: string;
    body: string;
    id?: number;
}

interface ResponseData<T>
{
    data: T;
    pending: boolean;
    error_message: string;
}

export type { Blog, ResponseData };