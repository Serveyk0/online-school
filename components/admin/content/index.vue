<template>
  <div class="main-content">
    <button class="registration-button margin-bottom-50" @click="exit">{{EXIT}}</button>
    <dialog v-if="show" class="grid">
      <ShowUsers :close="showUsers" />
    </dialog>
    <button class="show-users-button registration-button" v-on:click="showUsers">{{ SHOW_USER }}</button>
    <OnlineSchool />
    <Courses />
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/main-content'
@import '~~/assets/sass/courses'
</style>


<script>
import OnlineSchool from '~~/components/admin/content/online-school'
import Courses from '~~/components/admin/content/courses'
import ShowUsers from '~~/components/admin/content/show-users'
import show from './constant'
export default {
  name: 'MainContent',
  components: {
    OnlineSchool,
    Courses,
    ShowUsers,
  },
  data() {
    return {
      show: false,
      EXIT: show.EXIT,
      SHOW_USER: show.SHOW_USER,
    }
  },
  methods: {
    showUsers() {
      this.show = !this.show
    },
    exit() {
      localStorage.removeItem('id');
      window.location.reload(true);
    },
  },
}
</script>