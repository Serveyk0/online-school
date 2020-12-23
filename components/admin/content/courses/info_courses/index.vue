<template>
  <div class="info-courses">
    <h3>{{ COURSES_TITLE }}</h3>
    <div class="info-courses-block">
      <div
        class="course-one"
        v-for="(course, index) in info_courses"
        :key="index"
      >
        <GetInfo :index="index + 1" :course="course" />
      </div>
    </div>
  </div>
</template> 

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