<template>
  <fragment>
    <div class="people_image">
      <img
        class="one-specialist__image"
        :src="'/images/' + img"
        :alt="img"
      />
      <img class="star" alt="star" src="~~/static/images/star2.png" />
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
  props: {
    img: {
      type: String,
      required: true,
      // validator: function (value) {
      //   return (
      //     value !== ""
      //   )
      // },
    },
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return value !== ''
      },
    },
    profession: {
      type: String,
      required: true,
      validator: function (value) {
        return value !== ''
      },
    },
  },
}
</script>