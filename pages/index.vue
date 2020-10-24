<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
        @submit="onSubmit"
      ></card>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '@/assets/graphql/queries'
import { createComment } from '~/assets/graphql/mutations'

export default {
  middleware: ['auth'],
  data() {
    return {
      posts: [],
      nextToken: null,
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
      const response = await API.graphql(graphqlOperation(listPosts))
      this.nextToken = response.data.listPosts.nextToken
      this.posts = response.data.listPosts.items.map((e) => {
        e.imageUrl = e.s3key
        return e
      })
    },
  },
}
</script>
