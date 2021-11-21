import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Blog from "../views/Blog.vue";
import SingleCourse from "../views/SingleCourse.vue";
import SingleInstructor from "../views/SingleInstructor.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/single-course",
    name: "SingleCourse",
    component: SingleCourse,
  },
  {
    path: "/single-instructor",
    name: "SingleInstructor",
    component: SingleInstructor,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
