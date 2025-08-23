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
                xxSmall: { raw: "(max-width: 400px)" }, // custom width breakpoint
                xSmall: { raw: "(max-height: 780px)" }, // custom height breakpoint
                Small: { raw: "(max-height: 940px)" }, // custom height breakpoint
                md: { raw: "(min-height: 1440px)" }, // custom height breakpoint
                lg: { raw: "(min-height: 1920)" }, // custom height breakpoint
                xl: { raw: "(min-height: 2160px)" }, // custom height breakpoint
            },
        },
    },
    plugins: [],
}
export default config