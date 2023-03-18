import { Link, useLocation } from "react-router-dom";
import { getPageTitle } from "../routes";
export const About = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    return (
        <div>
            <h1>{pageTitle}</h1>

            <Link to="/">Home</Link>
        </div>
    );
};
