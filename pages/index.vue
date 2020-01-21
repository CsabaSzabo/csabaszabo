<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <!-- Introduction -->
      <div class="intro-section text-center">
        <p class="intro-title">Csaba Szabo, Frontend Developer</p>
        <p class="intro-description">I love to build useable, reliable and fast websites.</p>
        <CsabaImage/>

        <img class="intro-illustration" src="/img/undraw_progressive_app_dark.svg"/>
      </div>

      

      <!-- Info card -->
      <p>Hi, I'm Csaba. Nice to meet you.</p>

      <p>I'm an experienced Product Engineer with 6+ years of Software Product Development experience in various roles, Web Development in the last 2 years.</p>
      <p>I worked in various roles:</p>
      <ul>
        <li>Web and Data Engineering (aroundsound.com, villanyautok.com)</li>
        <li>Product management (bankracio.hu / money.hu)</li>
        <li>Product management (Skyscanner)</li>
        <li>App release and Software engineering (Skyscanner)</li>
        <li>Software testing (CocktailFlow, RedBullTV, Gneo, Skyscanner apps, ...)</li>
      </ul>

      <v-card>
        <div class="text-center skill-card-content">
          <v-icon large class="skill-icon">mdi-monitor-cellphone</v-icon>
          <p class="skill-title">Front-end Development</p>
        </div>
      </v-card>

      <v-card class="skill-card skill-card-content">
        <div class="text-center">
          <v-icon large class="skill-icon">mdi-google</v-icon>
          <p class="skill-title">Technical SEO</p>
        </div>
      </v-card>

      <v-card class="skill-card skill-card-content">
        <div class="text-center">
          <v-icon large class="skill-icon">mdi-google-analytics</v-icon>
          <p class="skill-title">Analytics and Data Analysis</p>
        </div>
      </v-card>

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
        

        <v-card-actions>
          <v-spacer />
          <!-- <v-btn color="primary" nuxt to="/projects">
            Continue
          </v-btn> -->
        </v-card-actions>
      </v-card>

      <!-- Projects -->
      <ProjectGrid></ProjectGrid>

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
}
.intro-illustration {
  padding-top: 120px;
  max-width: 100%;
}

.skill-card-content {
  padding: 8px;
  margin: 8px;
}
.skill-icon {
  padding-bottom: 8px;
}
.skill-title {
  font-weight: 600;
  font-size: 1.2rem;
}

</style>