<template>
  <b-row>
    <b-col cols="12" sm="6">
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="写真" label-cols="2" label-for="photo">
          <b-form-file
            id="photo"
            v-model="form.file"
            required
            accept="image/*"
            placeholder="選択されていません"
            browse-text="ファイルを選択"
            drop-placeholder="ここにドロップ"
          ></b-form-file>
        </b-form-group>

        <b-form-group label="コメント" label-cols="2" label-for="comment">
          <b-form-input
            id="comment"
            v-model="form.comment"
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
      <card
        :username="user.username"
        :image-url="imageUrl"
        :comments="comments"
      ></card>
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
      form: {
        file: null,
        comment: '',
      },
    }
  },
  computed: {
    ...mapState(['user']),
    imageUrl() {
      return this.form.file ? URL.createObjectURL(this.form.file) : ''
    },
    comments() {
      return [
        {
          username: this.user.username,
          content: this.form.comment,
          createdAt: new Date().toLocaleString(),
        },
      ]
    },
  },
  methods: {
    async onSubmit() {
      const response = await API.graphql(
        graphqlOperation(createPost, {
          input: {
            username: this.user.username,
            s3key: 'https://picsum.photos/20',
          },
        })
      )
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            postID: response.data.createPost.id,
            username: this.user.username,
            content: this.form.comment,
          },
        })
      )
      this.$router.push('/')
    },
  },
}
</script>
