<template>
  <div class="courses grid">
    <button class="registration-button" @click="addCourse">{{ADD}}</button>
    <dialog v-if="popup_add" class="grid">
      <Dialog
        :course="course[course.length - 1]"
        :files="files"
        :close_course="closeCourse"
        :add_method="addCourseDb"
      />
    </dialog>
    <div class="course grid" v-for="(item, index) in course" :key="index">
      <h2 class="course__title">
        {{ COURSE + QUOTE_LEFT + item.name + QUOTE_RIGHT }}
      </h2>
      <MainCourse :course_text="item.main_course.text" :course_image="item.main_course.img" />
      <Specialists :course_specialists="item.peoples" :name="item.name" />
      <ConsistsOf :consists="item.consists_of" />
      <InfoCourses :info_courses="item.info_courses" />
      <button class="registration-button update" @click="updateCourse(index)">{{UPDATE}}</button>
      <dialog v-if="popup === index" class="grid">
        <Dialog
          :course="item"
          :files="files"
          :close_course="closeCourse"
          :update_method="saveUpdateCourse"
          :delete_method="deleteCourse"
          :text="'Update Course'"
          :_id="item._id"
        />
      </dialog>
      <dialog v-if="show_delete === index" class="grid">
        <SureWindow
          :_id="item._id"
          :delete_course="deleteCourse"
          :close_delete="closeDelete"
        />
      </dialog>
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
import MainCourse from './main_course'
import Dialog from './dialog-window'
import SureWindow from './sure_window'
import axios from 'axios'
export default {
  name: 'Courses',
  components: {
    Specialists,
    Dialog,
    ConsistsOf,
    InfoCourses,
    SureWindow,
    MainCourse,
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
      ADD: courses.ADD,
      UPDATE: courses.UPDATE,
      course: [],
      popup: -1,
      check_img: 0,
      files: [],
      popup_add: false,
      show_delete: -1,
    }
  },
  mounted() {
    axios
      .get(`http://${window.location.hostname}:3007/api/courses`)
      .then((res) => (this.course = res.data))
  },
  methods: {
    updateCourse(index) {
      this.popup = index
    },
    closeCourse() {
      this.popup_add = false
      this.popup = -1
    },
    closeDelete() {
      this.show_delete = -1
    },
    delete_active(index) {
      this.show_delete = index
    },
    addCourse() {
      const new_course = {
        name: '',
        info_courses: [''],
        main_course: { text: '', img: '' },
        consists_of: [{ before_text: '', text: '' }],
        peoples: [{ name: '', profession: '', img: '' }],
      }
      this.course.push(new_course)
      this.popup_add = !this.popup_add
    },
    closeCourse() {
      this.popup_add = false
      this.popup = false
    },
    addCourseDb() {
      this.files = new Set(this.files);
      for (let i = 0; i < this.files.length; i++) {
        let formData = new FormData()
        formData.append('file', this.files[i])
        axios.post(`http://${window.location.hostname}:3007/api/courses/uploadImage`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
      axios
        .post(
          `http://${window.location.hostname}:3007/api/courses`,
          this.course[this.course.length - 1]
        )
        .then((res) => (this.course[this.course.length - 1]._id = res.data._id))
      this.popup_add = false
    },
    deleteCourse(id, index) {
      axios.delete(`http://${window.location.hostname}:3007/api/courses/${id}`).then((res) => {
        console.log(res.data)
        if (res.data.check_delete) {
          this.course.splice(this.course.indexOf(index))
        }
      })
    },
    saveUpdateCourse(item) {
      const form = {
        _id: item._id,
        name: item.name,
        peoples: item.peoples,
        consists_of: item.consists_of,
        info_courses: item.info_courses,
        main_course: { text: item.main_course.text, img: item.main_course.img }
      }

      for (let j = 0; j < item.peoples.length; j++) {
        if (item.peoples[j].img === '') {
          this.check_img = j
          break
        }
      }
      this.files = new Set(this.files);
      for (let i = 0; i < this.files.length; i++) {
        let formData = new FormData()
        formData.append('file', this.files[i])
        axios.post(`http://${window.location.hostname}:3007/api/courses/uploadImage`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
      console.log(form)
      axios.post(`http://${window.location.hostname}:3007/api/courses/update`, item)
    },
  },
}
</script>