<template>
  <b-card :img-src="post.imageUrl">
    <div v-for="comment in post.comments.items" :key="comment.id">
      <strong>{{ comment.username }}</strong>
      {{ comment.content }} <br />
      <small>{{ comment.createdAt }}</small>
    </div>
  </b-card>
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
