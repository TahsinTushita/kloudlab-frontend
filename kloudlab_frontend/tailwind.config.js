const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LabBtn1: "#0077FF",
        LabBtn2: "#00A2FF",
        NavBg: "#F5F5F5",
        NavOptions: "#8A8A8A",
        NavBtn1: "#007EFF",
        NavBtn2: "#006CDC",
        NavBtn3: "#0052A7",
        HomeSearchInputBorder: "#004185",
        HomeSearchIcon1: "#3198FF",
        HomeSearchIcon2: "#194C80",
        SeachCoursePlaceholder: "#B9B9B9",
        NavActiveClass1: "#0177ED",
        NavActiveClass2: "#004FA0",
        HomeCoursesBg1: "#7AB8FF",
        HomeCoursesBg2: "#0187E1",
        HomeCoursesBg3: "#0455A5",
        HomeCoursesBg4: "#034875",
        HomeTutorialh1: "#0678C4",
        HomeTutorialBg: "#0088FF",
        HomeTutorialWatch: "#0061A2",
        HomeCloudShape1: "#5CC5FC",
        HomeCloudShape2: "#D6EDFF",
        HomeBlogBg: "#F6F6F6",
      },
      fontFamily: {
        segoeUI: "'Segoe UI'",
        poppins: "'poppins', sans-serif",
      },
      borderRadius: {
        "4xl": "44px",
        "5xl": "200px",
      },
      height: {
        400: "400px",
        450: "450px",
        650: "650px",
      },
      width: {
        500: "500px",
        600: "600px",
      },
      margin: {
        73: "18.2rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [require("tailwindcss-border-gradients")()],
};
