<template>
  <section>
    <div class="blogs__top text-center">
      <h1 class="blogs-title text--primary">Blogposts</h1>
    </div>
    <ul class="blogs">
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog" />
    </ul>
  </section>
</template>
<script>
import BlogCard from '~/components/blog/BlogCard'

export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.blogs {
  margin: 0;
  
  @media (min-width: $screen-sm){
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    display: grid;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.blogs-title {
  margin-left: auto;
  margin-right: auto;
}

</style>

