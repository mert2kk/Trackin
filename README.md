# My  Starter

Nuxt
Typescript
TailwindCSS
@nuxtjs/tailwindcss - Tailwind’in resmi Nuxt modülü – sıfır konfigürasyonla PostCSS uyumu sağlar
Vuetify 3
vite-plugin-vuetify - Vuetify ile Vite’i entegre eden plugin – sorunsuz, hızlı geliştirme için
SASS - Vuetify ile uyumlu stil özelleştirmesi için gerekli


TailwindCSS resmi dokümantasyonu zaman zaman `@tailwindcss/vite` plugin'i ile doğrudan Vite entegrasyonunu önerebilir. Ancak bu yöntem:

- Nuxt'un resmi plugin sistemiyle tam uyumlu değildir.
- Vuetify gibi başka Vite pluginleriyle birlikte çalışırken `postcss` hataları yaratabilir.
- Tailwind v4 ve Nuxt 4 kombinasyonunda kararsızlık gösterebilir.

Bu yüzden bu projede tercih edilen yöntem:
modules: ['@nuxtjs/tailwindcss']

Bu sayede:
	•	TailwindCSS PostCSS’e otomatik entegre edilir.
	•	Vite plugin karmaşası yaşanmaz.
	•	Vuetify gibi diğer UI framework’leriyle sorunsuz çalışır.

(	
    Neden Dokumantasyon boyle
    •	Çünkü Tailwind ekibi kendi vite plugin’ini tanıtmaya çalışıyor.
	•	Ama Nuxt ekibi henüz bu yöntemi resmi olarak desteklemiyor.
	•	Bu sebeple, @tailwindcss/vite kullanımı bazı projelerde çalışsa da:
	•	Vuetify gibi başka Vite pluginleriyle çakışabiliyor,
	•	Özellikle nuxt@4 ve yeni PostCSS sürümlerinde çalışmayan hatalar çıkarabiliyor (örnek: Cannot start Nuxt: you're trying to use tailwindcss as a PostCSS plugin).)


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:



# pnpm
pnpm dev



## Production

Build the application for production:

```bash

# pnpm
pnpm build


```

Locally preview production build:

```bash

# pnpm
pnpm preview


```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
