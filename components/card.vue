<template>
  <b-card no-body class="mb-3">
    <b-card-body class="py-2">
      <b-card-text>
        <strong>{{ post.username }}</strong>
      </b-card-text>
    </b-card-body>

    <b-card-img :src="post.imageUrl" class="rounded-0"></b-card-img>

    <b-card-body>
      <b-card-text>
        <div v-for="comment in post.comments.items" :key="comment.id">
          <strong>{{ comment.username }}</strong>
          {{ comment.content }} <br />
          <small>{{ comment.createdAt }}</small>
        </div>
        <b-button v-if="post.comments.nextToken">さらに読み込む</b-button>
      </b-card-text>
    </b-card-body>

    <b-card-body class="border-top py-2">
      <b-card-text>
        <b-form @submit.prevent="onSubmit">
          <b-input-group>
            <b-form-input
              v-model="newComment"
              placeholder="コメントを追加..."
              class="p-0 border-0 shadow-none"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                type="submit"
                variant="link"
                class="text-decoration-none shadow-none"
              >
                投稿する
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      newComment: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.post.id, this.newComment)
      this.newComment = ''
    },
  },
}
</script>
