<template>
    <div class="main-content">
      <OnlineSchool />
      <Courses />
    </div>
</template> 

<style lang="sass" scoped>
 @import '~~/assets/sass/main-content'
 @import '~~/assets/sass/common'
 @import '~~/assets/sass/default'
</style>


<script>
import OnlineSchool from '~~/components/admin/content/online-school';
import Courses      from '~~/components/admin/content/courses';
export default {
  name: 'MainContent',
    components: {
    OnlineSchool,
    Courses,
  },
}
</script>