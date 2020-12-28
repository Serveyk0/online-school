<template>
  <div class="modal">
    <button v-on:click="closeCourse">no</button>
    <button v-on:click="deleteCourse">yes</button>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
</style>

<script>
export default {
  name: 'SureWindow',
  props: ['_id', 'delete_course', 'close_delete'],
  components: {},
  data() {
    return {}
  },
  methods: {
    closeCourse() {
      this.close_delete();
    },
    deleteCourse() {
      this.delete_course(this._id)
      this.close_delete();
    },
  },
}
</script>