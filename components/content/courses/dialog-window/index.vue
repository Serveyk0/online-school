<template>
  <div class="modal">
    <input name="text" :value="name" />
    <Specialists :specialists="course.peoples" />
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/common'
@import '~~/assets/sass/default'
</style>

<script>
import Specialists from './show/show_specialists'
export default {
  name: 'Dialog',
  props: ['course'],
  components: { Specialists },
    data() {
    return {
      name: "",
      peoples: "",
      consists: "",
      courses_info: "",
    }
  },
  mounted() {
      this.name = this.course.name;
      this.peoples = this.course.peoples;
      this.consists = this.course.consists;
      this.courses_info = this.course.courses_info;
  }
}
</script>