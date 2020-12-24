<template>
  <div class="courses">
    <div class="course" v-for="item in course" :key="item._id">
      <h2 class="course__title">
        {{ COURSE + QUOTE_LEFT + item.name + QUOTE_RIGHT }}
      </h2>
      <Specialists :course_specialists="item.peoples" :name="item.name" />
      <ConsistsOf :consists="item.consists_of" />
      <InfoCourses :info_courses="item.info_courses" />
      <div v-if="popup">
      <Dialog :course="item" />
      </div>
      <button class="button--green" @click="updateCourse">Show modal</button>
    </div>
  </div>
</template>

<script>
import courses from './constant';
import Specialists from './specialists';
import ConsistsOf from './consists_of';
import InfoCourses from './info_courses';
import Dialog from './dialog-window';
import axios from 'axios';
export default {
  name: 'Courses',
  components: {
    Specialists,
    ConsistsOf,
    InfoCourses,
    Dialog
  },
  data() {
    return {
      REGISTRSTION: courses.REGISTRSTION,
      COURSE: courses.COURSE,
      QUOTE_LEFT: courses.QUOTE_LEFT,
      QUOTE_RIGHT: courses.QUOTE_RIGHT,
      SPECIALISTS: courses.SPECIALISTS,
      CONSISTS_OF: courses.CONSISTS_OF,
      COURSES_TITLE: courses.COURSES_TITLE,
      UPDATE: courses.UPDATE,
      course: [],
      popup: false,
    }
  },
  mounted() {
    axios
      .get('http://localhost:3008/api/courses')
      .then((res) => (this.course = res.data))
  },
  methods: {
    updateCourse() {
      this.popup = !this.popup;
    }
  }
}
</script>