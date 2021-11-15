<template>
  <nav class="bg-NavBg shadow-xl">
    <div
      class="
        container
        flex
        items-center
        justify-center
        pt-8
        pb-6
        gap-10
        relative
        mx-auto
      "
    >
      <div class="absolute left-10">
        <h1 class="text-3xl text-LabBtn2 font-bold">kloudlab</h1>
      </div>
      <router-link
        :to="{ name: 'Home' }"
        class="text-NavOptions font-segoeUI text-xl"
        active-class="navBorderBottom"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'Courses' }"
        class="text-NavOptions font-segoeUI text-xl"
        active-class="navBorderBottom"
      >
        Courses
      </router-link>
      <router-link
        :to="{ name: 'Gallery' }"
        class="text-NavOptions font-segoeUI text-xl"
        active-class="navBorderBottom"
      >
        Gallery
      </router-link>
      <router-link
        :to="{ name: 'Contact' }"
        class="text-NavOptions font-segoeUI text-xl"
        active-class="navBorderBottom"
      >
        Contact
      </router-link>
      <div class="flex absolute items-center right-0 gap-6">
        <router-link
          :to="{ name: 'Signin' }"
          class="text-NavOptions font-segoeUI font-bold text-xl"
          active-class="navBorderBottom"
        >
          Sign in
        </router-link>
        <a
          href="#"
          class="
            bg-gradient-to-b
            from-NavBtn1
            via-NavBtn2
            to-NavBtn3
            px-4
            py-2
            rounded-3xl
            text-white text-xl
            font-bold font-segoeUI
          "
          >Be a User
        </a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.navBorderBottom {
  position: relative;
}

.navBorderBottom:after {
  content: "";
  background-image: linear-gradient(to right, #0177ed, #004fa0);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 3px;
}
</style>
