<template>
  <div class="header text-center">
    <h1 class="header__title">{{ title }}</h1>
    <label for="href">{{ EMAIL }}</label>
    <input name="href" type="text" v-model="email" />
    <label for="href">{{ PASSWORD }}</label>
    <input name="href" type="text" v-model="password" />
    <button v-on:click="getUser">{{ IN }}</button>
  </div>
</template> 


<script>
import _Authorisation from './constant'
import axios from 'axios'

export default {
  name: 'Authorisation',
  props: { method: { type: Function } },
  data: () => ({
    title: _Authorisation.TITLE,
    NAME: _Authorisation.NAME,
    SURNAME: _Authorisation.SURNAME,
    EMAIL: _Authorisation.EMAIL,
    PASSWORD: _Authorisation.PASSWORD,
    IN: _Authorisation.IN,
    name: '',
    surname: '',
    email: '',
    password: '',
  }),
  methods: {
    getUser() {
      let form = {
        email: this.email,
        password: this.password,
      }
      axios
        .get(`http://localhost:3008/api/users`, {
          params: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res.data.id)
          if (res.data.id !== '') {
            localStorage.setItem('id', res.data.id);
            this.method();
          }
        })
    },
  },
  
}
</script>