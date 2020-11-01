<template>
  <b-card :img-src="post.imageUrl" footer-bg-variant="white">
    <div v-for="comment in post.comments.items" :key="comment.id">
      <strong>{{ comment.username }}</strong>
      {{ comment.content }} <br />
      <small>{{ comment.createdAt }}</small>
    </div>

    <template #footer>
      <b-form>
        <b-input-group>
          <b-form-input
            v-model="newComment"
            placeholder="コメントを追加..."
            class="border-0 shadow-none"
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
    </template>
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
}
</script>
