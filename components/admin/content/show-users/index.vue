<template>
  <div class="show-users">
    <div class="grid show-users__one" v-for="(user, index) in users" :key="index">
      <p>{{NAME + ": " + user.name }}</p>
      <p>{{SURNAME + ": " + user.surname }}</p>
      <p>{{EMAIL + ": " + user.email }}</p>
      <div v-if="user._id !== id">
        <label for="status">{{ HAVE_ACCESS }}</label>
        <input name="status" v-model="user.status" type="checkbox" />
      </div>
    </div>
    <button class="registration-button" @click="save">{{ SAVE }}</button>
    <button class="registration-button" @click="close">{{ CLOSE }}</button>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/show-users'
</style>


<script>
import axios from 'axios'
import show from './constant'
export default {
  name: 'ShowUsers',
  props: ['close'],
  data() {
    return {
      users: [],
      id: '',
      HAVE_ACCESS: show.HAVE_ACCESS,
      SAVE: show.SAVE,
      NAME: show.NAME,
      SURNAME: show.SURNAME,
      EMAIL: show.EMAIL,
      CLOSE: show.CLOSE
    }
  },
  mounted() {
    axios
      .get('http://localhost:3008/api/users/all_users')
      .then((res) => (this.users = res.data))
    this.id = localStorage.id
  },
  methods: {
    save() {
      axios.post(`http://localhost:3008/api/users/update`, this.users);
      this.close();
    },
  },
}
</script>