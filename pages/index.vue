<template>
  <v-layout column justify-center align-center>

    <!-- Introduction -->
    <div class="intro-section text-center px-3">
      <h1 class="text--primary">Csaba&nbsp;Szabo, Frontend&nbsp;Developer</h1>
      <div class="intro-description text--secondary">
        I love to build websites, which are
        useable, indexable, fast, measurable and reliable.
      </div>
      <CsabaImage/>
    </div>

    <!-- Info section -->
    <v-container fluid class="secondary">
      <v-col class="info-section">
        <h3 class="text--primary">Hi, nice to meet you.</h3>
        <p class="info-text text--secondary">I'm an experienced Product Engineer with 6+ years of Software Product Development experience in various roles, I did Web Development during the last 2 years.</p>
      
        <div class="info-section-header text-primary">I worked in various roles:</div>
        <div class="info-text text--secondary">Web and Data Engineering (<a href="https://aroundsound.com/" target="_blank" rel="noopener">aroundsound.com</a>,&nbsp;<a href="http://villanyautok.com/" target="_blank" rel="noopener">villanyautok.com</a>, <a href="https://evdb.io" target="_blank" rel="noopener">evdb.io</a>)</div>
        <div class="info-text text--secondary">Product management (<a href="https://www.bankracio.hu/" target="_blank" rel="noopener">bankracio.hu</a>&nbsp;/&nbsp;<a href="https://www.money.hu/" target="_blank" rel="noopener">money.hu</a>)</div>
        <div class="info-text text--secondary">Product management (<a href="http://skyscanner.com/" target="_blank" rel="noopener">Skyscanner</a>)</div>
        <div class="info-text text--secondary">App release and Software engineering (<a href="http://skyscanner.com/" target="_blank" rel="noopener">Skyscanner</a>)</div>
        <div class="info-text text--secondary">Software testing (<a href="https://cocktailflow.com/" target="_blank" rel="noopener">CocktailFlow</a>, <a href="https://www.redbull.com/" target="_blank" rel="noopener">RedBullTV</a>, <a href="http://gneo.co/" target="_blank" rel="noopener">Gneo</a>, Skyscanner apps, ...)</div>
      </v-col>
    </v-container>

    <!-- Skills -->
    <v-container class="skills-section">
      <h2 class="text--primary text-center pb-4">Interest areas & Skills</h2>
      <v-row dense>
        <v-col cols="12" md="4">
          <v-card class="skill-card skill-card-content">
            <div class="text-center">
              <v-icon large class="skill-icon">mdi-monitor-cellphone</v-icon>
              <h3 class="text--primary">Frontend Development</h3>

              <p class="skill-description">
                I like to build functional websites, which almost have the same capability as a desktop or mobile app.
              </p>

              <p class="skill-card-head">Technologies</p>
              <div>Vue.js, Nuxt.js</div>
              <div>Server-side rendering</div>
              <div>JavaScript</div>
              <div>Node.js, Express</div>
              <div>HTML, CSS</div>
              <div>Web scraping</div>

              <p class="skill-card-head">Dev Tools and Services</p>
              <div>Visual Studio Code</div>
              <div>GitHub, GitLab</div>
              <div>Lighthouse</div>
              <div>Terminal</div>
              <div>Chrome DevTools</div>
              <div>Firebase, Google App Engine</div>

            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="skill-card skill-card-content">
            <div class="text-center">
              <v-icon large class="skill-icon">mdi-google</v-icon>
              <h3>Technical SEO</h3>

              <p class="skill-description">
                I like to optimise the websites for searchibility and organic traffic, mainly with technical SEO work.
              </p>

              <p class="skill-card-head">Stats</p>
              <div>Daily 15k impression and 1k click in a year (villanyautok.com)</div>
              <div>54/88/77/90 Lighthouse score (aroundsound.com)</div>

              <p class="skill-card-head">Tools and Services</p>
              <div>Google Search Console</div>
              <div>Lighthouse</div>
              <div>Ahrefs, Ubersuggest, SimilarWeb</div>
              
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="skill-card skill-card-content">
            <div class="text-center">
              <v-icon large class="skill-icon">mdi-google-analytics</v-icon>
              <h3 v-if="screenLg">Analytics and Data Analysis</h3>
              <h3 v-else>Analytics and Data</h3>

              <p class="skill-description">
                A good product has good analytics. Implementating analytics is part of the feature development.
              </p>

              <p class="skill-card-head">Technologies and Experience</p>
              <div>Google Analytics</div>
              <div>Google Tag Manager</div>
              <div>HotJar</div>
              <div>Client-side analytics</div>
              <div>Server-side analytics</div>
              <div>BigQuery, scheduled query</div>
              <div>A/B test implementation and analysis</div>
              <div>Google Data Studio</div>
              <div>Implemeting own analytics tool</div>

            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects -->
    <v-container fluid class="projects-section secondary">
      <h2 class="text--primary text-center">My Recent Work</h2>
      <ProjectGrid></ProjectGrid>
    </v-container>

    <!-- Contact me -->
    <v-container fluid class="">
      <v-col class="contact-me-section">
        <h2 class="text--primary">Interested in working together?</h2>
        <p class="text--secondary">I'm currently open for new projects (weekly <=20 hours) besides working on my current projects.</p>

        <form v-if="!formSubmitted">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            filled
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            filled
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-select
            v-model="selectedProject"
            :items="projectItems"
            :error-messages="selectErrors"
            label="Type of project"
            required
            filled
            @change="$v.selectedProject.$touch()"
            @blur="$v.selectedProject.$touch()"
          ></v-select>
          <v-textarea
            v-model="notes"
            filled
            name="input-additional-notes"
            label="Additional notes"
          ></v-textarea>
          
          <!-- Send button -->
          <v-btn
            :disabled="sendButtonDisabled"
            class="mr-4"
            @click="writeNewContact">
            send
          </v-btn>

          <!-- Clear button -->
          <v-btn
            v-if="name || email || selectedProject || notes"
            class="secondary"
            @click="clear">
            clear
          </v-btn>

        </form>
        <div v-else-if="!formSubmittedError" class="pt-3">
          <p class="headline text--secondary">Thanks for reaching out. I'll contact you soon, but you could write an email to csaba.szabo4[at]gmail[dot]com if it's really important.</p>
        </div>
        <div v-else class="pt-3">
          <p class="headline text--secondary">Unfortunately an error happened, I didn't get your message. <b>Please write an email to csaba.szabo4[at]gmail[dot]com</b> so I'll get your message.</p>
          <p>Error:</p>
          <code>{{formSubmittedError}}</code>
        </div>
      </v-col>
    </v-container>

  </v-layout>
</template>

<script>
// Libs
import uuidv4 from 'uuid/v4';
import { fireDb } from '~/plugins/firebase.client.js'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

// Components
import CsabaImage from '~/components/CsabaImage.vue'
import ProjectGrid from '~/components/ProjectGrid.vue'



export default {
  mixins: [validationMixin],

  data: () => ({
    formSubmitted: false,
    formSubmittedError: null,
    name: '',
    email: '',
    selectedProject: null,
    notes: '',
    projectItems: [
      'Web development',
      'SEO',
      'Analytics',
      'Consultancy',
    ],
  }),

  validations: {
    name: { required },
    email: { required, email },
    selectedProject: { required },
  },

  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.selectedProject.$dirty) return errors
      !this.$v.selectedProject.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },

    sendButtonDisabled() {
      var areTextsEmpty = (this.name === '' || this.email === '' || this.selectedProject === null);
      var isNameError = this.nameErrors ? this.nameErrors.length > 0 : false;
      var isEmailError = this.emailErrors ? this.emailErrors.length > 0 : false;
      var isProjectError = this.selectErrors ? this.selectErrors.length > 0 : false;
      return areTextsEmpty || isNameError || isEmailError || isProjectError;
    },

    screenLg() {
      return (this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl');
    }
  },

  methods: {
    async writeNewContact() {
      this.$v.$touch();

      // Write to DB
      try {
        await fireDb.collection("contacts").doc(uuidv4()).set({
          name: this.name,
          email: this.email,
          notes: this.notes,
          project: this.selectedProject,
          submittedDate: new Date(),
        });
        this.formSubmitted = true;
      } catch(e) {
        this.formSubmitted = true;
        this.formSubmittedError = e;
      }

    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.selectedProject = null
    },
  },

  components: {
    CsabaImage,
    ProjectGrid
  },

}
</script>

<style scoped>

.intro-section {
  padding-top: 80px;
  padding-bottom: 96px;
}
.intro-description {
  font-weight: 300;
  max-width: 500px;
  margin: auto;
  padding-bottom: 24px;
}
.intro-description-ending {
  margin-left: 110px;
}

/* Info section */
.info-section {
  text-align: center;
  margin: auto;
  padding-top: 96px;
  padding-bottom: 96px;

  max-width: 700px;
}
.info-text {
  font-weight: 400;
}
.info-section-header {
  font-weight: 500;
}

/* Skill cards */
.skills-section {
  padding-top: 96px;
  padding-bottom: 96px;
}
.skill-card-content {
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 300;
  max-width: 400px;
}
@media (min-width: 960px){
  .skill-card-content {
    min-height: 870px;
  }
}
@media (min-width: 1264px){
  .skill-card-content {
    min-height: 750px;
  }
}


.skill-icon {
  padding-bottom: 8px;
}
.skill-card-head {
  margin-top: 16px;
  margin-bottom: 0px;
  font-weight: 700;
}

.projects-section {
  padding-top: 96px;
  padding-bottom: 96px;
}

/* Contant me section */
.contact-me-section {
  text-align: center;
  margin: auto;
  padding-top: 96px;
  padding-bottom: 96px;

  max-width: 700px;
}

small {
  line-height: 1.2 !important;
}

</style>