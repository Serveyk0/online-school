<template>
  <div class="courses">
    <input type="checkbox" id="toggle" />
    <label for="toggle" @click="addCourse">add Overlay</label>
    <button @click="addCourseDb">add</button>
    <dialog class="grid">
      <div v-if="popup_add">
        <Dialog :course="course[course.length - 1]" :files="files" />
      </div>
      <label for="toggle">close</label>
    </dialog>
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
      popup_add: false,
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
    addCourse() {
      const new_course = {
        name: '',
        info_courses: [''],
        consists_of: [{ before_text: '', text: '' }],
        peoples: [{ name: '', profession: '', img: '' }],
      }
      this.course.push(new_course)
      this.popup_add = !this.popup_add
    },
    addCourseDb() {
      axios.post(`http://localhost:3008/api/courses`, this.course[this.course.length - 1])
    },
    saveUpdateCourse(item) {
      const form = {
        _id: item._id,
        name: item.name,
        peoples: item.peoples,
        consists_of: item.consists_of,
        info_courses: item.info_courses,
      }
      for (let j = 0; j < item.peoples.length; j++) {
        if (item.peoples[j].img === '') {
          this.check_img = j
          break
        }
      }
      console.log(this.files)
      for (let i = 0; i < this.files.length; i++) {
        let formData = new FormData()
        formData.append('file', this.files[i])
        axios.post(`http://localhost:3008/api/courses/uploadImage`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
      console.log(form)
      axios.post(`http://localhost:3008/api/courses/update`, item)
    },
  },
}
</script>