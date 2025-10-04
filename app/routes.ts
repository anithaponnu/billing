import { type RouteConfig, index, route } from "@react-router/dev/routes";
//index("routes/home.tsx"),
//index("./login/loginv2.tsx"),
//index("./users/add1.tsx"),
export default [
    index("./users/add1.tsx"),
    route("login", "./login/login.tsx"),
] satisfies RouteConfig;
