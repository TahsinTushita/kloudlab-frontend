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
            pr-64
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
          "
        ></div>
      </div>
    </div>

    <div class="flex items-top">
      <div class="grid grid-cols-4 gap-20 ml-20">
        <div
          class="
            w-64
            h-72
            bg-white
            rounded-2xl
            border-2 border-transparent
            hover:border-HomeCoursesBg3
          "
        ></div>
        <div
          class="
            w-64
            h-72
            bg-white
            rounded-2xl
            border-2 border-transparent
            hover:border-HomeCoursesBg3
          "
        ></div>
        <div
          class="
            w-64
            h-72
            bg-white
            rounded-2xl
            border-2 border-transparent
            hover:border-HomeCoursesBg3
          "
        ></div>
      </div>
      <div class="space-y-8 pr-44">
        <h1 class="text-white text-6xl font-poppins font-semibold">
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
              from-blue-600
              to-blue-600
              hover:from-LabBtn1 hover:to-LabBtn2
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
  <div class="px-40 py-28">
    <div class="grid grid-rows-1 gap-24">
      <div class="grid grid-cols-2">
        <div class="space-y-16 ml-24">
          <h1 class="text-HomeTutorialh1 font-poppins font-semibold text-5xl">
            Great cloud <br />
            platform since 2021
          </h1>
          <p class="text-HomeTutorialh1 font-poppins w-3/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="flex items-center">
          <div
            class="
              w-24
              h-24
              bg-HomeCloudShape1
              z-0
              rounded-tl-4xl
              relative
              mb-52
            "
          >
            <div
              class="
                w-96
                h-80
                bg-white
                border-2 border-transparent
                hover:border-HomeCoursesBg1
                z-10
                absolute
                top-9
                left-9
                shadow-lg
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="relative z-0 px-44 py-64 bg-HomeCloudShape2">Hi</div>
        <div>Hi</div>
      </div>
    </div>
  </div>
  <!-- Cloud platform end -->
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
