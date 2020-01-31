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
      title: 'EVDB.io (under development)',
      description: 'An international version of villanyautok.com, with new technology stack and new features. Currently under development.',
      longDescription: `
        <h3>Features</h3>
        <p>The EVDB.io lists all the new and used electric cars across Europe. It supports two langauges and markets (Hungary and UK).</p>
        <p>Compared to villanyautok, there are a few new functionalities:</p>
        <ul class="pb-4">
          <li>it structures data and cars like manufacturers > cars > car models. If one car has more variants, then the car page shows the summary data from these variants.</li>
          <li>the car list could be viewed in two modes: car or car variant mode</li>
        </ul>

        <h3>Technologies</h3>
        <p>The site is built on Vue.js + Nuxt.js with Vuetify CSS framework. The site is hosted on Google App Engine, the database is Firestore DB.</p>
      `,
      screenshots: [
        { src: '/img/evdb/evdb-1.png', },
        { src: '/img/evdb/evdb-2.png', },
        { src: '/img/evdb/evdb-3.png', },
        { src: '/img/evdb/evdb-4.png', },
        { src: '/img/evdb/evdb-5.png', },
        { src: '/img/evdb/evdb-6.png', },
      ],
      thumbnails: [
        '/img/evdb/evdb-1-thumb.png',
        '/img/evdb/evdb-2-thumb.png',
        '/img/evdb/evdb-3-thumb.png',
        '/img/evdb/evdb-4-thumb.png',
        '/img/evdb/evdb-5-thumb.png',
        '/img/evdb/evdb-6-thumb.png',
      ],
      link: 'https://evdb.io',
    }
  },

  components: {
    ProjectPage
  }
}
</script>

<style>

</style>