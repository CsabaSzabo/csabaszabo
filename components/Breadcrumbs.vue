<template>
  <v-container>
  <v-col>
  <v-row>
    <div v-for="(item, index) in breadcrumbs" :key="item.href">
      <span v-if="index < (breadcrumbs.length - 1)">
        <nuxt-link :to="item.href">{{item.text}}</nuxt-link>
        <span class="mx-2">/</span>
      </span>
      <span v-else>
        {{item.text}}
      </span>
    </div>
  </v-row>
  </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>