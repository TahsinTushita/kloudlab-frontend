<template>
  <div class="grid grid-rows-1 bg-FooterBg py-28 px-28 gap-16">
    <div
      class="
        grid grid-cols-4
        gap-10
        text-white text-3xl
        font-poppins font-medium
      "
    >
      <div class="space-y-5">
        <h3 class="cursor-pointer">About</h3>
        <h3 class="cursor-pointer">Courses</h3>
        <h3 class="cursor-pointer">Gallery</h3>
        <h3 class="cursor-pointer">Contact</h3>
      </div>
      <div class="space-y-5">
        <h3 class="cursor-pointer">Documentation</h3>
        <h3 @click="navigateToBlog" class="cursor-pointer">Blogs</h3>
        <h3 class="cursor-pointer">Series</h3>
        <h3 class="cursor-pointer">Did you know</h3>
      </div>
      <div class="space-y-5">
        <h3 class="cursor-pointer">Privacy policy</h3>
        <h3 class="cursor-pointer">Terms & Conditions</h3>
        <h3 class="cursor-pointer">Community</h3>
      </div>
    </div>

    <div class="flex items-end">
      <button
        class="
          mx-auto
          text-white
          font-poppins
          text-4xl text-light
          labBtn
          px-10
          py-2
          rounded-md
          ml-0
        "
      >
        Lab
      </button>
      <div class="grid grid-rows-1 place-items-end gap-5">
        <h3
          class="font-poppins font-semibold text-2xl text-FooterNewsletter mr-5"
        >
          Newsletter
        </h3>
        <div class="flex relative items-center">
          <input
            name="email"
            class="
              bg-white
              rounded-full
              text-SignupGoogleSignin
              font-poppins
              px-8
              py-4
              flex
              justify-center
              w-500
              border-2 border-transparent
              hover:border-SignupGoogleSigninBorder hover:ring-0
              focus:outline-none focus:border-SignupGoogleSigninBorder
              placeholder-SignupGoogleSignin
              relative
              z-0
            "
            placeholder="User email"
          />
          <button
            class="
              absolute
              z-10
              right-0
              text-white
              font-poppins
              text-3xl
              font-light
              bg-blue-500
              hover:bg-blue-600
              px-6
              py-3
              rounded-full
              transition
              duration-500
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-end justify-between">
      <div class="space-y-3">
        <h3 class="font-poppins font-semibold text-3xl text-FooterNewsletter">
          Social Media
        </h3>
        <div class="grid grid-cols-3">
          <img
            src=".././assets/images/facebook.png"
            alt="facebook"
            class="w-10 h-10"
          />
          <img
            src=".././assets/images/instagram.png"
            alt="instagram"
            class="w-10 h-10"
          />
          <img
            src=".././assets/images/linkedin.png"
            alt="linkedin"
            class="w-10 h-10"
          />
        </div>
      </div>
      <img
        src=".././assets/images/kloudlab.png"
        alt="logo"
        class="w-48 h-12 cursor-pointer"
        @click="navigateToHome"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToBlog() {
      this.$router.push("/blog");
    },

    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.subscribeBtn {
  position: relative;
  background-color: #1e88e5;
  z-index: 1;
}

.subscribeBtn::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(45deg, #0077ff, #00a2ff);
  z-index: -1;
  transition: opacity 0.2s linear;
  opacity: 0;
  border-radius: 30px;
}

.subscribeBtn:hover::before {
  opacity: 1;
}
</style>
