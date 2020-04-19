<template>
  <v-app>

    <!-- Header -->
    <v-app-bar fixed flat class="secondary cssz-appbar">

      <v-container>
        <v-row class="align-center">
          <nuxt-link class="mt-3" to="/">
            <img
              class="big-logo-img"
              alt="CsabaSzabo logo"
              :id="$vuetify.theme.dark ? 'big-logo-img-dark' : 'big-logo-img-light'"
              :src="$vuetify.theme.dark ? '/img/logo-csabaszabo-darknobg-48px@1x.png' : '/img/logo-csabaszabo-lightnobg-48px@1x.png'"
            >
          </nuxt-link>
          <v-spacer></v-spacer>
          <v-btn depressed active-class="v-btn-active" to="/blog">Blog</v-btn>
        </v-row>
      </v-container>
      
    </v-app-bar>

    <!-- Content -->
    <v-content class="csabaszabo-content">
      <v-container fluid class="pr-0 pl-0">
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="footer-card-title secondary py-6">
          <strong class="subheading mr-0 mr-sm-3 mr-md-5 text--primary">Get connected with me!</strong>

          <v-btn
            v-for="socialItem in socialItems"
            :key="socialItem.id"
            class="mx-4"
            icon
            :aria-label="socialItem.ariaLabel"
          >
            <a :href="socialItem.link" target="_blank" rel="noopener" class="a-clean">
              <v-icon class="text--primary" large>{{ socialItem.icon }}</v-icon>
            </a>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — Made with <strong>Nuxt.js</strong> and <strong>Vuetify</strong> ({{$vuetify.theme.dark ? "dark mode" : "light mode"}})
        </v-card-text>
      </v-card>
    </v-footer>

    <script src="https://profile.codersrank.io/widget/widget.js"></script>
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
        { id: 'social-item-1', icon: 'mdi-github-circle', link: 'https://github.com/CsabaSzabo', ariaLabel: 'GitHub' },
        { id: 'social-item-2', icon: 'mdi-linkedin-box', link: 'https://www.linkedin.com/in/csaba-sz', ariaLabel: 'LinkedIn' },
        { id: 'social-item-3', icon: 'mdi-medium', link: 'https://medium.com/@csabb', ariaLabel: 'Medium' },
        { id: 'social-item-4', icon: 'mdi-stack-overflow', link: 'https://stackoverflow.com/users/1173971/szab%C3%B3-csaba', ariaLabel: 'StackOverflow' },
        { id: 'social-item-5', icon: 'mdi-email', link: 'mailto:csaba.szabo4@gmail.com?Subject=Hello%20Csaba', ariaLabel: 'E-mail' },
      ],
    }
  },

  mounted() {
    this.initDarkMode();
  },

  methods: {
    initDarkMode() {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      try {
        // Chrome & Firefox
        darkMediaQuery.addEventListener('change', (e) => {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        });
      } catch (e1) {
        try {
          // Safari
          darkMediaQuery.addListener((e) => {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          });
        } catch (e2) {
          console.error(e2);
        }
      }

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
.csabaszabo-content {
  margin-top: 56px;
}
.footer-card-title {
  justify-content: center;
}
.a-clean {
  color: white;
  text-decoration: none;
}
.cssz-appbar {
  background: transparent;
}
.big-logo-img {
  max-height: 48px;
}

/*****
* Retina image handling
*/

/* Normal Resolution CSS */
#big-logo-img-dark {
  content:url('/img/logo-csabaszabo-darknobg-48px@1x.png')
}
#big-logo-img-light {
  content:url('/img/logo-csabaszabo-lightnobg-48px@1x.png')
}
/* HD/Retina CSS */
@media
only screen and (-webkit-min-device-pixel-ratio: 1.25),
only screen and ( min--moz-device-pixel-ratio: 1.25),
only screen and ( -o-min-device-pixel-ratio: 1.25/1),
only screen and ( min-device-pixel-ratio: 1.25),
only screen and ( min-resolution: 200dpi),
only screen and ( min-resolution: 1.25dppx)
{
	#big-logo-img-dark {
    content:url('/img/logo-csabaszabo-darknobg-48px@2x.png')
  }
  #big-logo-img-light {
    content:url('/img/logo-csabaszabo-lightnobg-48px@2x.png')
  }
}


</style>