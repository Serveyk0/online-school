<template>
  <fragment>
    <span class="course-number">{{ index + 1 }}</span>
    <p class="course-text">{{ course }}</p>
  </fragment>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import { Fragment } from 'vue-fragment';
export default {
  name: 'InfoCourses',
  components: {
    Fragment
  },
  props: {
    index: {
      type: Number,
      required: true,
      validator: function (value) {
        return (
          value >= 0
        )
      },
    },
    course: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          value !== ""
        )
      },
    },
  }
}
</script>