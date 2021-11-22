<template>
  <!-- Search Bar -->
  <div class="mx-32 my-44 flex items-center justify-center">
    <div class="space-y-5">
      <div class="flex w-full max-w-xl relative">
        <input
          type="text"
          class="
            w-600
            border border-HomeSearchInputBorder
            px-12
            py-3
            h-16
            rounded-4xl
            focus:outline-none focus:ring-2
            placeholder-segoeUI placeholder-SeachCoursePlaceholder
          "
          placeholder="Search the courses"
        />
        <span
          class="
            absolute
            right-4
            top-5
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
        <!-- <button
          class="
            bg-gradient-to-b
            from-blue-600
            to-blue-600
            hover:from-LabBtn1 hover:to-LabBtn2
            px-10
            py-2
            font-poppins
            text-white text-3xl
            font-semibold
            rounded-lg
          "
        >
          Lab
        </button> -->
        <button
          class="
            labBtn
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
        <div
          class="
            w-52
            h-52
            bg-white
            rounded-2xl
            border-2 border-transparent
            hover:border-HomeCoursesBg3
            shadow-lg
            hover:shadow-2xl
          "
        ></div>
      </div>
    </div>

    <div class="flex items-top">
      <div class="grid grid-cols-4 gap-20 ml-20">
        <div v-for="popularCourse in popularCourses" :key="popularCourse.id">
          <div
            class="
              w-64
              h-72
              bg-white
              rounded-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg3
              shadow-lg
              hover:shadow-2xl
            "
          ></div>
        </div>
      </div>
      <div class="space-y-8 pr-44">
        <h1 class="text-white text-6xl font-poppins font-semibold">
          Popular <br />
          Courses
        </h1>
        <div class="flex items-center justify center">
          <!-- <button
            class="
              mx-auto
              text-white
              font-poppins
              text-2xl text-light
              bg-gradient-to-tr
              from-blue-600
              to-blue-600
              hover:from-LabBtn1 hover:to-LabBtn2
              px-5
              py-2
              rounded-md
            "
          >
            Get More
          </button> -->
          <button
            class="
              mx-auto
              text-white
              font-poppins
              text-2xl text-light
              labBtn
              px-5
              py-2
              rounded-md
            "
            @click="navigateToCourses"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses end -->

  <!-- Tutorials -->
  <div class="grid grid-rows-1">
    <h1
      class="
        text-6xl
        px-28
        py-28
        font-poppins font-semibold
        text-HomeTutorialh1
      "
    >
      Tutorial
    </h1>
    <div class="px-28 py-20 bg-gradient-to-r from-HomeTutorialBg to-white">
      <div class="grid grid-rows-1 place-items-start">
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Linux
        </h1>
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Fundamentals
        </h1>
        <div
          class="
            flex
            items-center
            gap-2
            rounded-3xl
            bg-white
            px-4
            py-3
            w-28
            mt-4
          "
        >
          <h4 class="text-HomeTutorialWatch font-poppins text-md">Watch</h4>
          <a href="#" class="text-blue-400"
            ><img src=".././assets/images/play-circle.png" alt="play-circle" />
          </a>
        </div>
      </div>
    </div>

    <div class="px-28 py-20 bg-gradient-to-l from-HomeTutorialBg to-white">
      <div class="grid grid-rows-1 place-items-end">
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Linux
        </h1>
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Fundamentals
        </h1>
        <div
          class="
            flex
            items-center
            gap-2
            rounded-3xl
            bg-white
            px-4
            py-3
            w-28
            mt-4
          "
        >
          <h4 class="text-HomeTutorialWatch font-poppins text-md">Watch</h4>
          <a href="#" class="text-blue-400"
            ><img src=".././assets/images/play-circle.png" alt="play-circle" />
          </a>
        </div>
      </div>
    </div>

    <div class="px-28 py-20 bg-gradient-to-r from-HomeTutorialBg to-white">
      <div class="grid grid-rows-1 place-items-start">
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Linux
        </h1>
        <h1 class="text-white font-poppins font-semibold text-4xl uppercase">
          Fundamentals
        </h1>
        <div
          class="
            flex
            items-center
            gap-2
            rounded-3xl
            bg-white
            px-4
            py-3
            w-28
            mt-4
          "
        >
          <h4 class="text-HomeTutorialWatch font-poppins text-md">Watch</h4>
          <a href="#" class="text-blue-400"
            ><img src=".././assets/images/play-circle.png" alt="play-circle" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Tutorials end -->

  <!-- Cloud platform -->
  <div class="px-28 py-28">
    <div class="grid grid-rows-1 gap-24">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-16">
          <h1 class="text-HomeTutorialh1 font-poppins font-semibold text-5xl">
            Great cloud <br />
            platform since 2021
          </h1>
          <p class="text-HomeTutorialh1 font-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div
          class="
            w-32
            h-32
            bg-HomeCloudShape1
            z-0
            rounded-tl-4xl
            relative
            ml-73
            mt-8
          "
        >
          <div
            class="
              w-500
              h-400
              bg-white
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              z-10
              absolute
              top-10
              left-10
              shadow-xl
              hover:shadow-2xl
            "
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="relative z-0 h-650 bg-HomeCloudShape2 rounded-tr-5xl w-3/5">
          <div
            class="
              w-500
              h-400
              bg-white
              border-2 border-transparent
              hover:border-HomeCoursesBg1
              z-10
              absolute
              top-36
              left-20
              shadow-xl
              hover:shadow-2xl
            "
          ></div>
        </div>
        <div class="space-y-16 text-right w-4/5 ml-40 mt-12">
          <h1 class="text-HomeTutorialh1 font-poppins font-semibold text-5xl">
            How it worked
          </h1>
          <p class="text-HomeTutorialh1 font-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Cloud platform end -->

  <!-- Blog -->
  <div class="grid grid-rows-1 bg-HomeBlogBg py-28 px-28 gap-16">
    <div class="grid grid-rows-1 place-items-end">
      <h1 class="text-6xl font-poppins font-semibold text-HomeTutorialh1">
        Blog
      </h1>
    </div>
    <!-- <div class="grid grid-cols-5 place-items-center">
      <div v-for="(blog, index) in blogs" :key="blog.id">
        <h1 v-if="5 % (3 + index) == 2">Hello 1</h1>
        <h1 v-if="5 % (3 + index) == 1">Hello 2</h1>
        <h1 v-if="5 % (3 + index) == 0">Hello 3</h1>
      </div>
    </div> -->
    <!-- <div class="grid grid-cols-5 place-items-center gap-24">
      <div v-for="blog in blogs" :key="blog.id"> -->
    <div class="flex gap-24">
      <div
        class="
          w-64
          h-80
          bg-white
          rounded-md
          shadow-lg
          hover:shadow-2xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          relative
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            bg-HomeCoursesBg1
            absolute
            -left-5
            -top-5
          "
        ></div>
      </div>
      <div
        class="
          w-64
          h-80
          bg-white
          rounded-md
          shadow-lg
          hover:shadow-2xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          relative
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            bg-HomeCoursesBg1
            absolute
            -bottom-7
            left-24
          "
        ></div>
      </div>
      <div
        class="
          w-64
          h-80
          bg-white
          rounded-md
          shadow-lg
          hover:shadow-2xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          relative
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            bg-HomeCoursesBg1
            absolute
            -right-5
            -top-5
          "
        ></div>
      </div>
      <div
        class="
          w-64
          h-80
          bg-white
          rounded-md
          shadow-lg
          hover:shadow-2xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          relative
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            bg-HomeCoursesBg1
            absolute
            -bottom-7
            left-24
          "
        ></div>
      </div>
      <div
        class="
          w-64
          h-80
          bg-white
          rounded-md
          shadow-lg
          hover:shadow-2xl
          border-2 border-transparent
          hover:border-HomeCoursesBg1
          relative
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            bg-HomeCoursesBg1
            absolute
            -left-5
            -top-5
          "
        ></div>
      </div>
    </div>

    <!-- </div>
    </div> -->
    <div class="flex items-center justify center">
      <button
        class="
          mx-auto
          text-white
          font-poppins
          text-2xl text-light
          labBtn
          px-5
          py-2
          rounded-md
        "
        @click="navigateToBlog"
      >
        View More
      </button>
    </div>
  </div>
  <!-- Blog end -->

  <!-- Instructor -->
  <div class="px-28 py-28">
    <h1 class="text-6xl font-poppins font-semibold text-HomeTutorialh1 mb-16">
      Instructor
    </h1>
    <div class="grid grid-cols-4 place-items-center">
      <div v-for="instructor in instructors" :key="instructor.id">
        <div class="relative w-72 h-96">
          <div
            class="
              w-12
              h-32
              bg-HomeInstructorCardBg
              absolute
              top-36
              rounded-4xl
              z-0
            "
          ></div>
          <div
            class="
              w-32
              h-12
              bg-HomeInstructorCardBg
              absolute
              bottom-0
              rounded-4xl
              right-8
              z-0
            "
          ></div>
          <div
            class="
              w-60
              h-72
              bg-white
              rounded-lg
              absolute
              z-10
              left-4
              top-20
              shadow-xl
              hover:shadow-2xl
              border-2 border-transparent
              hover:border-HomeCoursesBg1
            "
          ></div>
          <div
            class="
              w-40
              h-40
              rounded-full
              bg-white
              absolute
              z-20
              left-14
              shadow-xl
            "
          ></div>
          <button
            class="
              w-24
              h-12
              rounded-full
              bg-blue-600
              absolute
              z-20
              left-20
              px-4
              py-2
              text-white
              bottom-10
              text-xl
            "
            @click="navigateToSingleInstructor"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Instructor end -->
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
      popularCourses: [{ id: 1 }, { id: 2 }, { id: 3 }],
      blogs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      instructors: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },

  methods: {
    navigateToCourses() {
      this.$router.push("/courses");
    },
    navigateToBlog() {
      this.$router.push("/blog");
    },
    navigateToSingleInstructor() {
      this.$router.push("/single-instructor");
    },
  },
};
</script>

<style >
.labBtn {
  position: relative;
  background-color: #1e88e5;
  z-index: 1;
}

.labBtn::before {
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
  border-radius: 10px;
}

.labBtn:hover::before {
  opacity: 1;
}
</style>
