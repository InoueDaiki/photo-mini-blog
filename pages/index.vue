<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card v-for="(post, i) in posts" :key="i" :post="post"></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      posts: [
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
      ],
    }
  },
}
</script>
