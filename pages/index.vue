<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card
        v-for="({ owner, imageUrl, comments }, i) in posts"
        :key="i"
        :owner="owner"
        :image-url="imageUrl"
        :comments="comments"
        @submit="(newComment) => onSubmit(i, newComment)"
      ></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      username: 'charlie',
      posts: Array(5)
        .fill()
        .map(() => ({
          owner: 'Alice',
          imageUrl: 'https://picsum.photos/200',
          comments: [
            {
              owner: 'Alice',
              content: 'コメント'.repeat(20),
              createdAt: new Date().toLocaleString(),
            },
            {
              owner: 'Bob',
              content: 'コメント'.repeat(20),
              createdAt: new Date().toLocaleString(),
            },
          ],
        })),
    }
  },
  methods: {
    onSubmit(i, newComment) {
      this.posts[i].comments.push({
        owner: this.username,
        content: newComment,
        createdAt: new Date().toLocaleString(),
      })
    },
  },
}
</script>
