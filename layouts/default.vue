<template>
  <div>
    <div class="container-fluid bg-secondary text-light">
      <div class="container">
        <div class="row">
          <NavBar />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col py-3">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '~/components/common/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>
