<template>
  <section className="registrationContent">
    <div className="contactForm">
      <h1 className="registrationTitle">title</h1>
      <div className="inputBlock" key="{registrationIndex}">
        <input className="formInput" v-model="name" />
        <input className="formInput" v-model="surname" />
        <input className="formInput" v-model="email" />
        <input className="formInput" v-model="phone" />
      </div>
      <button className="red_button" @click="sendEmail">{registration}</button>
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
        .post(`http://localhost:3008/api/mail`, form)
        .then((res) => console.log(res))
    },
    showModal() {
        this.show_modal = !this.show_modal;
    },
  },
}
</script>