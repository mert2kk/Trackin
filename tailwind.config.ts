import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{ts,js}',
    ],
    theme: {
        extend: {
            screens: {
                xxSmall: { raw: "(max-width: 400px)" },
                xSmall: { raw: "(max-width: 780px)" },
                Small: { raw: "(max-width: 940px)" },
                md: { raw: "(min-width: 16000px)" },
                lg: { raw: "(min-width: 1920)" },
                xl: { raw: "(min-width: 2160px)" },
                customSm: { raw: "(max-width: 600px)" }
            },
        },
    },
    plugins: [],
}
export default config