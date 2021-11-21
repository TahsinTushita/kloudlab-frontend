<template>
  <div class="grid grid-cols-6">
    <div class="col-span-4 py-28 px-28">
      <h1 class="text-HomeTutorialh1 font-poppins text-6xl font-semibold mb-10">
        Vue.js
      </h1>

      <div
        class="
          h-500
          rounded-4xl
          shadow-xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          mb-10
        "
      >
        <div class="flex justify-center mt-10">
          <h1
            class="
              text-2xl
              font-poppins font-semibold
              text-SingleCourseShortDesc
            "
          >
            Short Description
          </h1>
        </div>
      </div>

      <div class="flex justify-between">
        <button
          class="
            px-6
            py-3
            bg-SingleCourseOutlineBtn1
            rounded-full
            text-white
            font-poppins
            text-xl
            hover:bg-SingleCourseOutlineBtn2
            transition
            duration-300
          "
        >
          Course Outline
        </button>
        <div class="flex gap-10">
          <button
            class="
              w-10
              h-10
              rounded-full
              bg-transparent
              flex
              justify-center
              items-center
              hover:bg-SingleCourseOutlineBtn1 hover:text-white hover:shadow-2xl
              text-SingleCourseOutlineBtn1 text-3xl
              transition
              duration-300
              shadow-xl
            "
          >
            <i class="fas fa-angle-left"></i>
          </button>
          <button
            class="
              w-10
              h-10
              rounded-full
              bg-transparent
              flex
              justify-center
              items-center
              hover:bg-SingleCourseOutlineBtn1 hover:text-white hover:shadow-2xl
              text-SingleCourseOutlineBtn1 text-3xl
              transition
              duration-300
              shadow-xl
            "
          >
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="col-span-2 bg-SingleCoursePlaylistBg py-28 mt-2 px-20">
      <div class="grid grid-rows-1 gap-10">
        <div
          class="flex gap-4"
          v-for="CourseItem in CourseItems"
          :key="CourseItem.id"
        >
          <div
            class="
              w-72
              h-48
              bg-SingleCourseShortDesc
              rounded-md
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              cursor-pointer
            "
          ></div>
          <div class="flex items-center">
            <div class="text-SingleCoursePlaylistTitle font-poppins">
              <h3 class="text-3xl w-24">Vue Part 1</h3>
              <p>Instructor name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CourseItems: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>
