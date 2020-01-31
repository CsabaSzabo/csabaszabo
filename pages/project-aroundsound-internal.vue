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
      title: 'Aroundsound internal site',
      description: 'The Aroundsound internal site has two functionalities: user-level analytics and inspiration content editor.',
      longDescription: `
        <h3>Features</h3>
        <p>The Aroundsound internal site is a private internal administration site, restricted to only internal usage (with Identity-Aware Proxy).</p>
        <p>It has two parts: User-analytics features (Armstrong) and an Inspiration content editor.</p>
        
        <p>User-analytics:</p>
        <ul class="pb-4">
          <li>The underlying data is provided by some BigQuery tables, which are populated from user analytics events, aggregated by daily scheduled queries.</li>
          <li>Search by user ID or search for a random user based on different user data filters</li>
          <li>User data summary (recordings, sync, geo, devices, ...)</li>
          <li>User event calendars</li>
          <li>User activity and retention calendar</li>
          <li>User activity level graph</li>
          <li>Daily/weekly/month user user event summary showed with different event icons</li>
        </ul>

        <p>Inspiration content editor features:</p>
        <ul class="pb-4">
          <li>The underlying data is provided through Firebase Admin SDK, so we have direct access to all inspiration data.</li>
          <li>The website is connected to the development version of the database, so we don't directly modify the production database. When somebody modifies somethings on this site, the change could be previewed on the aroundsound development website.</li>
          <li>When the changes are finsihed and reviews on development environment, the changes could be released to production with one button. That button triggers a special cloud function which copies the inspiration content from development environment to production.</li>
        </ul>

        <h3>Technologies</h3>
        <p>The used frontend framework is Vue.js + Nuxt.js, the used CSS library is Vuetify.</p>
        <p>The site is hosted on Google App Engine and it's behind a Google Identity-Aware Proxy, so we could restrict the usage of the service for users inside our company Google organisation.</p>
        
      `,
      screenshots: [
        { url: '/img/aroundsound-internal/aroundsound-internal-1.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-2.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-3.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-4.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-5.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-6.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-7.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-8.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-9.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-10.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-11.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-12.png', },
        { url: '/img/aroundsound-internal/aroundsound-internal-13.png', },
      ],
      thumbnails: [
        '/img/aroundsound-internal/aroundsound-internal-1-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-2-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-3-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-4-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-5-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-6-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-7-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-8-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-9-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-10-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-11-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-12-thumb.png',
        '/img/aroundsound-internal/aroundsound-internal-13-thumb.png',
      ],
    }
  },

  components: {
    ProjectPage
  }
}
</script>

<style>

</style>