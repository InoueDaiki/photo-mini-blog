<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card
        v-for="({ username, imageUrl, comments }, i) in posts"
        :key="i"
        :username="username"
        :image-url="imageUrl"
        :comments="comments"
        @submit="(newComment) => onSubmit(i, newComment)"
      ></card>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['auth'],
  data() {
    return {
      posts: Array(5)
        .fill()
        .map(() => ({
          username: 'Alice',
          imageUrl: 'https://picsum.photos/200',
          comments: [
            {
              username: 'Alice',
              content: 'コメント'.repeat(20),
              createdAt: new Date().toLocaleString(),
            },
            {
              username: 'Bob',
              content: 'コメント'.repeat(20),
              createdAt: new Date().toLocaleString(),
            },
          ],
        })),
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    onSubmit(i, newComment) {
      this.posts[i].comments.push({
        username: this.user.username,
        content: newComment,
        createdAt: new Date().toLocaleString(),
      })
    },
  },
}
</script>
