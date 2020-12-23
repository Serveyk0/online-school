<template>
  <div class="common grid">
    <div class="container_wrapper grid align-content-space-between">
      <Header />
      <Nuxt />
      <Footer />
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
export default {
  components: {
    Header,
    Footer,
  },
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