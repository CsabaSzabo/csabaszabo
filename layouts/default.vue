<template>
  <v-app >
    
    <!-- App bar -->
    <!-- <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar> -->

    <!-- Content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/projects'
        }
      ],
      right: true,
      title: 'Csaba Szabo'
    }
  }
}
</script>
