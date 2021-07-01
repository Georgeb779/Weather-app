module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "cloud-background": "url('/src/images/Cloud-background.png')",
      }),

      colors: {
        "dark-blue": "rgba(30, 33, 58, 1)",
        "light-grey": "rgba(160, 159, 177, 1)",
        "degreess-color": "#E7E7EB",
        "text-color": "rgba(136, 134, 157, 1)",
        "btn-color": "rgba(110, 112, 122, 1)",
        "side-right": "rgba(16, 14, 29, 1)",
      },
      zIndex: {
        "-1": -1,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
