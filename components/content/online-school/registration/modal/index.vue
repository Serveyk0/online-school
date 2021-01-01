<template>
  <div className="modal">
    <div className="modal-header">
      <h3 className="modal-title">modal_title</h3>
      <span @click="showModal" className="close">×</span>
    </div>
    <div className="modal-body">
      <p>modal_text</p>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
</style>

<script>
import _Modal from './constant'
import axios from 'axios'
export default {
  name: 'Modal',
  data() {
    return {}
  },
  methods: {
    showModal() {
      this.show_modal = !this.show_modal
    },
  },
}
</script>