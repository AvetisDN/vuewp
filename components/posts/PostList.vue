<template>
    <div>
        <ul class="m-0 p-0">
            <li v-for="post in posts" :key="post.id" class="list-unstyled">
                <PostExcerpt :post="post" />
            </li>
        </ul>
        <nav aria-label="Page navigation example">

            <ul class="pagination">
                <li v-for="i in +totalPages" :key="i" class="page-item" v-bind:class="{'active': i==6}"><a class="page-link" :href="'/posts/' + i">{{i}}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import PostExcerpt from './PostExcerpt.vue'

    export default {
        props: {
            posts: { type: Array },
            totalPages: { type: String },
            pageNum: { type: String }
        },
        components: {
            PostExcerpt
        }
    }
</script>