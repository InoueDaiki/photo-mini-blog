<template>
  <div>
    <b-navbar toggleable="sm" variant="light" sticky class="border-bottom">
      <b-container>
        <nuxt-link to="/">
          <b-navbar-brand>Photo mini blog</b-navbar-brand>
        </nuxt-link>
      </b-container>
    </b-navbar>
    <b-container class="my-3">
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
export default {}
</script>
