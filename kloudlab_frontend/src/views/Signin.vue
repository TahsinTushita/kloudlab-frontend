<template>
  <div class="grid grid-cols-2 h-screen">
    <!-- <div class="bg-gradient-to-br from-white to-blue-200 "> -->
    <div class="flex items-center justify-center">
      <div>
        <h1
          class="text-6xl font-poppins font-semibold text-SignupHeading mb-16"
        >
          Login
        </h1>
        <button
          class="
            bg-white
            rounded-4xl
            text-SignupGoogleSignin
            font-poppins
            px-8
            py-4
            flex
            items-center
            justify-center
            w-96
            border-2 border-SignupGoogleSigninBorder
            hover:border-SignupHeading
          "
        >
          <img
            src=".././assets/images/google_logo.png"
            alt="google"
            class="w-5 h-5 mr-2"
          />
          sign in with google
        </button>
        <div class="flex items-center justify-center mt-6 mb-6">
          <div class="w-1/4 border-b-2 border-SignupGoogleSignin"></div>
          <div
            class="
              text-SignupGoogleSignin
              px-3
              z-10
              relative
              font-poppins font-light
            "
          >
            or Sign in with email
          </div>
          <div class="w-1/4 border-b-2 border-SignupGoogleSignin"></div>
        </div>
        <div class="space-y-3">
          <div v-for="inputField in inputFields" :key="inputField.id">
            <div class="space-y-2">
              <label
                for="inputField.name"
                class="text-SignupHeading font-poppins font-semibold ml-2"
                >{{ inputField.label }}*</label
              >
              <input
                name="inputField.name"
                class="
                  bg-white
                  rounded-4xl
                  text-SignupGoogleSignin
                  font-poppins
                  px-8
                  py-4
                  flex
                  justify-center
                  w-96
                  border-2 border-SignupGoogleSignin
                  hover:border-SignupGoogleSigninBorder hover:ring-0
                  focus:outline-none focus:border-SignupGoogleSigninBorder
                  placeholder-SignupGoogleSignin
                "
                :placeholder="inputField.placeholder"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-6">
          <div class="flex items-center ml-2">
            <input
              type="checkbox"
              id="remember_me"
              class="text-SignupHeading focus:ring-0 cursor-pointer"
            />
            <label
              for="remember_me"
              class="text-SignupHeading font-poppins font-semibold ml-3"
            >
              <div class="flex justify-between">
                <p>Remember me</p>
              </div>
            </label>
          </div>
          <a class="text-SignupBtn cursor-pointer font-poppins font-semibold"
            >Forget Password</a
          >
        </div>
        <button
          class="
            bg-SignupBtn
            rounded-4xl
            text-white
            font-poppins font-semibold
            text-3xl
            px-8
            py-2
            w-96
            mt-10
            border-2 border-SignupBtn
            shadow-xl
            hover:text-SignupBtn hover:bg-transparent
            transition
            duration-300
          "
        >
          Login
        </button>
        <div class="flex justify-center">
          <img
            src=".././assets/images/kloudlab.png"
            alt="logo"
            class="w-48 h-12 cursor-pointer mt-10"
            @click="navigateToHome"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div class="bg-gradient-to-br from-blue-200 to-blue-800 px-28 py-20"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFields: [
        {
          id: "email",
          label: "Email",
          placeholder: "User email",
          name: "email",
          type: "email",
        },
        {
          id: "password",
          label: "Password",
          placeholder: "Password",
          name: "password",
          type: "password",
        },
      ],
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.signupBg {
  background-image: linear-gradient(145deg, #a0d6fb, #7ab8ff, #5ff2fa);
}
</style>
