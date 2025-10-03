import { type RouteConfig, index, route } from "@react-router/dev/routes";
//index("routes/home.tsx"),

export default [
    index("./login/loginv2.tsx"),
    route("login", "./login/login.tsx"),
] satisfies RouteConfig;
