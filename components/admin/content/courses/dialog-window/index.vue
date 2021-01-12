<template>
  <div class="modal grid">
    <div>
      <h4>{{ COURSE_NAME }}</h4>
      <input
        :v-model="course.name"
        :value="course.name"
        v-on:input="changeName"
      />
    </div>
    <div class="grid grid-gap-10">
      <ShowMainCourse :course_text="course.main_course" :files="files" />
      <Specialists :specialists="course.peoples" :file="file" :files="files" />
      <button class="registration-button" v-on:click="addSpecialist">
        {{ ADD_SPECIALIST }}
      </button>
    </div>
    <div class="grid grid-gap-10">
      <ShowConsistsOf :consists="course.consists_of" />
      <button class="registration-button" v-on:click="addConsistsOf">
        {{ ADD_CONSISTS_OF }}
      </button>
    </div>
    <div class="grid grid-gap-10">
      <ShowInfoCourses :info_courses="course.info_courses" />
      <button class="registration-button" v-on:click="addInfoCourses">
        {{ ADD_INFO_COURSES }}
      </button>
    </div>
    <div>
      <button class="registration-button" v-on:click="close_course();">
        {{ CLOSE }}
      </button>
      <button
        class="registration-button"
        v-if="_id !== undefined"
        v-on:click="update_method(course); close_course()"
      >
        {{ UPDATE }}
      </button>
      <button
        class="registration-button"
        v-if="_id !== undefined"
        v-on:click="delete_method(_id); close_course()"
      >
        {{ DELETE }}
      </button>
      <button
        class="registration-button"
        v-if="add_method !== undefined"
        v-on:click="add_method"
      >
        {{ ADD }}
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/modal'
</style>

<script>
import Specialists from './show/show_specialists'
import ShowInfoCourses from './show/show_info_courses'
import ShowMainCourse from './show/show_main_course'
import ShowConsistsOf from './show/show_consist_of'
import _DIALOG from './constant'
export default {
  name: 'Dialog',
  props: [
    'course',
    'files',
    'close_course',
    'method',
    'text',
    'update_method',
    'delete_method',
    'add_method',
    'text',
    '_id',
  ],
  components: { Specialists, ShowInfoCourses, ShowConsistsOf, ShowMainCourse },
  data() {
    return {
      peoples: '',
      consists: '',
      courses_info: '',
      file: '',
      COURSE_NAME: _DIALOG.COURSE_NAME,
      ADD_SPECIALIST: _DIALOG.ADD_SPECIALIST,
      ADD_CONSISTS_OF: _DIALOG.ADD_CONSISTS_OF,
      ADD_INFO_COURSES: _DIALOG.ADD_INFO_COURSES,
      CLOSE: _DIALOG.CLOSE,
      UPDATE: _DIALOG.UPDATE,
      DELETE: _DIALOG.DELETE,
      ADD: _DIALOG.ADD,
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
      this.course.info_courses.push('')
    },
    addConsistsOf() {
      this.course.consists_of.push({ before_text: '', text: '' })
    },
  },
}
</script>