<template>
  <div class="online-school">
    <Registration v-if="register" />
    <p class="online-school__text">{{ school_text }}</p>
    <button class="online-school__registration-button" @click="changeRegister">
      {{ registration }}
    </button>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/online-school'
</style>

<script>
import Main from './constant';
import Registration from './registration';
export default {
  name: 'OnlineSchool',
  components: { Registration },
  data() {
    return {
      school_text: Main.SCHOOL_TEXT,
      registration: Main.REGISTRSTION,
      register: false
    }
  },
  methods: {
    changeRegister() {
      this.register = !this.register;
    }
  }
}
</script>