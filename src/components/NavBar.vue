<template>
  <nav class="bg-NavBg shadow-xl">
    <!-- <div class="container flex items-center pt-8 pb-6 relative"> -->
    <div class="grid grid-cols-3 gap-10 pt-8 pb-6">
      <div class="ml-28">
        <!-- <h1 class="text-3xl text-LabBtn2 font-bold">kloudlab</h1> -->
        <img
          src=".././assets/images/kloudlab.png"
          alt="logo"
          class="w-48 h-12 cursor-pointer"
          @click="navigateToHome"
        />
      </div>
      <div class="flex items-center justify-center gap-10">
        <div class="border-button py-2">
          <router-link
            :to="{ name: 'Home' }"
            class="text-NavOptions font-segoeUI text-xl py-2"
            active-class="navBorderBottom"
          >
            Home
          </router-link>
        </div>
        <div class="border-button py-2">
          <router-link
            :to="{ name: 'Courses' }"
            class="text-NavOptions font-segoeUI text-xl py-2"
            active-class="navBorderBottom"
          >
            Courses
          </router-link>
        </div>
        <div class="border-button py-2">
          <router-link
            :to="{ name: 'Gallery' }"
            class="text-NavOptions font-segoeUI text-xl py-2"
            active-class="navBorderBottom"
          >
            Gallery
          </router-link>
        </div>
        <div class="border-button py-2">
          <router-link
            :to="{ name: 'Contact' }"
            class="text-NavOptions font-segoeUI text-xl py-2"
            active-class="navBorderBottom"
          >
            Contact
          </router-link>
        </div>
      </div>
      <div class="flex items-center gap-6 absolute right-28">
        <div class="border-button py-2">
          <router-link
            :to="{ name: 'Signin' }"
            class="text-NavOptions font-segoeUI font-bold text-xl py-2"
            active-class="navBorderBottom 
            "
          >
            Sign in
          </router-link>
        </div>
        <!-- <button
          class="
            bg-gradient-to-bl
            from-blue-600
            via-blue-600
            to-blue-600
            transition-all
            duration-500
            hover:from-NavBtn1 hover:via-NavBtn2 hover:to-NavBtn3
            px-4
            py-2
            rounded-3xl
            text-white text-xl
            font-bold font-segoeUI
          "
        > -->
        <!-- <button
          class="
            userBtn
            text-white text-xl
            font-segoeUI font-bold
            px-4
            py-2
            rounded-3xl
          "
        >
          Be a User
        </button> -->
        <router-link
          :to="{ name: 'Signup' }"
          class="
            mx-auto
            text-white
            font-poppins
            text-xl text-light
            labBtn
            px-4
            py-3
            rounded-md
          "
        >
          Become a Member
        </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navBorderBottom {
  position: relative;
}

.navBorderBottom:after {
  content: "";
  background-image: linear-gradient(45deg, #0177ed, #004fa0);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  height: 3px;
  border-radius: 20%;
}

.border-button {
  background-repeat: no-repeat;

  background-size: calc(0% - 10px) 5px;

  background-position: 0px calc(105% - 0px);

  background-image: transparent;

  transition: all 0.3s linear;
  transition-property: background-size, background-position;
}

.border-button:hover {
  background-size: calc(85% - 10px) 5px;
  background-image: linear-gradient(45deg, #0177ed, #004fa0);
}

.userBtn {
  position: relative;
  background-color: #006cdc;
  z-index: 1;
}

.userBtn::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(45deg, #007eff, #006cdc, #0052a7);
  z-index: -1;
  transition: opacity 0.2s linear;
  opacity: 0;
  border-radius: 30px;
}

.userBtn:hover::before {
  opacity: 1;
}
</style>
