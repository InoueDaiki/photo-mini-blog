<template>
  <b-row>
    <b-col cols="12" sm="6">
      <b-form @submit="onSubmit">
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
      <card :owner="owner" :image-url="imageUrl" :comments="comments"></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      owner: 'ユーザ名',
      form: {
        file: null,
        comment: '',
      },
    }
  },
  computed: {
    imageUrl() {
      return this.form.file ? URL.createObjectURL(this.form.file) : ''
    },
    comments() {
      return [
        {
          owner: this.owner,
          content: this.form.comment,
          createdAt: new Date().toLocaleString(),
        },
      ]
    },
  },
  methods: {
    onSubmit() {
      this.$router.push('/')
    },
  },
}
</script>
