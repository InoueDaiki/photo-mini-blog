<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <card
        v-for="(_, i) in 5"
        :key="i"
        :owner="owner"
        :imageUrl="imageUrl"
        :comments="comments"
      ></card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      owner: 'ユーザ名',
      imageUrl: 'https://picsum.photos/200',
      comments: [
        {
          owner: 'ユーザ名',
          content: 'コメント'.repeat(20),
          createdAt: new Date().toLocaleString(),
        },
      ],
    }
  },
}
</script>
