<template>
    <section>
        <div>
            <PostList :posts="posts" :totalPages="totalPages" />
        </div>
    </section>
</template>

<script>
    import PostList from '~/components/posts/PostList.vue'
    import wp from '~/lib/wp'

    export default {
        async asyncData ({ params }) {
            return wp.posts(params.page)
        },
        components: {
            PostList
        }
    }
</script>