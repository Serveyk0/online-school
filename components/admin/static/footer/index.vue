<template>
  <footer class="footer grid grid-justify-center grid-align-center text-center">
    <h2 class="footer_left_univercity">
      {{ TITLE
      }}<span class="footer_left_be text_center">{{ EMBRACE }}</span>
    </h2>
    <div class="footer_center grid grid-justify-center grid-align-center">
      <p class="grid">
        <span>{{ STREET }}</span
        >{{ CITY }}
      </p>
      <a :href="'tel:' + PHONE">{{ PHONE }}</a>
      <a class="footer_center_mail" :href="'mailto:' + MAIL">{{ MAIL }}</a>
    </div>
    <div class="footer_right grid grid-justify-center grid-align-center">
      <a
        v-for="(item, index) in HREFS"
        :key="index"
        :class="'footer_links ' + item.class"
        ><p class="footer_links_text margin_0">{{ item.text }}</p></a
      >
    </div>
    <p class="footer_company_name">{{ COMPANY_NAME }}</p>
  </footer>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/footer'
</style>

<script>
import _FOOTER from './constant'
export default {
  name: 'Footer',
  data() {
    return {
      TITLE: _FOOTER.TITLE,
      EMBRACE: _FOOTER.EMBRACE,
      STREET: _FOOTER.STREET,
      CITY: _FOOTER.CITY,
      PHONE: _FOOTER.PHONE,
      MAIL: _FOOTER.MAIL,
      COMPANY_NAME: _FOOTER.COMPANY_NAME,
      HREFS: _FOOTER.HREFS,
    }
  },
}
</script>