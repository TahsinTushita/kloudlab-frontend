<template>
  <div class="h-screen bg-gradient-to-br from-white to-blue-200 px-28 py-20">
    <div class="flex items-center justify-between mb-10">
      <h1 class="text-6xl font-poppins font-semibold text-SignupHeading">
        Sign up
      </h1>
      <img
        src=".././assets/images/kloudlab.png"
        alt="logo"
        class="w-48 h-12 cursor-pointer"
        @click="navigateToHome"
      />
    </div>

    <div class="flex items-center justify-center">
      <div>
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
                  border-2 border-transparent
                  hover:border-SignupGoogleSigninBorder hover:ring-0
                  focus:outline-none focus:border-SignupGoogleSigninBorder
                  placeholder-SignupGoogleSignin
                "
                :placeholder="inputField.placeholder"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center mt-6">
          <div class="flex items-center ml-2">
            <input
              type="checkbox"
              id="terms_and_conditions"
              class="text-SignupHeading focus:ring-0 cursor-pointer"
            />
            <label
              for="terms_and_conditions"
              class="text-SignupHeading font-poppins font-semibold ml-3"
            >
              <div class="flex gap-1">
                I agree to the
                <div class="flex gap-1 cursor-pointer">
                  <p class="text-SignupBtn">Terms</p>
                  &
                  <p class="text-SignupBtn">Conditions</p>
                </div>
              </div>
            </label>
          </div>
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
            hover:text-SignupBtn hover:bg-transparent
          "
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFields: [
        {
          id: "name",
          label: "Name",
          placeholder: "User name",
          name: "name",
          type: "text",
        },
        {
          id: "email",
          label: "Email",
          placeholder: "Email",
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
