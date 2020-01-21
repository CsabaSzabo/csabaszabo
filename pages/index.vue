<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <CsabaImage />
      </div>

      <!-- Info card -->
      <v-card>
        <v-card-title class="headline">
          Csaba Szabo, Frontend engineer
        </v-card-title>
        <v-card-text>
          <p>
            Young and happy IT guy with experience in App and Web Product Development.
          </p>
          <p>
            5+ years experience in App Product Development:
            <ul>
              <li>Product management (Skyscanner)</li>
              <li>Software engineering (Skyscanner)</li>
              <li>App release engineering (Skyscanner)</li>
              <li>Software testing (CocktailFlow, RedBullTV, Gneo, Skyscanner apps, ...)</li>
            </ul>
          </p>
          <p>
            2+ years experience in Web Product Development:
            <ul>
              <li>Web Development (villanyautok.com, aroundsound.com)</li>
              <li>Product Management (bankracio.hu)</li>
            </ul>
          </p>
          <p>
            In 2018 I started looking into Web Development and Web Product Management.
            <ul>
              <li>started building my VillanyAutok.com site</li>
              <li>worked on Bankracio.hu (part of ingatlan.com) as a Product Manager</li>
              <li>worked on aroundsound.com as a Web Developer</li>
            </ul>
          </p>
          

          <hr class="my-3" />
          <a href="https://github.com/CsabaSzabo" target="_blank">
            GitHub
          </a>
          <br />
          <a href="https://www.linkedin.com/in/csaba-sz/" target="_blank">
            LinkedIn
          </a>
        </v-card-text>
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
