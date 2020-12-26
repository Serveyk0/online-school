<template>
  <div class="courses">
    <div class="course" v-for="item in course" :key="item._id">
      <h2 class="course__title">
        {{ COURSE + QUOTE_LEFT + item.name + QUOTE_RIGHT }}
      </h2>
      <Specialists :course_specialists="item.peoples" :name="item.name" />
      <ConsistsOf :consists="item.consists_of" />
      <InfoCourses :info_courses="item.info_courses" />
      <input type="checkbox" id="toggle" />
      <label for="toggle" @click="updateCourse">Ope Overlay</label>
      <dialog class="grid">
        <div v-if="popup">
          <Dialog :course="item" :files="files" />
        </div>
        <label for="toggle">close overlay</label>
      </dialog>
      <button v-on:click="saveUpdateCourse(item)">Update Course</button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import courses from './constant'
import Specialists from './specialists'
import ConsistsOf from './consists_of'
import InfoCourses from './info_courses'
import Dialog from './dialog-window'
import axios from 'axios'
export default {
  name: 'Courses',
  components: {
    Specialists,
    Dialog,
    ConsistsOf,
    InfoCourses,
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
      check_img: 0,
      files: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:3008/api/courses')
      .then((res) => (this.course = res.data))
  },
  methods: {
    updateCourse() {
      this.popup = !this.popup
    },
    saveUpdateCourse(item) {
      const form = {
        name: item.name,
        peoples: item.peoples,
        _id: item._id,
        info_courses: item.info_courses,
        consists_of: item.consists_of,
      }
      for (let j = 0; j < item.peoples.length; j++) {
        if (item.peoples[j].img === '') {
          this.check_img = j
          break
        }
      }
      console.log(this.files)
      for (let i = 0; i < this.files.length; i++) {
        let formData = new FormData();
            formData.append('file', this.files[i]);
        axios
          .post(`http://localhost:3008/api/courses/uploadImage`, formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
          .then((res) => {
            console.log(res.data)
            // this.item.peoples[check_img++] = res.data;
          })
      }
      // axios.post(`http://localhost:3008/api/courses/update`, item)
    },
  },
}
</script>