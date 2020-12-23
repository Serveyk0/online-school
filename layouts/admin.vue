<template>
  <div class="common grid">
    <div class="container_wrapper grid align-content-space-between">
      <div v-if="user_in">
        <Header />
        <Nuxt />
        <Footer />
      </div>
      <div v-else>
        <In />
      </div>
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
    if (localStorage.id) {
      user_in = true;
      axios
      .get('http://localhost:3008/api/users/local')
      .then((res) => (user = res.data))
    }
  },
}
</script>