<template>
  <div class="show-users">
    <div v-for="(user, index) in users" :key="index">
      <p>{{ user.name }}</p>
      <p>{{ user.surname }}</p>
      <div v-if="user._id !== id">
      <label for="status">Має доступ {{user.status}}</label>
      <input name="status" v-model="user.status" type="checkbox" />
      </div>
    </div>
    <button @click="save">Save</button>
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
      id: ''
    }
  },
  mounted() {
    axios
      .get('http://localhost:3008/api/users/all_users')
      .then((res) => (this.users = res.data));
      this.id = localStorage.id;
  },
  methods: {
    save() {
      axios.post(`http://localhost:3008/api/users/update`, this.users)
    }
  }
}
</script>