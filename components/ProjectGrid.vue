<template>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <Project
            :src="card.src"
            :title="card.title"
            :description="card.description"
            :longDescription="card.longDescription"
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
        description: 'Aroundsound lets you record sound snippets quickly, store them safely, enrich them with notes, and share them.',
        longDescription: 'I build the Aroundsound new website & web app with Vue.js and Nuxt.js (to support server-side rendering). We could easily integrate them with Firebase, our backend system. Many components are reused between our dynamic pages (inspiration, shared recording, my recordings and collections).',
        src: '/img/project-aroundsound_small@1x.png',
        flex: 6,
        link: 'https://aroundsound.com'
      },
      {
        title: 'Aroundsound internal site',
        description: '',
        longDescription: null,
        src: '/img/project-aroundsound-internal_small@1x.png',
        flex: 6
      },
      {
        title: 'Villanyautok.com',
        description: 'A hungarian electric car listing site.',
        longDescription: null,
        src: '/img/project-villanyautok_small@1x.png',
        flex: 6,
        link: 'https://villanyautok.com'
      },
      {
        title: 'EVDB.io (under development)',
        description: 'An international version of villanyautok.com, currently under development.',
        longDescription: null,
        src: '/img/project-evdb_small@1x.png',
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

</style>