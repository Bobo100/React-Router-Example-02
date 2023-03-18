import { Link, useLocation } from "react-router-dom";
import { getPageTitle } from "../routes";
export const Home = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    return (
        <div>
            <h1>{pageTitle}</h1>

            <Link to="/about">About</Link>
            <Link to="/sdfsdiof">前往404頁面</Link>
            <a href="https://react-router-hazel.vercel.app/RouterDynamic">返回學習react-router</a>
        </div>
    );
};
