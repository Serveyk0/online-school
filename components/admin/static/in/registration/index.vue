<template>
  <div class="header text-center">
    <h1 class="header__title">{{ title }}</h1>
    <label for="name">{{ NAME }}</label>
    <input name="name" type="text" v-model="name" />
    <label for="href">{{ SURNAME }}</label>
    <input name="href" type="text" v-model="surname" />
    <label for="href">{{ EMAIL }}</label>
    <input name="href" type="text" v-model="email" />
    <label for="href">{{ PASSWORD }}</label>
    <input name="href" type="text" v-model="password" />
    <button v-on:click="newUser">{{ADD}}</button>
  </div>
</template> 


<script>
import _Registration from './constant';
import axios from 'axios';

export default {
  name: 'Registration',
  data: () => ({
    title: _Registration.TITLE,
    NAME: _Registration.NAME,
    SURNAME: _Registration.SURNAME,
    EMAIL: _Registration.EMAIL,
    PASSWORD: _Registration.PASSWORD,
    ADD: _Registration.ADD,
    name: '',
    surname: '',
    email: '',
    password: '',
  }),
  methods: {
    newUser() {
      let form = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        status: 0
      }
      axios
        .post(`http://localhost:3008/api/users`, form)
        .then((res) => console.log(res))
      ;(this.name = ''),
        (this.surname = ''),
        (this.email = ''),
        (this.password = '')
    },
  },
}
</script>