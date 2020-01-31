---
name: 'dark-mode-for-website-with-nuxtjs-and-vuetify'
title: Dark mode for websites with Nuxt.js and Vuetify
year: 30 Jan 2020
id: 'dark-mode-for-website-with-nuxtjs-and-vuetify'
description: |
  How to add dark and light mode for a website built with Nuxt.js and Vuetify.
---

## About this tutorial

This website is my portfolio and blog website, which is built with [Nuxt.js](https://nuxtjs.org/) and [Vuetfiy](https://vuetifyjs.com/). I added the dark/light mode support to this website and I summarise this work in this blogpost.

This technical blogpost connects to a less technical post on Medium about [Does your website support dark mode?](https://medium.com/@csabb), where I listed 20 well-known products and checked if they support dark mode in their apps and website.

## Dark mode detection

There are official documents around how to handle dark mode on websites from the main browser engines:
- <strong>Apple WebKit:</strong> [Dark Mode Support in WebKit](https://webkit.org/blog/8840/dark-mode-support-in-webkit/)
- <strong>Google Chrome / web.dev:</strong> [prefers-color-scheme: Hello darkness, my old friend](https://web.dev/prefers-color-scheme/)
- <strong>Mozilla:</strong> [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

In summary, the `prefers-color-scheme` CSS media feature is used to detect if the browser is in dark or light mode.

```javascript

.textClass {
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(48, 48, 48);
}

@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 1.0);
    background-color: rgb(250, 250, 250);
  }
}
```

In theory, that's it, however it could be different for different UI frameworks. Let's see how it works for Vuetify (and Nuxt.js).

## Vuetify has a dark/light mode, but it's not exactly what you would expect

Vuetify support [themes](https://vuetifyjs.com/en/customization/theme), it supports light and dark mode in your codebase and you could change it programatically.

```javascript

// nuxt.config.js
vuetify: {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    // default theme is light mode
    dark: false,
    themes: {
      dark: {
        primary: colors.blue,
        secondary: colors.teal.darken4,
        accent: colors.teal.accent4,

        error: colors.deepOrange.accent2,
        info: colors.grey.darken3,
        success: colors.green.accent3,
        warning: colors.amber.base,
      },
      light: {
        primary: '#1976D2',
        secondary: colors.teal.lighten3,
        accent: colors.teal.accent4,

        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    }
  }
}
```

And this is how you change the dark/light mode programatically.

```javascript

this.$vuetify.theme.dark = true;
```

The problem with this solution, is that Vuetify doesn't follow the operation system light/dark mode settings. As most of the mobile apps works and Apple Human Guideline supports, your app should follow the dark/light mode of the devices.
Vuetify doesn't have this functionality and even there's a close feature request about this on [GitHub](https://github.com/vuetifyjs/vuetify/issues/7932).

## Automatic dark/light mode switch

You have to set a default theme to your application in `nuxt.config.js`. I would suggest you to set it to light, as I believe most of the users use their device in light mode.

```javascript

// nuxt.config.js
  vuetify: {
    theme: {
      // default theme is light mode
      dark: false,
    }
  },
```

We should check if the devices is in dark/light mode, when we start the Nuxt.js application. I call this logic in the `mounted` Vue Lifecycle event, however I had to add a 0 seconds timeout, as otherwise the light-dark mode switch doesn't work well. You could try it if you remove that 0 seconds timout.

```javascript

const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (darkMediaQuery.matches) {
  console.log('change default light to dark theme');
  // need to set 0 sec timeout to set the dark more after mounted event, due to some bug in the framework
  setTimeout(() => this.$vuetify.theme.dark = true, 0);
}
```

Besides setting the dark/light mode, we should listen to theme change, as users could change the devices themse settings and it could change by the operation system, when the sune comes up or goes down.

```javascript

const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkMediaQuery.addEventListener('change', (e) => {
  this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
});
```

I put this logic into the default layout, as I use only of layout.
```javascript

mounted() {
  this.initDarkMode();
},

methods: {
  initDarkMode() {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkMediaQuery.addEventListener('change', (e) => {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    });

    if (darkMediaQuery.matches) {
      console.log('change default light to dark theme');
      // need to set 0 sec timeout to set the dark more after mounted event, due to some bug in the framework
      setTimeout(() => this.$vuetify.theme.dark = true, 0);
    }
  },
}
```

## Let's fix the colors and images

From the previous section we set the light and dark theme correctly for the page. Vuetify supports themes, where you could set the theme colors for dark and light modes.
```javascript

// nuxt.config.js
vuetify: {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    // default theme is light mode
    dark: false,
    themes: {
      dark: {
        primary: colors.blue,
        secondary: colors.teal.darken4,
        accent: colors.teal.accent4,

        error: colors.deepOrange.accent2,
        info: colors.grey.darken3,
        success: colors.green.accent3,
        warning: colors.amber.base,
      },
      light: {
        primary: '#1976D2',
        secondary: colors.teal.lighten3,
        accent: colors.teal.accent4,

        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    }
  }
}
```

You should use these themes for all of your HTML elements. You should use `text--primary`, `text--secondary` and `text--{{theme-color}}` classse for text colors and `primary`, `secondary`,  and `{{theme-color}}` for background colors.

Some examples:
```html

<!-- text with primary color -->
<h2 class="text--primary text-center pb-4">Interest areas & Skills</h2>

<!-- text with secondary color -->
<p class="info-text text--secondary">I'm an experienced Product Engineer with 6+ years of Software Product Development experience</p>

<!-- container with secondary background color -->
<v-container fluid class="projects-section secondary">
</v-container>

<!-- button with accent color -->
<v-btn outlined color="accent" @click="openWebsite">
  <v-icon left>mdi-open-in-new</v-icon>Open 
</v-btn>
```

These text and background color changes could be a big job, if you haven't used Vuetify theme colors in your project, but it's a very quick job if you use them.

For images, you could set the source of the image, based on the vuetify theme property `$vuetify.theme.dark`.

```html

<img :src="$vuetify.theme.dark ? '/img/logo-CSSZ-v1-48.png' : '/img/logo-CSSZ-v3-48.png'">
```

That's it. If you used Vuetify themse before in your project, then it's a quick task for you, if you haven't, then it's a bit bigger work, but you'll have a much more consistent coloring in your website project.


I hope you enjoyed reading this blogpost.
If you do so, then please share it with others who may be interested in it.