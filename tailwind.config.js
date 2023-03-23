/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                "bg-primary": "000000e3",
            },
            colors: {
                "card-light": "#fff",
                "card-dark": "#1f2937",
                "primary-dark": "#00ffffca",
                "primary-light": "#1b1bee",
            },
            screens: {
                mobile: { raw: "(min-width: 500px)" },
                // => @media (min-height: 800px) { ... }
            },
        },
    },
    plugins: [],
}

