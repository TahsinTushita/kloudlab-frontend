<template>
  <div class="px-28 pt-28 pb-10">
    <h1 class="text-HomeTutorialh1 font-poppins text-6xl font-semibold mb-28">
      All Courses
    </h1>
    <div class="flex justify-center mb-28">
      <select
        class="
          w-80
          h-16
          text-lg text-CoursesFilter
          font-poppins
          px-4
          py-3
          border-2 border-CoursesFilter
          bg-white
          shadow-sm
          rounded
          focus:ring-primary focus:outline-none
        "
        name="categories"
        id="categories"
      >
        <option :value="null" disabled selected>Categories</option>
        <option>Price low-high</option>
        <option>Price high-low</option>
      </select>

      <select
        class="
          w-80
          h-16
          text-lg text-CoursesFilter
          font-poppins
          px-4
          py-3
          border-2 border-l-0 border-r-0 border-CoursesFilter
          bg-white
          shadow-sm
          rounded
          focus:ring-primary focus:outline-none
        "
        name="topic"
        id="topic"
      >
        <option :value="null" disabled selected>Topic</option>
        <option>Price low-high</option>
        <option>Price high-low</option>
      </select>

      <div class="w-16 h-16 bg-blue-600 relative">
        <i
          class="
            fas
            fa-search
            text-2xl text-white
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        ></i>
      </div>
    </div>

    <div
      class="grid grid-cols-4 place-items-start gap-24 h-96 py-10 px-10 mb-10"
    >
      <!-- <div v-for="blog in blogs" :key="blog.id"> -->
      <!-- <div class="w-72 h-64 flex justify-center items-center"> -->
      <div class="w-72 h-64">
        <div
          class="
            w-24
            h-24
            bg-CourseContentContainer1
            rounded
            relative
            z-0
            left-5
          "
        >
          <div
            class="
              w-64
              h-60
              bg-white
              rounded-md
              shadow-lg
              hover:shadow-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              absolute
              top-4
              left-4
            "
          ></div>
        </div>
      </div>
      <div class="w-72 h-64 flex items-end">
        <div
          class="
            w-24
            h-24
            bg-CourseContentContainer2
            rounded
            relative
            z-0
            left-5
          "
        >
          <div
            class="
              w-64
              h-60
              bg-white
              rounded-md
              shadow-lg
              hover:shadow-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              absolute
              bottom-4
              left-4
            "
          ></div>
        </div>
      </div>
      <div class="w-72 h-64">
        <div
          class="
            w-24
            h-24
            bg-CourseContentContainer1
            rounded
            relative
            z-0
            left-5
          "
        >
          <div
            class="
              w-64
              h-60
              bg-white
              rounded-md
              shadow-lg
              hover:shadow-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              absolute
              top-4
              left-4
            "
          ></div>
        </div>
      </div>
      <div class="w-72 h-64 flex items-end">
        <div
          class="
            w-24
            h-24
            bg-CourseContentContainer2
            rounded
            relative
            z-0
            left-5
          "
        >
          <div
            class="
              w-64
              h-60
              bg-white
              rounded-md
              shadow-lg
              hover:shadow-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              absolute
              bottom-4
              left-4
            "
          ></div>
        </div>
      </div>

      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>

  <!-- <div
      class="
        px-10
        py-10
        bg-gradient-to-br
        from-HomeCoursesBg1
        via-SignupBg1 via-CourseUpcomingCourses
        to-HomeCoursesBg4
      "
    > -->
  <div class="px-28 py-28 bg-gradient-to-br to-HomeCoursesBg1 from-SignupBg1">
    <div
      class="
        text-white text-6xl
        font-semibold
        grid grid-rows-1
        place-items-end
        mr-16
      "
    >
      <h1>Upcoming</h1>
      <h1>Courses</h1>
    </div>

    <div class="grid grid-cols-4 place-items-center h-96">
      <div v-for="course in courses" :key="course.id">
        <!-- <div class="w-96 h-72"> -->
        <div class="grid grid-rows-1 place-items-center h-96">
          <div
            class="
              w-72
              h-40
              bg-CourseContentContainer1
              rounded-b-full
              relative
              z-0
              top-20
            "
          >
            <div
              class="
                absolute
                bottom-6
                left-6
                flex
                justify-center
                items-center
                z-10
                w-60
                h-60
                shadow
                bg-white
                border-2 border-transparent
                hover:border-HomeCoursesBg1
                rounded-full
              "
            ></div>
          </div>
          <button
            class="
              text-white
              px-8
              py-2
              bg-CourseNameBtn
              mt-5
              text-xl
              font-poppins
              rounded-lg
            "
          >
            vue.js
          </button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
};
</script>
