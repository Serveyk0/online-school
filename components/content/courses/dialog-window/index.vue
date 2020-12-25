<template>
  <div class="modal">
    <input name="text" :v-model="name" :value="name" v-on:input="changeName" />
    <Specialists :specialists="course.peoples" />
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
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
  },
  methods: {
    changeName(e){
      this.course.name = e.target.value;
    }
  }
}
</script>