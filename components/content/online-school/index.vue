<template>
  <div class="online-school">
    <p class="online-school__text">{{ school_text }}</p>
    <button class="online-school__registration-button">
      {{ registration }}
    </button>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/online-school'
</style>

<script>
import Main from './constant'
export default {
  name: 'OnlineSchool',
  data() {
    return {
      school_text: Main.SCHOOL_TEXT,
      registration: Main.REGISTRSTION,
    }
  },
}
</script>