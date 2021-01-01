<template>
  <div class="online-school grid grid-align-center grid-justify-center">
    <Registration v-if="register" />
    <div class="online-school__left grid margin-0-auto">
      <p class="online-school__text">{{ school_text }}</p>
      <button
        class="online-school__registration-button"
        @click="changeRegister"
      >
        {{ registration }}
      </button>
    </div>
    <div class="online-school__right grid">
      <img class="squares" alt="squares" src="~/static/images/huggy.jpg" />
      <img class="sun" alt="sun" src="~/static/images/sun.png" />
      <div class="wrapper_star grid">
        <img class="star" alt="star" src="~/static/images/star.png" />
      </div>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/online-school'
</style>

<script>
import Main from './constant'
import Registration from './registration'
export default {
  name: 'OnlineSchool',
  components: { Registration },
  data() {
    return {
      school_text: Main.SCHOOL_TEXT,
      registration: Main.REGISTRSTION,
      register: false,
    }
  },
  methods: {
    changeRegister() {
      this.register = !this.register
    },
  },
}
</script>