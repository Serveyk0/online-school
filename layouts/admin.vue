<template>
  <div class="common grid">
    <div
      v-if="user_in"
      class="container_wrapper grid align-content-space-between"
    >
      <Header />
      <Nuxt />
      <Footer />
    </div>
    <div v-else class="container_wrapper grid align-content-space-between">
      <In :method="updateUserIn" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '~~/assets/sass/common'
@import '~~/assets/sass/default'
</style>

<script>
import Header from '~~/components/admin/static/header'
import Footer from '~~/components/admin/static/footer'
import In from '~~/components/admin/static/in'
import axios from 'axios'
export default {
  components: {
    Header,
    Footer,
  },
  components: { In },
  data: () => ({
    user_in: false,
    user: null,
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