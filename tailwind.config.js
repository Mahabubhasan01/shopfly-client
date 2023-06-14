/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#394cdd",

          secondary: "#8e64ef",

          accent: "#517fd6",

          neutral: "#2f2131",

          "base-100": "#f2f2f3",

          info: "#87a9e3",

          success: "#1daf68",

          warning: "#f8c43f",

          error: "#ed3b6d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
