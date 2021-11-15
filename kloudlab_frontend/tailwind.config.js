module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sevenFF: "#0077FF",
        A2FF: "#00A2FF",
        NavBg: "#F5F5F5",
        NavOptions: "#8A8A8A",
        NavBtn1: "#007EFF",
        NavBtn2: "#006CDC",
        NavBtn3: "#0052A7",
      },
      fontFamily: {
        segoeUI: "'Segoe UI'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
