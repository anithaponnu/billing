import { type RouteConfig, index, route } from "@react-router/dev/routes";
//index("routes/home.jsx"),
//index("./login/loginv2.jsx"),
//index("./users/add1.jsx"),
export default [
    index("./users/add1.jsx"),
    route("login", "./login/login.jsx"),
] satisfies RouteConfig;
