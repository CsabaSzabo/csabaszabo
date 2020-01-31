<template>
  <v-layout column justify-center align-center class="blogpost-layout">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>
    
    <!-- Blog Header -->
    <v-container class="text-center px-3">
      <h1 class="text--primary">{{ title }}</h1>
      <div class="text--secondary">{{ year }}</div>
      <div class="text--secondary">{{ description }}</div>
    </v-container>
    
    <!-- Cover image -->
    <!-- <div>
      <ImageResponsive
        :imageURL="'blog/' + id + '/_main.jpg'"
        v-if="!noMainImage"
        width="100%"
        class="elevate-cover__img"
        :alt="'Blog picture'" />
    </div> -->

    <!-- Blog content -->
    <v-container class="small">
      <client-only>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponent" />
      </client-only>
    </v-container>
  </v-layout>
</template>

<script lang="js">
import Breadcrumbs from '~/components/Breadcrumbs'
import DynamicMarkdown from "~/components/blog/Markdown/DynamicMarkdown.vue"

export default {

  async asyncData ({params, app}) {
    const fileContent = await import(`~/contents/en/blog/${params.slug}.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: attr.title,
      year: attr.year,
      id: attr.id,
      cardAlt: attr.cardAlt,
      noMainImage: attr.noMainImage,
      description: attr.description,
      extraComponent: attr.extraComponent,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
      image: {
        main: attr.image && attr.image.main,
        og: attr.image && attr.image.og
      }
    }
  },

  components: {
    DynamicMarkdown,
    Breadcrumbs
  },

  head () {
    return {
      title: this.pageTitle,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: "author", content: "Csaba Szabo" },
        { name: "description", property: "og:description", content: this.description, hid: "description" },
        { property: "og:title", content: this.pageTitle },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },
  
  computed: {
    ogImage () {
      return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
    },
    pageTitle () {
      return this.title + ' – Csaba Szabo';
    },

    extraComponentLoader () {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/components/blog/${this.extraComponent}.vue`)
    },

    breadcrumbs() {
      return [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: this.title },
      ];
    },
  }
}
</script>

<style lang="scss">
.blogpost-layout {
  margin-bottom: 42px;
}

.overflowhidden {
  overflow: hidden;
}
.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease .35s;
  opacity: 0;

  &[lazy='loading'] {
    filter: blur(15px);
    background-repeat: no-repeat!important;
    background-size: contain!important;
  }
  &[lazy='loaded'] {
    opacity: 1;
    background-repeat: no-repeat!important;
    background-size: contain!important;
  }
  .intro {
    display: flex;
  }
}
.elevate-cover {
  display: flex;
  flex-direction: column;
  min-height: 459px;

  @media (min-width: $screen-md){
    flex-direction: row;
  }

  &__img, &__textOffset {
    width: 100%;
  }

  &__left {
    max-width: 500px;
    width: 100%;
    padding: 2rem;
    margin-bottom: auto;

    @media (min-width: $screen-md){
      margin-left: auto;
      padding: 2rem 4rem 2rem 2rem;
    }
  }

  &__title {
    font-size: 3rem;
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $secondary;

    @media (min-width: $screen-sm){
      font-size: 4rem;
    }
  }
  
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.4;
  // color: $secondary;

  > *:not(.datagrid):not(.image-placeholder) {
    // max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: $screen-sm){
    padding: 64px 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 1rem;

    @media (max-width: $screen-sm){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 1rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 1rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 3rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    color: $secondary;
    font-size: 14px;
    padding: .2em .4em;

    @media (min-width: $screen-sm){
      font-size: 16px;
    }
  }
}
</style>
