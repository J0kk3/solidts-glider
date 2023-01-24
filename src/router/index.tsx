//solid
import { lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
//components
import Home from "../pages/Home";
const Login = lazy( () => import( "../pages/Login" ) );
const Register = lazy( () => import( "../pages/Register" ) );

const AppRoutes = () =>
{
    return (
        <Routes>
            <Route path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
        </Routes>
    );
};

export default AppRoutes;