<template>

  <v-card class="project-card">
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
    >
    </v-img>

    <v-card-title v-text="title"></v-card-title>

    <v-card-text class="text--primary">
      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <a v-if="link" :href="link" target="_blank" class="project-link">
          <v-icon>mdi-open-in-new</v-icon>
        </a>
        <a v-else>
          <v-icon disabled>mdi-open-in-new</v-icon>
        </a>
      </v-btn>

      <v-btn
        icon
        v-if="longDescription"
        @click="show = !show"
      >
        <!-- {{ show ? 'Hide' : 'More' }} -->
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> 
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{longDescription}}
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    show: false,
  }),

}
</script>

<style>

.project-card {
  max-width: 500px;
  margin: auto;
}

</style>