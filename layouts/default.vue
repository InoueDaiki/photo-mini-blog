<template>
  <div>
    <b-navbar toggleable="sm" variant="light" sticky class="border-bottom">
      <b-container>
        <nuxt-link to="/">
          <b-navbar-brand>Photo mini blog</b-navbar-brand>
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/new">投稿する</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item @click="logout">ログアウト</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
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
