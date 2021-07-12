module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
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
      boxShadow: {
        myBoxSh: "0px 8.5px 13px 2px rgb(20 19 34 / 75%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
