<template>
  <b-row>
    <b-col cols="12" sm="6">
      <b-form>
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
      </b-form>
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
      file: null,
      imageURL: '',
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
  methods: {
    onChangeFormFile(file) {
      if (file) this.imageURL = URL.createObjectURL(file)
    },
  },
}
</script>
