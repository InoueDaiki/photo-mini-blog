<template>
  <b-card no-body class="mb-3">
    <b-card-body class="py-2">
      <b-card-text>
        <strong>{{ owner }}</strong>
      </b-card-text>
    </b-card-body>

    <b-card-img :src="imageUrl" class="rounded-0"></b-card-img>

    <b-card-body>
      <b-card-text>
        <div v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.owner }}</strong>
          {{ comment.content }} <br />
          <small>{{ comment.createdAt }}</small>
        </div>
      </b-card-text>
    </b-card-body>

    <b-card-body class="border-top py-2">
      <b-card-text>
        <b-input-group>
          <b-form-input
            v-model="newComment"
            placeholder="コメントを追加..."
            class="p-0 border-0 shadow-none"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              variant="link"
              class="text-decoration-none shadow-none"
              @click="onSubmit"
            >
              投稿する
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    owner: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newComment: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.newComment)
      this.newComment = ''
    },
  },
}
</script>
