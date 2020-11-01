<template>
  <b-row>
    <b-col cols="12" sm="6">
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="写真" label-cols="3" label-for="photo">
          <b-form-file
            id="photo"
            v-model="file"
            required
            accept="image/*"
            placeholder="選択されていません"
            browse-text="ファイルを選択"
            drop-placeholder="ここにドロップ"
            @input="onChangeFormFile"
          ></b-form-file>
        </b-form-group>

        <b-form-group label="コメント" label-cols="3" label-for="comment">
          <b-form-input
            id="comment"
            v-model="comment"
            required
            placeholder="キャプションを入力..."
          ></b-form-input>
        </b-form-group>

        <div class="text-right">
          <b-button type="submit" variant="primary">シェア</b-button>
        </div>
      </b-form>
    </b-col>
    <b-col cols="12" sm="6">
      <h3>プレビュー</h3>
      <card :post="post"></card>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import { createPost, createComment } from '@/assets/graphql/mutations'

export default {
  middleware: ['auth'],
  data() {
    return {
      file: null,
      comment: '',
      imageURL: '',
    }
  },
  computed: {
    ...mapState(['user']),
    post() {
      return {
        username: this.user.username,
        imageUrl: this.imageURL,
        comments: {
          items: [
            {
              username: this.user.username,
              content: this.comment,
              createdAt: new Date().toLocaleString(),
            },
          ],
        },
      }
    },
  },
  methods: {
    onChangeFormFile(file) {
      if (file) this.imageURL = URL.createObjectURL(file)
    },
    async onSubmit() {
      const s3key = 'UUID will be here'
      // TODO: use S3
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const response = await API.graphql(
        graphqlOperation(createPost, {
          input: {
            username: this.user.username,
            s3key,
          },
        })
      )
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            postID: response.data.createPost.id,
            username: this.user.username,
            content: this.comment,
          },
        })
      )
      this.$router.push('/')
    },
  },
}
</script>
