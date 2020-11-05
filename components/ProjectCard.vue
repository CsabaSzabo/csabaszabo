<template>
  <v-card class="project-card">
    <v-img
      :src="src"
      class="white--text align-end project-card-image"
      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1)"
      height="250px"
      aspect-ratio=1.6
      @click="openProjectDetails"
    >
    </v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-text class="text--primary">
      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <!-- Open details -->
      <v-btn outlined large color="primary" :to="projectLink" class="mr-1">
        <v-icon left>mdi-information-outline</v-icon>Details
      </v-btn>

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
    projectLink: {
      type: String,
      required: false,
      default: null,
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
    openProjectDetails() {
      this.$router.push(this.projectLink);
    },
  }

}
</script>

<style>

.project-card {
  max-width: 500px;
  margin: auto;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.project-card:hover {
  z-index: 3;
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
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
  padding-top: 28px !important;
  margin: auto;
}
.project-card-image {
  cursor: pointer;
}

</style>