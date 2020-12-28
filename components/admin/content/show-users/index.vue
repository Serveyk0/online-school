<template>
  <div class="show-users">
    <div v-for="(user, index) in users" :key="index">
      {{ user.name }}
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/show-users'
</style>


<script>
import axios from 'axios'
export default {
  name: 'ShowUsers',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:3008/api/users/all_users')
      .then((res) => (this.users = res.data));
  },
}
</script>