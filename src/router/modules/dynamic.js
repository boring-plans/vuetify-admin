export default [
  {
    name: "动态路由示例",
    path: "/dynamic-route-demo",
    component: () => import("@/views/dynamic-route/DynamicRouteDemo.vue"),
  },
  {
    name: "动态路由示例",
    path: "/dynamic-route-demo/:id",
    component: () => import("@/views/dynamic-route/DynamicRouteDemo.vue"),
  },
];
