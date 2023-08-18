module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fdb913",
          warning: "#e7af42",
          secondary: "#ffffff",
          accent: "#f4f4f4",
          neutral: "#000000",
          "base-100": "#ffffff",
          "--subHeading": "20px"
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
