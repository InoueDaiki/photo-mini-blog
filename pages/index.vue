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
import { mapState } from 'vuex'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { listPosts } from '@/assets/graphql/queries'
import { createComment } from '~/assets/graphql/mutations'

export default {
  middleware: ['auth'],
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    ...mapState(['user']),
  },
  async mounted() {
    await this.fetchPosts()
  },
  methods: {
    async onSubmit(postID, content) {
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            postID,
            content,
            username: this.user.username,
          },
        })
      )
      await this.fetchPosts()
    },
    async fetchPosts() {
      const response = await API.graphql(
        graphqlOperation(listPosts, {
          limit: 1000,
        })
      )
      this.posts = await Promise.all(
        response.data.listPosts.items
          .sort((post) => post.createdAt)
          .reverse()
          .map(async (post) => {
            post.comments.items = post.comments.items.map((comment) => {
              comment.createdAt = new Date(comment.createdAt).toLocaleString()
              return comment
            })
            post.imageUrl = await Storage.get(post.s3key)
            return post
          })
      )
    },
  },
}
</script>
