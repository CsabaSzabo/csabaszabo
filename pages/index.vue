<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <!-- Introduction -->
      <div class="intro-section text-center">
        <p class="intro-title">Csaba Szabo, Frontend Developer</p>
        
        <div class="intro-description">
          I love to build websites, which are
          useable, indexable, fast, measurable and reliable.
        </div>

        <CsabaImage/>
      </div>

      

      <!-- Info section -->
      <div class="info-section">
        <p class="info-title">Hi, I'm Csaba. Nice to meet you.</p>

        <p class="info-text">I'm an experienced Product Engineer with 6+ years of Software Product Development experience in various roles, Web Development in the last 2 years.</p>
       
        <div class="info-section-header">I worked in various roles:</div>
        <div class="info-text">Web and Data Engineering (aroundsound.com, villanyautok.com)</div>
        <div class="info-text">Product management (bankracio.hu / money.hu)</div>
        <div class="info-text">Product management (Skyscanner)</div>
        <div class="info-text">App release and Software engineering (Skyscanner)</div>
        <div class="info-text">Software testing (CocktailFlow, RedBullTV, Gneo, Skyscanner apps, ...)</div>
        
      </div>

      <v-container fluid>
        <v-row dense>
          <v-col cols="12" md="4">
            <v-card class="skill-card skill-card-content">
              <div class="text-center">
                <v-icon large class="skill-icon">mdi-monitor-cellphone</v-icon>
                <p class="skill-title">Front-end Development</p>

                <p class="skill-p-1">I like to code and build websites, which are more than a shiny design. I like to build functional websites which the same capabilities as a desktop or mobile app.</p>

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
                <p class="skill-title">Technical SEO</p>

                <p class="skill-p-1">I like to optimise the website for organic traffic, mainly with technical SEO work.</p>

                <p class="skill-card-head">Stats</p>
                <div>Daily 0 to Daily 15k impression and 1k click in a year (villanyautok.com)</div>
                <div>38/86/71/97 LightHouse score (villanyautok.com car list)</div>
                <div>38/79/93/88 LightHouse score (evdb.io home)</div>
                <div>54/88/77/90 LightHouse score (aroundsound.com home)</div>

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
                <p class="skill-title">Analytics and Data Analysis</p>

                <p class="skill-p-1">A good product/feature has no value if we cannot measure that product/feature. I believe that we should plan and implement the analytics events during the feature implementation.</p>

                <p class="skill-card-head">Technologies, experience</p>
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
      <ProjectGrid></ProjectGrid>

      <!-- <p>
        Currently looking for new Web freelancer opportunities besides working on my projects. 
      </p> -->
      
      <a href="https://github.com/CsabaSzabo" target="_blank">
        GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/csaba-sz/" target="_blank">
        LinkedIn
      </a>

    </v-flex>
  </v-layout>
</template>

<script>
import CsabaImage from '~/components/CsabaImage.vue'
import ProjectGrid from '~/components/ProjectGrid.vue'

export default {
  components: {
    CsabaImage,
    ProjectGrid
  }
}
</script>

<style scoped>

.intro-section {
  padding-top: 80px;
  padding-bottom: 48px;
}
.intro-title {
  color: #FFFFFF;
  font-weight: 800;
  line-height: 1.125;
  font-size: 2rem;
}
.intro-description {
  color: #BBBBBB;
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.25rem;
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
  max-width: 700px;

  margin: auto;
  padding-top: 64px;
  padding-bottom: 64px;
}
.info-title {
  font-weight: 800;
  font-size: 1.5rem;
}
.info-text {
  font-weight: 300;
}
.info-section-header {
  font-weight: 500;
}

/* Skill cards */
.skill-card-content {
  padding: 16px;
  margin: 8px;
  margin: auto;
  font-weight: 300;

  max-width: 400px;
  min-height: 635px;
  
}
.skill-icon {
  padding-bottom: 8px;
}
.skill-title {
  font-weight: 600;
  font-size: 1.3rem;

  margin-top: 0px;
  margin-bottom: 16px;
}
.skill-card-head {
  margin-top: 16px;
  margin-bottom: 0px;
  font-weight: 700;
}


</style>