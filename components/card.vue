<template>
  <b-card>
    {{ post }}
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
}
</script>
