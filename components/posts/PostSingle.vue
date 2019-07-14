<template>
    <article>
        <h1 class="title">{{ post.title.rendered }}</h1>
        <div v-html="post.content.rendered"></div>
    </article>
</template>

<script>
    export default {
        props: {
            post: { type: Object }
        }
    }
</script>