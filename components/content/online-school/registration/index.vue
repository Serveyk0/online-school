<template>
  <section class="registrationContent">
    <div class="closeBtn" @click="() => changeRegister()" />
    <div class="contactForm">
      <h1 class="registrationTitle">Форма реєстрації</h1>
      <div class="inputBlock">
        <input class="formInput" v-model="name" placeholder="Ім'я" />
        <input class="formInput" v-model="surname" placeholder="Прізвище" />
        <input class="formInput" v-model="email" placeholder="email" />
        <input class="formInput" v-model="phone" placeholder="Телефон" />
      </div>
      <button class="red_button" @click="() => sendEmail()">{{registration}}</button>
    </div>
  </section>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/online-school'
</style>

<script>
import _Register from './constant';
import axios from 'axios';
import Modal from './modal'
export default {
  name: 'Registration',
  components: { Modal },
  props: ['changeRegister'],
  data() {
    return {
      registration: _Register.REGISTRATION,
      name: '',
      surname: '',
      email: '',
      phone: '',
      show_modal: false
    }
  },
  methods: {
    sendEmail() {
      const form = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
      }
      axios
        .post(`http://localhost:3008/api/mail`, form);
        this.changeRegister()
    },
    showModal() {
        this.changeRegister();
    },
  },
}
</script>