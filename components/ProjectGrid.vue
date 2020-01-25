<template>
  <v-container>
    <v-row dense class="projects-row">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        :md="card.flex"
      >
        <Project
          :src="card.src"
          :title="card.title"
          :description="card.description"
          :longDescription="card.longDescription"
          :screenshots="card.screenshots"
          :link="card.link">
        </Project>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Project from '~/components/Project.vue'

export default {
  data: () => ({
    cards: [
      {
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
        src: '/img/project-aroundsound_small@1x.png',
        screenshots: [
          { src: '/img/aroundsound/aroundsound-1.png', },
          { src: '/img/aroundsound/aroundsound-2.png', },
          { src: '/img/aroundsound/aroundsound-3.png', },
          { src: '/img/aroundsound/aroundsound-4.png', },
          { src: '/img/aroundsound/aroundsound-5.png', },
          { src: '/img/aroundsound/aroundsound-6.png', },
          { src: '/img/aroundsound/aroundsound-7.png', },
          { src: '/img/aroundsound/aroundsound-8.png', },
        ],
        flex: 6,
        link: 'https://aroundsound.com'
      },
      {
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
        src: '/img/project-aroundsound-internal_small@1x.png',
        screenshots: [
          { src: '/img/aroundsound-internal/aroundsound-internal-1.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-2.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-3.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-4.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-5.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-6.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-7.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-8.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-9.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-10.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-11.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-12.png', },
          { src: '/img/aroundsound-internal/aroundsound-internal-13.png', },
        ],
        flex: 6
      },
      {
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
        src: '/img/project-villanyautok_small@1x.png',
        screenshots: [
          { src: '/img/villanyautok/villanyautok-1.png', },
          { src: '/img/villanyautok/villanyautok-2.png', },
          { src: '/img/villanyautok/villanyautok-3.png', },
          { src: '/img/villanyautok/villanyautok-4.png', },
          { src: '/img/villanyautok/villanyautok-5.png', },
          { src: '/img/villanyautok/villanyautok-6.png', },
          { src: '/img/villanyautok/villanyautok-7.png', },
        ],
        flex: 6,
        link: 'https://villanyautok.com'
      },
      {
        title: 'EVDB.io (under development)',
        description: 'An international version of villanyautok.com, with new technology stakc and new features. Currently under development.',
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
        src: '/img/project-evdb_small@1x.png',
        screenshots: [
          { src: '/img/evdb/evdb-1.png', },
          { src: '/img/evdb/evdb-2.png', },
          { src: '/img/evdb/evdb-3.png', },
          { src: '/img/evdb/evdb-4.png', },
          { src: '/img/evdb/evdb-5.png', },
          { src: '/img/evdb/evdb-6.png', },
        ],
        flex: 6,
        link: 'https://evdb.io'
      },
    ],
  }),

  components: {
    Project
  }
}
</script>

<style>

.project-link {
  color: #FFFFFF !important;
  text-decoration: none;
}
.project-link:hover {
  text-decoration: none;
}
.projects-row {
  max-width: 1000px;
}

</style>