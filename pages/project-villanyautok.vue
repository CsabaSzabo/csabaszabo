<template>
  <ProjectPage
    :title="title"
    :description="description"
    :longDescription="longDescription"
    :screenshots="screenshots"
    :thumbnails="thumbnails"
    :link="link"
  ></ProjectPage>
</template>

<script>
import ProjectPage from '~/components/ProjectPage.vue'

export default {
  data() {
    return {
      title: 'Villanyautok.com',
      description: 'The biggest hungarian electric car listing site, where you could find all the new and used electric and plug-in hybrid cars, reviews, specs and prices.',
      longDescription: `
        <h3>Features and Technologies</h3>
        <p>Villanyautok.com is my first 'real' website, which is my main hobby project. It was started as a plain HTML/CSS/JavaScript website, so it doesn't use any high-level framework like React of Vue.</p>
        <p>It uses Bootstrap CSS framwork and the site design was coming from the Wingman Bootstrap template.</p>
        <p>Main features</p>
        <ul>
          <li>listing of 300+ electric and plug-in hybrid cars</li>
          <li>user login to allow users to write car reviews, which are displayed on the site</li>
          <li>web scraper for the biggest hungarian used-car site (hasznaltautok.hu) to update used cars and prices</li>
          <li>written user reviews and collected top youtube car reviews</li>
        </ul>
        <p class="mt-3">Car images are optimised for SEO: the site support more image resoltuion and additional .webp image formats.</p>
        <h3>Analytics</h3>
        <p>The website has Google Analytics intergration, plus HotJar for user NPS.</p>
        <p>It has monthly 15-20k monthly visitors, most of them are coming from SEO.</p>
        <h3>Hosting</h3>
        <p>The site is hosted on Firebase hosting, server-side rendering for some pages is served by Firebase Cloud Functions.</p>
      `,
      screenshots: [
        { url: '/img/villanyautok/villanyautok-1.png', },
        { url: '/img/villanyautok/villanyautok-2.png', },
        { url: '/img/villanyautok/villanyautok-3.png', },
        { url: '/img/villanyautok/villanyautok-4.png', },
        { url: '/img/villanyautok/villanyautok-5.png', },
        { url: '/img/villanyautok/villanyautok-6.png', },
        { url: '/img/villanyautok/villanyautok-7.png', },
      ],
      thumbnails: [
        '/img/villanyautok/villanyautok-1-thumb.png',
        '/img/villanyautok/villanyautok-2-thumb.png',
        '/img/villanyautok/villanyautok-3-thumb.png',
        '/img/villanyautok/villanyautok-4-thumb.png',
        '/img/villanyautok/villanyautok-5-thumb.png',
        '/img/villanyautok/villanyautok-6-thumb.png',
        '/img/villanyautok/villanyautok-7-thumb.png',
      ],
      link: 'https://villanyautok.com',
    }
  },

  components: {
    ProjectPage
  }
}
</script>

<style>

</style>