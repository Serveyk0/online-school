<template>
  <section className="registrationContent">
    <Message v-if="show_message" :show_message="showMessage" />
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
import Message from './message';
import axios from 'axios';
import Modal from './modal'
export default {
  name: 'Registration',
<<<<<<< HEAD
  components: { Modal },
=======
  components: {
    Message
  },
>>>>>>> a44ce5b539d5bf1746ddc2a85f2c75dc9e81c8d8
  data() {
    return {
      registration: _Register.REGISTRATION,
      name: '',
      surname: '',
      email: '',
      phone: '',
      show_modal: false,
      show_message: false,
    }
  },
  methods: {
    sendEmail() {
      // const form = {
      //   name: this.name,
      //   surname: this.surname,
      //   email: this.email,
      //   phone: this.phone,
      // }
      // axios
      //   .post(`http://localhost:3008/api/mail`, form)
      //   .then((res) => console.log(res))
      this.showMessage();
    },
    showModal() {
        this.show_modal = !this.show_modal;
    },
    showMessage() {
      this.show_message = !this.show_message;
    }
  },
}
</script>