<template>
  <div class="info-courses">
    <h3>{{ COURSES_TITLE }}</h3>
    <div class="info-courses-block">
      <div
        class="course-one"
        v-for="(course, index) in info_courses"
        :key="index"
      >
        <input
          class="course-text"
          :v-model="course"
          :value="course"
          v-on:input="(event) => changeField(event, index)"
        />
      <button v-if="info_courses.length > 1" v-on:click="deleteInfo(index)">{{DELETE}}</button>
      </div>
    </div>
  </div>
</template> 

<script>
import infoCourses from './constant'
export default {
  name: 'ShowInfoCourses',
  props: ['info_courses'],
  methods: {
    changeField(event, index) {
      this.$set(this.info_courses, index, event.target.value)
    },
    deleteInfo(index) {
      this.info_courses.splice(this.info_courses.indexOf(index));
    }
  },
  data() {
    return {
      COURSES_TITLE: infoCourses.COURSES_TITLE,
      DELETE: infoCourses.DELETE
    }
  },
}
</script>