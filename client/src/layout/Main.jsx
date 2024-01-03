import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="bg-sky-100">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;