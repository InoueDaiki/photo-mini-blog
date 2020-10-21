<template>
  <b-row align-h="center">
    <b-col cols="12" sm="6">
      <b-card no-body>
        <b-card-body class="py-2">
          <b-card-text>
            <strong>ユーザ名</strong>
          </b-card-text>
        </b-card-body>

        <b-card-img
          src="https://picsum.photos/200"
          class="rounded-0"
        ></b-card-img>

        <b-card-body>
          <b-card-text>
            <strong>ユーザ名</strong>
            {{ 'コメント'.repeat(20) }} <br />
            <small>n時間前</small>
          </b-card-text>
        </b-card-body>

        <b-card-body class="border-top py-2">
          <b-card-text>
            <b-input-group>
              <b-form-input
                autofocus
                placeholder="コメントを追加..."
                class="p-0 border-0 shadow-none"
              ></b-form-input>
              <b-input-group-append>
                <b-button
                  variant="link"
                  class="text-decoration-none shadow-none"
                >
                  投稿する
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {}
</script>
