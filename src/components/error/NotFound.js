const { Link } = require("react-router-dom");

function NotFound()
{
    return (
        <div>
            <h1>Sorry That Page Does Not Exist!</h1>
            <Link to="/">home...</Link>
        </div>
    );
}

export default NotFound;