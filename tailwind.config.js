/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['BebasNeue-Regular', 'System'],
        'sans': ['BebasNeue-Regular', 'System'],
      },
    },
  },
  plugins: [],
}