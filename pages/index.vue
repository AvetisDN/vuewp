<template>
  <section class="container">
    <div>
      <PostList :posts="posts" />
    </div>
  </section>
</template>

<script>
  import PostList from '~/components/posts/PostList.vue'
  import wp from '~/lib/wp'

  export default {
    async asyncData ({ params }) {
      return wp.posts()
    },
    components: {
      PostList
    }
  }
</script>