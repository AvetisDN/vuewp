<template>
    <section class="container">
        <div>
            <PostSingle :post="post" />
        </div>
    </section>
</template>

<script>
    import PostSingle from '~/components/posts/PostSingle.vue'
    import wp from '~/lib/wp'

    export default {
        async asyncData ({ params }) {
            return wp.slug(params.slug)
        },
        components: {
            PostSingle
        }
    }
</script>