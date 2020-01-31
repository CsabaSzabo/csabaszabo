<template>
  <v-layout column justify-center align-center class="project-page-layout">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>

    <!-- Introduction -->
    <v-container class="text-center px-3">
      <h1 class="text--primary">Project - {{title}}</h1>
      <div class="text--secondary">{{description}}</div>
    </v-container>

    <v-container>
      <light-gallery
        :images="screenshots"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      ></light-gallery>
      
      <!-- Thumbnails -->
      <v-row class="justify-center">
        <div
          v-for="(image, imageIndex) in thumbnails"
          :key="imageIndex"
          class="thumb project-image-thumbnail"
          @click="index = imageIndex"
        >
          <img :src="image">
        </div>
      </v-row>
      
      <!-- Open website -->
      <div class="text-center mt-5">
        <v-btn v-if="link" large color="accent" :href="link" target="_blank" class="m-auto">
          <v-icon left>mdi-open-in-new</v-icon>Open website
        </v-btn>
        <div v-else>
          <v-btn disabled large color="accent">
            <v-icon left>mdi-open-in-new</v-icon>Open website
          </v-btn>
          <p><i>The access to the website is restricted.</i></p>
        </div>
      </div>
      
      <div v-html="longDescription" class="project-details-card-text"></div>
    </v-container>
  </v-layout>
</template>

<script>
import { LightGallery } from 'vue-light-gallery';
import Breadcrumbs from '~/components/Breadcrumbs'

export default {
  props: [
    "title",
    "description",
    "longDescription",
    "screenshots",
    "thumbnails",
    "link",
    "projectLink"
  ],
  data() {
    return {
      index: null,
    }
  },
  computed: {
    breadcrumbs() {
      return [
        { text: 'Home', href: '/' },
        { text: this.title },
      ];
    }
  },
  components: {
    Breadcrumbs
  }
}
</script>

<style>
.project-page-layout {
  margin-bottom: 42px;
}
.project-image-thumbnail {
  cursor: zoom-in;
  border: 1px solid;
  margin: 3px;
}
</style>