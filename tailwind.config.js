/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                coral: {
                    50: '#FDFCFB',
                    400: '#F7ECE1',
                    700: '#DA7D4A'
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)'
            }
        },
    },
    plugins: [],
};
