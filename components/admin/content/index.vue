<template>
    <div class="main-content">
      <OnlineSchool />
      <Courses />
    </div>
</template> 

<style lang="sass" scoped>
 @import '~~/assets/sass/main-content'
</style>


<script>
import OnlineSchool from '~~/components/content/online-school';
import Courses      from '~~/components/content/courses';
export default {
  name: 'MainContent',
    components: {
    OnlineSchool,
    Courses,
  },
}
</script>