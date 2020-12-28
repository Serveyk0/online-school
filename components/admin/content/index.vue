<template>
  <div class="main-content">
    <dialog v-if="show" class="grid">
      <ShowUsers />
    </dialog>
    <button class="show-users-button" v-on:click="showUsers">Show users</button>
    <OnlineSchool />
    <Courses />
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/main-content'
@import '~~/assets/sass/courses'
</style>


<script>
import OnlineSchool from '~~/components/content/online-school'
import Courses from '~~/components/content/courses'
import ShowUsers from '~~/components/admin/content/show-users'
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
    }
  },
  methods: {
    showUsers() {
      this.show = !this.show
    },
  },
}
</script>