<template>
  <div class="main-course grid grid-gap grid-align-center">
    <p class="main-course__left ">{{course_text}}</p>
    <img class="main-course__right" :src="'/images/' + course_image"
        :alt="course_image" />
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
export default {
  name: 'MainCourse',
  props: {
    course_text: {
      type: String,
      required: true,
    },
    course_image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>