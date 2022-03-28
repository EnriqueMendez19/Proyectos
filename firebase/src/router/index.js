import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AddProduct",
    name: "Add Product",
   
    component: () =>
      import("../components/ProductCreate.vue"),
  },
  {
    path: "/EditProduct/:id",
    name: "Edit Product",
    
    component: () =>
      import("../components/ProductEdit.vue"),
  },
  {
    path: "/ListProduct",
    name: "List Product",
    
    component: () =>
      import("../components/ProductList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
