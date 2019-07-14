<template>
    <article class="my-2">
        <h4 class="subtitle">{{ post.title.rendered }}</h4>
        <div v-html="post.excerpt.rendered"></div>
        <a :href="'/article/' + post.slug" class="btn btn-sm btn-success">Читать далее</a>
    </article>
</template>

<script>
    export default {
        props: {
            post: { type: Object }
        }
    }
</script>