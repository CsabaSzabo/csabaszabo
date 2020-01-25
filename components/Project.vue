<template>

  <v-card class="project-card">
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
      aspect-ratio=1.6
    >
    </v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-text class="text--primary">
      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined color="primary" @click="openWebsite" :href="link" target="_blank" :disabled="!link" class="mr-1">
        <v-icon left>mdi-open-in-new</v-icon>Open 
      </v-btn>

      <!-- [START] Details dialog -->
      <v-dialog v-model="dialog" width="1152" :fullscreen="carouselFullscreen">
        <template v-slot:activator="{ on }">
          <v-btn outlined color="secondary" v-on="on" class="ml-1">
            <v-icon left>mdi-information-outline</v-icon>Details
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-icon left @click="dialog = false">mdi-close</v-icon>
          </v-card-title>
          
          <v-card-text class="project-details-subtitle">{{description}}</v-card-text>

          <v-carousel show-arrows :hide-delimiters="hideDelimiters" :height="carouselHeight" :style="carouselStyle">
            <v-carousel-item v-for="(screenshot,i) in screenshots" :key="i" :src="screenshot.src"></v-carousel-item>
          </v-carousel>

          <v-card-text v-html="longDescription" class="project-details-card-text"></v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- [END] Details dialog -->

      <v-spacer></v-spacer>
    </v-card-actions>

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
      required: false,
      default: null,
    },
    link: {
      type: String,
      required: false,
      default: null,
    },
    screenshots: {
      type: Array,
      required: false,
      default: [],
    },
  },

  data: () => ({
    dialog: false,
  }),

  computed: {
    carouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 200;
        case 'sm': return 345;
        case 'md': return 500;
        case 'lg': return 625;
        case 'xl': return 625;
      }
    },
    carouselStyle() {
      let style = 'margin: auto;';
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return style + 'max-width: 320px;'
        case 'sm': return style + 'max-width: 552px;'
        case 'md': return style + 'max-width: 800px;'
        case 'lg': return style + 'max-width: 1000px;'
        case 'xl': return style + 'max-width: 1000px;'
      }
    },
    carouselFullscreen() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true;
        case 'sm': return false;
        case 'md': return false;
        case 'lg': return false;
        case 'xl': return false;
      }
    },
    hideDelimiters() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true;
        case 'sm': return true;
        case 'md': return false;
        case 'lg': return false;
        case 'xl': return false;
      }
    },
  },

  methods: {
    openWebsite() {
      console.log('openWebsite');
      this.$nuxt.router
    },
    learnMore() {
      console.log('learnMore');
    },
  }

}
</script>

<style>

.project-card {
  max-width: 500px;
  margin: auto;
}
.project-details-subtitle {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  padding-top: 24px !important;

  max-width: 800px;
  margin: auto;
}
.project-details-card-text {
  max-width: 700px;
  padding-top: 28px !important;
  margin: auto;
}

</style>