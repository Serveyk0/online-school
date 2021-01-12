<template>
  <div class="consists-of">
    <h3>{{ COURSE_TEXT }}</h3>
    <div class="consist-block">
      <textarea
        class="before-text"
        :value="course_text.text"
        v-on:input="(event) => changeField(event)"
      />
      <input
        type="file"
        id="file"
        ref="file"
        v-on:change="(event) => handleFileUpload(event)"
      />
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import consist from './constant'
export default {
  name: 'ShowMainCourse',
  props: {
    course_text: {
      type: Object,
      required: true,
    },
    files: {
      required: true,
    },
  },
  methods: {
    changeField(event) {
      this.course_text.text = event.target.value
    },
    handleFileUpload(e) {
      const file = e.target.files[0];
      this.files.push(file)
      this.course_text.img=file.name;
    },
  },
  data() {
    return {
      CONSISTS_OF: consist.CONSISTS_OF,
      DELETE: consist.DELETE,
      COURSE_TEXT: consist.COURSE_TEXT,
    }
  },
}
</script>