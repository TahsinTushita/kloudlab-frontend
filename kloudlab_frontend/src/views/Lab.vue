<template>
  <div class="px-28 py-28">
    <h1 class="text-HomeTutorialh1 font-poppins text-6xl font-semibold mb-20">
      Lab
    </h1>

    <div class="grid grid-rows-1 gap-5 w-full mb-10">
      <div
        class="h-16 shadow-xl px-4 py-2 rounded-lg border-2 w-3/5"
        v-if="gigPopup"
      >
        <div
          class="grid grid-cols-10 text-LabPopup text-2xl place-items-center"
        >
          <i class="fas fa-exclamation-circle col-span-1"></i>
          <p class="col-span-5">Create a new gig</p>

          <button
            class="
              text-LabPopup
              border-2 border-LabPopup
              hover:bg-blue-500 hover:text-white hover:transparent
              transition
              duration-200
              px-4
              w-40
              h-10
              rounded-full
              text-lg
              col-span-3
            "
          >
            Create New
          </button>
          <i
            class="fas fa-times-circle col-span-1 cursor-pointer"
            @click="toggleGigPopup"
          ></i>
        </div>
      </div>
      <div
        class="h-16 shadow-xl px-4 py-2 rounded-lg border-2 w-3/5 mb-5"
        v-if="enrollPopup"
      >
        <div
          class="grid grid-cols-10 text-LabPopup text-2xl place-items-center"
        >
          <i class="fas fa-exclamation-circle col-span-1"></i>
          <p class="col-span-5">Get access of all videos</p>

          <button
            class="
              text-white
              px-4
              w-40
              h-10
              rounded-full
              text-lg
              col-span-3
              text-LabPopup
              border-2 border-LabPopup
              hover:bg-blue-500 hover:text-white hover:transparent
              transition
              duration-200
            "
          >
            Enroll now
          </button>
          <i
            class="fas fa-times-circle col-span-1 cursor-pointer"
            @click="toggleEnrollPopup"
          ></i>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-10">
      <div class="col-span-1 h-650 rounded-lg py-20 shadow-2xl">
        <div class="grid grid-rows-1">
          <div v-for="labOption in labOptions" :key="labOption.id">
            <button
              class="
                hover:bg-HomeTutorialh1 hover:text-white
                focus:bg-HomeTutorialh1 focus:text-white
                font-poppins font-semibold
                text-4xl
                px-2
                py-10
                w-full
                text-HomeTutorialh1
                transition-all
                duration-200
              "
            >
              {{ labOption.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-4 h-650 bg-SingleCourseShortDesc rounded-lg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gigPopup: true,
      enrollPopup: true,
      labOptions: [
        { id: 1, name: "Linux" },
        { id: 2, name: "DevOps" },
        { id: 3, name: "AWS" },
        { id: 4, name: "Python" },
      ],
    };
  },

  methods: {
    toggleGigPopup() {
      this.gigPopup = !this.gigPopup;
    },

    toggleEnrollPopup() {
      this.enrollPopup = !this.enrollPopup;
    },
  },
};
</script>
