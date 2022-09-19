/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit"],
                fira: ["Fira Sans"],
                roboto: ["Roboto"],
            },
            colors: {
                blue: {
                    sundara: "#CAEBFA",
                    sundaraTransparent: "rgba(202, 235, 250, 0.8)",
                    base: "#28acea",
                },
                site: {
                    100: "#d4eefb",
                    200: "#a9def7",
                    300: "#7ecdf2",
                    400: "#53bdee",
                    500: "#28acea",
                    600: "#208abb",
                    700: "#18678c",
                    800: "#10455e",
                    900: "#08222f",
                },
            },
            keyframes: {
                wave: {
                    "0%": { transform: "scale(1)", backgroundColor: "#bee3f8" },
                    "12.5%": {
                        transform: "scale(1.1)",
                        backgroundColor: "#63b3ed",
                    },
                    "25%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "37.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "50%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "62.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "75%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "87.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "100%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                },
                wave2: {
                    "0%": { transform: "scale(1)", backgroundColor: "#bee3f8" },
                    "12.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "25%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "37.5%": {
                        transform: "scale(1.1)",
                        backgroundColor: "#63b3ed",
                    },
                    "50%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "62.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "75%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "87.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "100%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                },
                wave3: {
                    "0%": { transform: "scale(1)", backgroundColor: "#bee3f8" },
                    "12.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "25%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "37.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "50%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "62.5%": {
                        transform: "scale(1.1)",
                        backgroundColor: "#63b3ed",
                    },
                    "75%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "87.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "100%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                },
                wave4: {
                    "0%": { transform: "scale(1)", backgroundColor: "#bee3f8" },
                    "12.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "25%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "37.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "50%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "62.5%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "75%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                    "87.5%": {
                        transform: "scale(1.1)",
                        backgroundColor: "#63b3ed",
                    },
                    "100%": {
                        transform: "scale(1)",
                        backgroundColor: "#bee3f8",
                    },
                },
            },
        },
    },
    plugins: [],
};
