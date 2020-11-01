<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
        class="mb-3"
        @submit="onSubmit"
      ></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    await this.fetchPosts()
  },
  methods: {
    async onSubmit(postID, content) {
      // TODO: use GraphQL
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await this.fetchPosts()
    },
    async fetchPosts() {
      // TODO: use GraphQL
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.posts = [
        {
          id: 'UUID will be here',
          username: 'Alice',
          s3key: 'UUID will be here',
          imageUrl: 'https://picsum.photos/400/300',
          comments: {
            items: [
              {
                createdAt: new Date().toLocaleString(),
                username: 'Alice',
                content: 'First comment',
              },
              {
                createdAt: new Date().toLocaleString(),
                username: 'Bob',
                content: 'Seccond comment',
              },
            ],
          },
        },
      ]
    },
  },
}
</script>
