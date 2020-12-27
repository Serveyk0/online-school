<template>
  <div class="modal">
    <input :v-model="course.name" :value="course.name" v-on:input="changeName" />
    <Specialists :specialists="course.peoples" :file="file" :files="files" />
    <button v-on:click="addSpecialist">Add specialist</button>
    <ShowConsistsOf :consists="course.consists_of" />
    <button v-on:click="addConsistsOf">Add specialist</button>
    <ShowInfoCourses :info_courses="course.info_courses" />
    <button v-on:click="addInfoCourses">Add specialist</button>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
</style>

<script>
import Specialists from './show/show_specialists';
import ShowInfoCourses from './show/show_info_courses';
import ShowConsistsOf from './show/show_consist_of';
export default {
  name: 'Dialog',
  props: ['course', 'files'],
  components: { Specialists, ShowInfoCourses, ShowConsistsOf },
  data() {
    return {
      peoples: '',
      consists: '',
      courses_info: '',
      file: '',
    }
  },
  methods: {
    changeName(e) {
      this.course.name = e.target.value
    },
    addSpecialist() {
      this.course.peoples.push({ name: '', profession: '', img: '' })
    },
    addInfoCourses() {
      this.course.info_courses.push("");
    },
    addConsistsOf() {
      this.course.consists_of.push({ before_text: '', text: '' })
    },
  },
  mounted() {
    console.log(this.course)
  }
}
</script>