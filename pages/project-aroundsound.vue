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
      title: 'Aroundsound website',
      description: `Aroundsound lets you record sound snippets quickly, store them safely, enrich them with notes, and share them.`,
      longDescription: `
        <h3>Features and Technologies</h3>
        <p>Aroundsound website was planned to be a mobile app user acqusition platform, where we provide a subset of the Aroundsound mobile app functionality. I choosed to use Vue.js and Nuxt.js techologies to build the site, so we had server-side rendering support, which is ideal for SEO.</p>
        <p>The website was integrated with Firebase, which is the backend behind the Aroundsound apps. Users could playback shared recordings (without login) on the website and they could log in as well, to browser the recordings or collections and listen them back.</p>
        <h3>Analytics</h3>
        <p>The website has Google Analytics intergration through Google Tag Manager, plus a server-side rendering to BigQuery through PubSub.</p>
        <h3>Hosting</h3>
        <p>The site is hosted on Google App Engine, which provides good integration with other Google Cloud services and it's ideal hosting for a Nuxt.js server-side rendering site.</p>
      `,
      screenshots: [
        { url: '/img/aroundsound/aroundsound-1.png', },
        { url: '/img/aroundsound/aroundsound-2.png', },
        { url: '/img/aroundsound/aroundsound-3.png', },
        { url: '/img/aroundsound/aroundsound-4.png', },
        { url: '/img/aroundsound/aroundsound-5.png', },
        { url: '/img/aroundsound/aroundsound-6.png', },
        { url: '/img/aroundsound/aroundsound-7.png', },
        { url: '/img/aroundsound/aroundsound-8.png', },
      ],
      thumbnails: [
        '/img/aroundsound/aroundsound-1-thumb.png',
        '/img/aroundsound/aroundsound-2-thumb.png',
        '/img/aroundsound/aroundsound-3-thumb.png',
        '/img/aroundsound/aroundsound-4-thumb.png',
        '/img/aroundsound/aroundsound-5-thumb.png',
        '/img/aroundsound/aroundsound-6-thumb.png',
        '/img/aroundsound/aroundsound-7-thumb.png',
        '/img/aroundsound/aroundsound-8-thumb.png',
      ],
      link: 'https://aroundsound.com'
    }
  },

  components: {
    ProjectPage
  }
}
</script>

<style>

</style>