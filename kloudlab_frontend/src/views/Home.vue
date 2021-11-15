<template>
  <div class="px-32 py-32 bg-gray-200 flex items-center justify-center">
    <div class="space-y-5">
      <!-- <input
        type="text"
        class="
          w-full
          py-3
          px-32
          border border-HomeSearchInputBorder
          rounded-l-3xl rounded-r-3xl
          focus:outline-none
        "
      /> -->
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
            focus:outline-none focus:ring-0
          "
          placeholder="search"
        />
        <span class="absolute right-4 top-3 text-md text-HomeSearchInputBorder">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="
            bg-gradient-to-r
            from-LabBtn1
            to-LabBtn2
            px-10
            py-2
            font-poppins
            text-white text-3xl
            rounded-lg
          "
        >
          Lab
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
