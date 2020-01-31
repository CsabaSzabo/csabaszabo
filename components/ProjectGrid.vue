<template>
  <v-container>
    <v-row dense class="projects-row">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        md="6"
      >
        <ProjectCard
          :src="card.src"
          :title="card.title"
          :description="card.description"
          :longDescription="card.longDescription"
          :screenshots="card.screenshots"
          :projectLink="card.projectLink">
        </ProjectCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ProjectCard from '~/components/ProjectCard.vue'

export default {
  data: () => ({
    cards: [
      {
        title: 'Aroundsound website',
        description: `Aroundsound lets you record sound snippets quickly, store them safely, enrich them with notes, and share them.`,
        src: '/img/project-aroundsound_small@1x.png',
        projectLink: '/project-aroundsound',
      },
      {
        title: 'Aroundsound internal site',
        description: 'The Aroundsound internal site has two functionalities: user-level analytics and inspiration content editor.',
        src: '/img/project-aroundsound-internal_small@1x.png',
        projectLink: '/project-aroundsound-internal',
      },
      {
        title: 'Villanyautok.com',
        description: 'The biggest hungarian electric car listing site, where you could find all the new and used electric and plug-in hybrid cars, reviews, specs and prices.',
        src: '/img/project-villanyautok_small@1x.png',
        projectLink: '/project-villanyautok',
      },
      {
        title: 'EVDB.io (under development)',
        description: 'An international version of villanyautok.com, with new technology stack and new features. Currently under development.',
        src: '/img/project-evdb_small@1x.png',
        projectLink: '/project-evdb',
      },
    ],
  }),

  components: {
    ProjectCard
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
  margin: auto;
}

</style>