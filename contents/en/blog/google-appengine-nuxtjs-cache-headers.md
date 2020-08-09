---
name: 'google-appengine-nuxtjs-cache-headers'
title: Google AppEngine NuxtJS Cache headers
year: 09 Aug 2020
id: 'google-appengine-nuxtjs-cache-headers'
description: |
  How to set Cache Headers for NuxtJS files on Google App Engine.
---

## GTMetrix - Leverage browser caching

[GTMetrix](https://gtmetrix.com/) showed me a `Leverage browser caching` High Priority PageSpeed recommendation for my [villanyautok.com](https://villanyautok.com) site, which means that many NuxtJS resources are not cached (only for 10 minutes).

## App Engine default Cache Headers

By default Google App Engine sets the Cache expiration to 10 minutes [app-engine default_expiration	element](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref), which is not really acceptable for a frontend site assets and [NuxtJS](https://nuxtjs.org/) JS files.

## NuxtJS App Engine config

A simple NuxtJS app are having these file types:

* `/_nuxt/{{random-hash}}.js` - build files
* `/img/**` or `/assets/**` - static assets

These files are having 10 minutes Cache expiration, which is not enough, you could set 1 week or more. If you build and deploy a new version from your NuxtJS app, the JavaScript build files will get new random-hash names, so old build files won't be cached. The same logic should be applied on statis assets (like images), so if you change an asset, then you should rename it.


The handlers in the config is the following for villanyautok.com:
```yaml
handlers:
  - url: /_nuxt
    static_dir: .nuxt/dist/client
    secure: always
    expiration: "7d"
  - url: /(.*\.(gif|png|jpg|ico|txt))$
    static_files: static/\1
    upload: static/.*\.(gif|png|jpg|ico|txt)$
    secure: always
    expiration: "7d"
  - url: /.*
    script: auto
    secure: always
env_variables:
  HOST: '0.0.0.0'
  NODE_ENV: 'production'
```

I set `7d` expiration for both JS files and assets. It could be increased to 1 month or so, but I think 7 days is ok for start. It's already a big improvemnet compared to 10 minutes, I hope it will improve my Google Search Console `Core Web Vitals` scores.