<template>
  <div class="px-28 py-28">
    <div class="grid grid-rows-1 place-items-center gap-10">
      <div class="w-full">
        <div class="h-650 bg-blue-200 rounded-2xl mb-7"></div>
        <div
          class="
            flex
            justify-end
            gap-3
            text-xl
            font-poppins font-semibold
            text-SeachCoursePlaceholder
          "
        >
          <p>total view</p>
          <i class="far fa-thumbs-up hover:text-HomeCoursesBg1"></i>
          <i
            class="
              far
              fa-thumbs-down
              transform
              flip-horizontal
              hover:text-HomeCoursesBg1
            "
          ></i>
        </div>
      </div>

      <div class="w-full space-y-5">
        <h1
          class="
            text-3xl
            font-poppins font-semibold
            text-SingleVideoRecommendedCoursesHeader
          "
        >
          Recommended Courses
        </h1>
        <div class="grid grid-cols-6 place-items-center">
          <div
            v-for="recommendedCourse in recommendedCourses"
            :key="recommendedCourse.id"
          >
            <button
              class="
                bg-white
                text-SingleVideoRecommendedCoursesSelectorBg
                border-2 border-SingleVideoRecommendedCoursesSelectorBg
                focus:bg-SingleVideoRecommendedCoursesSelectorBg
                w-52
                h-14
                px-4
                py-2
                focus:text-white
                hover:text-white
                hover:bg-SingleVideoRecommendedCoursesSelectorBg
                text-2xl
                rounded-full
              "
            >
              {{ recommendedCourse.name }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-6 px-5 py-5 w-full gap-10">
        <div class="col-span-4 h-850">
          <div
            class="
              flex
              justify-center
              h-5/6
              py-10
              px-5
              bg-SingleCoursePlaylistBg
            "
          >
            <h1
              class="
                text-3xl
                font-poppins font-semibold
                text-SingleVideoRecommendedCoursesHeader
              "
            >
              Discussion
            </h1>
          </div>
          <div class="flex items-center justify-center mt-5">
            <i
              class="
                fas
                fa-angle-double-down
                text-4xl text-SingleVideoRecommendedCoursesHeader
                cursor-pointer
              "
            ></i>
          </div>
        </div>
        <div class="col-span-2 h-850">
          <div class="h-5/6 py-10 px-5 bg-SingleCoursePlaylistBg">
            <div class="flex justify-center mb-10">
              <h1
                class="
                  text-3xl
                  font-poppins font-semibold
                  text-SingleVideoRecommendedCoursesHeader
                "
              >
                Playlist
              </h1>
            </div>
            <div class="grid grid-rows-1 place-items-center gap-10">
              <div v-for="CourseItem in CourseItems" :key="CourseItem.id">
                <div
                  class="
                    w-64
                    h-40
                    bg-SingleCourseShortDesc
                    rounded-md
                    border-2 border-transparent
                    hover:border-HomeCoursesBg1
                    cursor-pointer
                  "
                ></div>
              </div>
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
      recommendedCourses: [
        { id: 1, name: "Vuejs" },
        { id: 2, name: "React" },
        { id: 3, name: "Angular" },
        { id: 4, name: "Nodejs" },
        { id: 5, name: "Python" },
        { id: 6, name: "Javascript" },
      ],
      CourseItems: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>

<style scoped>
.flip-horizontal {
  transform: scale(-1, 1);
}
</style>
