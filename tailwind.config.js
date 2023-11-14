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
                'gradient-primary': 'linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)',
                'logo': "url('./src/assets/icon-logo.svg')",
                'number': "url('./src/assets/icon-candidate-number.svg')"
            },
            fontFamily: {
                'mantou': 'Mantou Sans'
            },
            boxShadow: {
                'primary': '0px 4px 12px 0px rgba(163, 180, 203, 0.20)'
            }
        },
    },
    plugins: [],
};
