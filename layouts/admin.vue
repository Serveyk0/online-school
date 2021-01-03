<template>
  <div class="common grid">
    <Header />
    <div
      v-if="user_in"
      class="container_wrapper margin-0-auto grid align-content-space-between"
    >
      <Nuxt />
    </div>
    <div v-else class="container_wrapper grid align-content-space-between">
      <In :method="updateUserIn" />
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/common'
@import '~~/assets/sass/default'
</style>

<script>
import Header from '~~/components/static/header'
import Footer from '~~/components/static/footer'
import In from '~~/components/admin/static/in'
import axios from 'axios'
export default {
  components: {
    Header,
    Footer,
    In,
  },
  data: () => ({
    user_in: false,
    user: null,
  }),
  head() {
    return {
      title: 'ON-LINE школа',
      link: [
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' 
        }
      ]
    }
  },
  mounted() {
    // localStorage.removeItem("id");
    if (localStorage.id) {
      axios.get('http://localhost:3008/api/users/local').then((res) => {
        if (res.data.status !== false) {
          this.user = res.data
          this.user_in = true
        }
      })
    }
  },
  methods: {
    updateUserIn() {
      this.user_in = !this.user_in
    },
  },
}
</script>