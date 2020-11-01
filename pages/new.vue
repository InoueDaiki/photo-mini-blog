<template>
  <b-row>
    <b-col cols="12" sm="6">
      <b-form>フォーム</b-form>
    </b-col>
    <b-col cols="12" sm="6">
      <h3>プレビュー</h3>
      <card :post="post"></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      imageURL: 'https://picsum.photos/400/300',
    }
  },
  computed: {
    post() {
      return {
        username: 'Alice',
        imageUrl: this.imageURL,
        comments: {
          items: [
            {
              username: 'Alice',
              content: 'Caption will be here',
              createdAt: new Date().toLocaleString(),
            },
          ],
        },
      }
    },
  },
}
</script>
