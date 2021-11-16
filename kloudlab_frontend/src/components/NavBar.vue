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
      <div class="space-y-1">
        <router-link
          :to="{ name: 'Home' }"
          class="text-NavOptions font-segoeUI text-xl"
          active-class="navBorderBottom"
        >
          Home
        </router-link>
        <div class="navBorderBottom"></div>
      </div>
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
        <button
          class="
            bg-gradient-to-bl
            from-blue-600
            via-blue-600
            to-blue-600
            hover:from-NavBtn1 hover:via-NavBtn2
            from-NavBtn3
            px-4
            py-2
            rounded-3xl
            text-white text-xl
            font-bold font-segoeUI
            transition
          "
        >
          Be a User
        </button>
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
  border-radius: 20%;
}

.userBtnBg {
  background-image: linear-gradient(to right, #0177ed, #004fa0);
}
</style>
