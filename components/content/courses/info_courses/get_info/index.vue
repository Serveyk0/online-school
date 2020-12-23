<template>
  <fragment>
    <p class="course-number">{{ index + 1 }}</p>
    <p class="course-text">{{ course }}</p>
  </fragment>
</template> 

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
          value > 0
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