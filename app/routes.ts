import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "./login/login.tsx"),
    route("loginv2", "./login/loginv2.tsx"),
] satisfies RouteConfig;
