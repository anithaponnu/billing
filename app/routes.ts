import { type RouteConfig, index, route } from "@react-router/dev/routes";
//index("routes/home.jsx"),
//index("./login/loginv2.jsx"),
//index("./login/loginfinal.jsx"),
//index("./users/add1.jsx"),
export default [
    
    index("./login/tapbar.jsx"),
    route("login", "./login/login.jsx"),
] satisfies RouteConfig;
