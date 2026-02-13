import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0b1030', // Deep dark blue background
                primary: '#182877',    // Brand blue
                accent: '#f9bb1f',     // Gold accent
                surface: '#121840',    // Slightly lighter blue for cards/surfaces
                text: '#ffffff',       // White text
                'text-muted': '#a0aec0', // Muted text
                'btn-green-start': '#a4d638', // Light green for button gradient start
                'btn-green-end': '#69a008',   // Darker green for button gradient end
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
