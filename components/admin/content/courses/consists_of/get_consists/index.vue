<template>
  <fragment>
    <p class="before-text">{{ before_text }}</p>
    <p class="after-text">{{ text }}</p>
  </fragment>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import { Fragment } from 'vue-fragment';
export default {
  name: 'GetConsists',
  components: {
    Fragment
  },
  props: {
    before_text: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>