<template>
  <div class="">
    <div v-if="user_auth">
      <Authorisation />
    </div>
    <div v-else>
      <Registration />
    </div>
    <button v-on:click="user_auth=!user_auth">{{user_auth ? AUTHORISATION : REGISTRATION}}</button>
  </div>
</template>


<script>
import Registration from '~~/components/admin/static/in/registration';
import Authorisation from '~~/components/admin/static/in/authorisation';
import _In from './constant';
export default {
  name: 'In',
  components: { Registration, Authorisation },
  data: () => ({
    REGISTRATION: _In.REGISTRATION,
    AUTHORISATION: _In.AUTHORISATION,
    user_auth: true,
  }),
  head() {
    return {
      title: 'title',
      meta: [{ hid: 'description', name: 'description', content: 'content' }],
      link: [
        { rel: 'canonical', href: `http://localhost:3000${this.$route.path}` },
      ],
    }
  },
}
</script>