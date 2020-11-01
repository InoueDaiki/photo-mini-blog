<template>
  <b-card :img-src="post.imageUrl"></b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
