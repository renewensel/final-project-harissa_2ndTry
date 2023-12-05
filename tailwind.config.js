const { merge } = require("lodash");
const withMT = require("@material-tailwind/react/utils/withMT");

const baseConfig = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

module.exports = withMT(
    merge(baseConfig, {
        content: ["./pages/**/*.{js,ts,jsx,tsx}"],
    })
);
