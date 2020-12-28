<template>
  <div class="modal">
    <button v-on:click="addInfoCourses">no</button>
    <button v-on:click="close_course">yes</button>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
</style>

<script>
export default {
  name: 'SureWindow',
  props: [
  ],
  components: {  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>