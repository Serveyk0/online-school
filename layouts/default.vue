<template>
  <div class="common grid margin-0-auto">
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
import Header from '~~/components/static/header'
import Footer from '~~/components/static/footer'
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: 'ON-LINE школа',
      meta: [{ hid: 'description', name: 'ON-LINE школа', content: 'Наша школа подарує Вам впевненість в собі та майбутньому. На наших заняттях Ви дізнаєтесь багато нового та цікавого не тільки про вагітність та пологи, а й як правильно доглядати за малюком від народження до року. Курс «Здоровий малюк» - це on-line курс спілкування із спеціалістами, а не заздалегідь записане відео.' }],
      link: [
        { rel: 'canonical', href: `http://localhost:3000${this.$route.path}` },
      ],
    }
  },
}
</script>