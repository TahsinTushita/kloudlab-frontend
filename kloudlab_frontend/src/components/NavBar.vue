<template>
  <nav class="bg-NavBg shadow-xl">
    <div
      class="
        container
        flex
        items-center
        justify-center
        px-12
        pt-8
        pb-6
        gap-10
        relative
      "
    >
      <div class="absolute left-10">
        <h1 class="text-3xl text-A2FF font-bold">kloudlab</h1>
      </div>
      <router-link :to="{ name: 'Home' }" class="text-NavOptions font-segoeUI">
        Home
      </router-link>
      <router-link
        :to="{ name: 'Courses' }"
        class="text-NavOptions font-segoeUI"
      >
        Courses
      </router-link>
      <router-link
        :to="{ name: 'Gallery' }"
        class="text-NavOptions font-segoeUI"
      >
        Gallery
      </router-link>
      <router-link
        :to="{ name: 'Contact' }"
        class="text-NavOptions font-segoeUI"
      >
        Contact
      </router-link>
      <a
        href="#"
        class="
          absolute
          right-0
          bg-gradient-to-r
          from-NavBtn1
          via-NavBtn2
          to-NavBtn3
          px-4
          py-2
          rounded-l-3xl rounded-r-3xl
          text-white
          font-bold font-segoeUI
        "
        >Be a User
      </a>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
/* @font-face {
  font-family: "Segoe UI";
  src: local("Segoe UI"), url(.././assets/fonts/Segoe_UI.ttf) format("truetype");
} */
</style>
