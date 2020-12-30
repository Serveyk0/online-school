<template>
  <div id="openModal" class="modal">
    <div class="modal-header">
      <h3 class="modal-title">modal_title</h3>
      <span @click="show_message" class="close">×</span>
    </div>
    <div class="modal-body">
      <p>modal_text</p>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/message'
</style>

<script>
import _Message from './constant'
import axios from 'axios'
export default {
  name: 'Message',
  props: ['show_message'],
  data() {
    return {}
  },
}
</script>