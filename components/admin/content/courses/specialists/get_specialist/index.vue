<template>
  <fragment>
    <div class="people_image">
      <img
        class="one-specialist__image"
        :src="'/images/' + img"
        :alt="img"
      />
      <img class="star" alt="star" src="/images/star2.png" />
    </div>
    <p class="one-specialist__name margin-0-auto">{{ name }}</p>
    <p class="one-specialist__profession margin-0-auto">{{ profession }}</p>
  </fragment>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'GetSpecialist',
  components: { Fragment },
  data() {
    return {
      check_img: false,
    }
  },
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  mounted() {},
  methods: {
    exists_img(path) {
      console.log(1111)
      try {
        require(path)
      console.log(2222)
        return true
      } catch (e) {
      console.log(3333)
        return false
      }
    },
  },
}
</script>