<template>
  <b-modal
    visible
    centered
    hide-header
    hide-footer
    no-fade
    no-close-on-backdrop
    no-close-on-esc
    hide-backdrop
    modal-class="overflow-hidden"
    content-class="border-0"
  >
    <amplify-authenticator>
      <amplify-sign-up
        slot="sign-up"
        :form-fields.prop="formFields"
      ></amplify-sign-up>
    </amplify-authenticator>
  </b-modal>
</template>

<script>
import '@aws-amplify/ui-vue'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  layout: 'login',
  data() {
    return {
      formFields: [
        { type: 'username', required: true },
        { type: 'email', required: true },
        { type: 'password', required: true },
      ],
    }
  },
  created() {
    onAuthUIStateChange((authState, authData) => {
      if (authState === 'signedin') this.$router.push('/')
    })
  },
}
</script>
