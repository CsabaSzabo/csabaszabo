---
name: 'how-to-handle-301-redirects-with-nuxtjs'
title: How to handle 301 redirects with NuxtJS
year: 27 Nov 2020
id: 'how-to-handle-301-redirects-with-nuxtjs'
description: |
  301 redirects are essential for good technical SEO, which could be done with NuxtJS.
---

## SEO and 301 redirects

301 redirects are used to redirect one webpage to another, but to implement them correctly is even more important for a good technical SEO.

#### What is a 301 redirect?

A website's HTTP 301 response indicates, that a web page was permanently moved from one location to another.

**Example**: `www.csabaszabo.dev` is redirected to `csabaszabo.dev` 

```
>>> https://www.csabaszabo.dev/

> --------------------------------------------
> 301 Moved Permanently
> --------------------------------------------

Status:	301 Moved Permanently
Code:	301
Connection:	close
Content-Length:	38
Location:	https://csabaszabo.dev/
Content-Type:	text/plain; charset=utf-8
Accept-Ranges:	bytes
Date:	Fri, 27 Nov 2020 17:13:00 GMT
X-Served-By:	cache-fra19158-FRA
X-Cache:	MISS
X-Cache-Hits:	0
X-Timer:	S1606497180.166688,VS0,VE185
Vary:	x-fh-requested-host, accept-encoding
```

#### Why SEO needs 301 redirects?

Before 2016, 301 redirects could lose some search ranking factor in Google, however from 2016 Google changed this logic and now if you redirect one url to an another one, the redirected page will get the ranking factor of the previous one and this could be really useful. Let's see some examples:

1. **Deleted urls**: If you decide to delete a page from your website which has any ranking in Google, then you should redirect this page to the most relevant another existing page on your website, so all or some part of the search traffic of the deleted page will go to the redirected page.
2. **Duplicated content**: If you have two pages with very similar content, which are competing with each other in google for similar keywords, then you should redirect the less powerful url to the more powerful page, so the more powerful page will get the ranking of both of the page.
3. **Site migration**: In case of a website migration (to a new domain, architecture or a big refactor), you will have pages which should be redirected to a new url.


## Single-page application 301 redirect problems

Handling a 301 redirect is simple for a server-side rendered website, like a PHP, Wordpress or python based web application, however it's problematic with for single-page applications, like Vue.js or React.

Vue.js alone is not capable of serving 301 redirect response for search enginers like Google, because it runs only on client-side and all it can do is to replace the current browser url, which is not handled propely by search engines.

Maybe you could configure 301 redirects at your hosting provider, however it could be tricky or not available, for example Firebase Hosting doesn't support 301 redirects (only redirecting entire domains).

## NuxtJS can do 301 redirects

Besides many other advantages of NuxtJS, it could do 301 redirects pretty easily, let's see how.

#### Step 1 - Create a redirects.js serverMiddleware

Let's create a `redirects.js` into your serverMiddleware folder (e.g. `serverMiddleware/redirects.js`). Then let's add this file into `nuxt.config.js`

```javascript

  serverMiddleware: [
    // Server-side redirects
    '~/serverMiddleware/redirects',
  ],
```

#### Step 2 - Implement the redirect logic

Put this redirect logic into `redirects.js`:

```javascript

const redirects = []

module.exports = function (req, res, next) {
  const host = req.headers.host;
  const fullUrl = req.url;
  var url = req.url.split('?')[0];
  var urlParams = null;
  if (req.url.includes("?")) {
    urlParams = '?' + req.url.split('?')[1]
  }

  const redirect = redirects.find(r => r.from === url)
  if (redirect) {
    var newLocation;
    if (urlParams) {
      newLocation = redirect.to + urlParams;
    } else {
      newLocation = redirect.to;
    }
    res.writeHead(301, {
      Location: newLocation
    });
    res.end()
  } else {
    next()
  }
}
```

This logic redirects the pages with their url parameters as well.

#### Step 3 - Collect redirect URLs

Now you just have to fill the `redirects` variable with your redirects. Example:

```javascript

const redirects =
[
  { from: '/old-deleted-url', to: '/new-working-url' },
  { from: '/outdated-blogpost-1', to: '/shiny-new-blogpost' },
  { from: '/outdated-blogpost-2', to: '/shiny-new-blogpost' },
]
```

Now if a user (or Google search engine crawler) visits your `/old-deleted-url` webpage, then it will send a 301 redirect to `/new-working-url`.