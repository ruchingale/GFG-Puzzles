import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                pink: {
                    50: '#FFF0F5',
                    100: '#FFE4E1',
                    200: '#FFB6C1',
                    300: '#FFC0CB',
                    400: '#FF69B4',
                    500: '#FF1493',
                    600: '#DB7093',
                },
                beige: {
                    50: '#F5F5DC',
                    100: '#F5F5DC',
                    200: '#E8E4C9',
                    300: '#DCD8B5',
                },
            },
        },
    },
    plugins: [],
}

export default config 