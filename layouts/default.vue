<template>
  <div>
    <b-navbar variant="light" sticky class="border-bottom">
      <b-container>
        <nuxt-link to="/">
          <b-navbar-brand>Photo mini blog</b-navbar-brand>
        </nuxt-link>

        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="logout">ログアウト</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-container class="my-3">
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert('ログアウト')
    },
  },
}
</script>
