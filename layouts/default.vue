<template>
  <div class="common grid margin-0-auto">
    <Header />
    <div
      class="container_wrapper grid margin-0-auto align-content-space-between"
    >
      <Nuxt />
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
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: 'ONLINE школа',
      meta: [
        {
          hid: 'description',
          name: 'ONLINE школа',
          content:
            'Наша школа подарує Вам впевненість в собі та майбутньому. На наших заняттях Ви дізнаєтесь багато нового та цікавого не тільки про вагітність та пологи, а й як правильно доглядати за малюком від народження до року. Курс «Здоровий малюк» - це on-line курс спілкування із спеціалістами, а не заздалегідь записане відео.',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        },
      ],
      link: [
        { rel: 'canonical', href: `http://localhost:3000${this.$route.path}` },
      ],
    }
  },
}
</script>