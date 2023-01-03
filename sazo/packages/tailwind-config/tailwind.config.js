const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    // '../../packages/ui/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
