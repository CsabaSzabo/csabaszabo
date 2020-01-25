<template>
  <v-app>

    <!-- Content -->
    <v-content>
      <v-container fluid class="pr-0 pl-0">
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="footer-card-title deep-orange ">
          <strong class="subheading mr-0 mr-sm-3 mr-md-5">Get connected with me!</strong>

          <v-btn
            v-for="socialItem in socialItems"
            :key="socialItem"
            class="mx-4"
            dark
            icon
          >
            <a :href="socialItem.link" target="_blank" class="a-clean">
              <v-icon large>{{ socialItem.icon }}</v-icon>
            </a>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — Made with <strong>Nuxt.js</strong> and <strong>Vuetify</strong> (my favourite frameworks)
        </v-card-text>
      </v-card>
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
      title: 'Csaba Szabo',
      socialItems: [
        { icon: 'mdi-github-circle', link: 'https://github.com/CsabaSzabo' },
        { icon: 'mdi-linkedin-box', link: 'https://www.linkedin.com/in/csaba-sz' },
        { icon: 'mdi-medium', link: 'https://medium.com/@csabb' },
        { icon: 'mdi-stack-overflow', link: 'https://stackoverflow.com/users/1173971/szab%C3%B3-csaba' },
        { icon: 'mdi-email', link: 'mailto:csaba.szabo4@gmail.com?Subject=Hello%20Csaba' },
      ],
    }
  },

  mounted() {
    this.initDarkMode();
  },

  methods: {
    initDarkMode() {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      darkMediaQuery.addEventListener('change', (e) => {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      });

      if (darkMediaQuery.matches) {
        console.log('change default light to dark theme');
        // need to set 0 sec timeout to set the dark more after mounted event, due to some bug in the framework
        setTimeout(() => this.$vuetify.theme.dark = true, 0);
      }
    },

  }
}
</script>

<style scoped>
.footer-card-title {
  justify-content: center;
}
.a-clean {
  color: white;
  text-decoration: none;
}
</style>