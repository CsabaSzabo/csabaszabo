<template>
  <v-layout column justify-center align-center class="blogpost-layout">
    <!-- Breadcrumbs -->
    <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>
    
    <div class="container">
      <BlogSection :blogs="blogs"/>
    </div>
  </v-layout>
</template>

<script>
import BlogSection from "~/components/blog/Sections/BlogSection"
import Breadcrumbs from '~/components/Breadcrumbs'

import blogsEn from '~/contents/en/blogsEn.js'

export default {
  async asyncData ({app}) {

    const blogs = blogsEn;
    
    async function asyncImport (blogName) {
      const wholeMD = await import(`~/contents/en/blog/${blogName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog)))
    .then((res) => {
      return {
        blogs: res
      }
    })
  },

  data() {
    return {
      meta: {
        title: 'Csaba Szabo - Frontend Developer',
        description: 'I’m a Frontend Developer, SEO and Analytics expert based in Budapest.',
      },
    }
  },
  
  components: {
    BlogSection,
    Breadcrumbs
  },

  head () {
    return {
      title: this.meta.title,
      htmlAttrs: {
        lang: 'en',
      },
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      meta: [
        { name: "author", content: "Csaba Szabo" },
        { name: "description", property: "og:description", content: this.meta.description, hid: "description" },
        { property: "og:title", content: this.meta.title },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.meta.description },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },

  computed: {
    ogImage: function () {
      return;
    },
    breadcrumbs() {
      return [
        { text: 'Home', href: '/' },
        { text: 'Blog' },
      ];
    }
  }
}
</script>
