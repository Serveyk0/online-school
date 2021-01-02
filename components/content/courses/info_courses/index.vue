<template>
  <div class="info-courses grid">
    <h3 class="info-courses__title">{{ COURSES_TITLE }}</h3>
    <div class="info-courses__block grid">
      <div
        class="course-one grid"
        v-for="(course, index) in info_courses"
        :key="index"
      >
        <GetInfo :index="index" :course="course" />
      </div>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import infoCourses from './constant';
import GetInfo from './get_info';
export default {
  name: 'InfoCourses',
  components: {
    GetInfo
  },
  props: {
    info_courses: {
      type: Array,
      required: true,
      validator: function (value) {
        return (
          value.length !== 0
        )
      },
    },
  },
  data() {
    return {
      COURSES_TITLE: infoCourses.COURSES_TITLE,
    }
  },
}
</script>