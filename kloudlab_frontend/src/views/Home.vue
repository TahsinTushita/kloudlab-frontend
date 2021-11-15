<template>
  <!-- Search Bar -->
  <div class="px-32 py-32 flex items-center justify-center border-b">
    <div class="space-y-5">
      <div class="flex w-full max-w-xl relative">
        <input
          type="text"
          class="
            w-full
            border border-HomeSearchInputBorder
            pl-12
            py-3
            pr-40
            rounded-3xl
            focus:outline-none focus:ring-2
            placeholder-segoeUI placeholder-SeachCoursePlaceholder
          "
          placeholder="Search the courses"
        />
        <span
          class="
            absolute
            right-4
            top-3
            text-lg text-transparent
            bg-clip-text bg-gradient-to-b
            from-HomeSearchIcon1
            to-HomeSearchIcon2
          "
        >
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="
            bg-gradient-to-b
            from-LabBtn1
            to-LabBtn2
            px-10
            py-2
            font-poppins
            text-white text-3xl
            font-semibold
            rounded-lg
          "
        >
          Lab
        </button>
      </div>
    </div>
  </div>
  <!-- Search Bar end -->

  <!-- Courses -->
  <div
    class="
      py-16
      px-28
      bg-gradient-to-br
      from-HomeCoursesBg1
      via-HomeCoursesBg2 via-HomeCoursesBg3
      to-HomeCoursesBg4
    "
  >
    <h1 class="text-white font-poppins text-3xl mb-4 font-semibold">
      Categories
    </h1>
    <div class="grid grid-cols-6 gap-10 mb-32">
      <div v-for="category in categories" :key="category.id">
        <div class="w-52 h-52 bg-white rounded-2xl"></div>
      </div>
    </div>

    <div class="flex items-top">
      <div class="grid grid-cols-4 gap-20">
        <div class="w-64 h-72 bg-white rounded-2xl"></div>
        <div class="w-64 h-72 bg-white rounded-2xl"></div>
        <div class="w-64 h-72 bg-white rounded-2xl"></div>
      </div>
      <div class="space-y-8">
        <h1 class="text-white text-6xl font-poppins font-bold">
          Popular <br />
          Courses
        </h1>
        <div class="flex items-center justify center">
          <button
            class="
              mx-auto
              text-white
              font-poppins
              text-2xl text-light
              bg-gradient-to-tr
              from-LabBtn1
              to-LabBtn2
              px-5
              py-2
              rounded-md
            "
          >
            Get More
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses end -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      categories: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ],
    };
  },
};
</script>
