<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <NavBar
    :class="[
      currentRoute == Signup && currentRoute == Signin
        ? 'invisible'
        : 'visible',
    ]"
  />
</template>

<script>
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      Signup: "Signup",
      Signin: "Signin",
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
