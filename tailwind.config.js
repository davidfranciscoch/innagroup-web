/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}', 'node_modules/preline/dist/*.js', './src/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [require('preline/plugin')],
};
