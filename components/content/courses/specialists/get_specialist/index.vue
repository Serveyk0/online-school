<template>
  <fragment>
    <!-- <img
      class="one-specialist__image"
      :src="require(`~/static/images/${img}`)"
      :alt="img"
    /> -->
    <p class="one-specialist__name">{{ name }}</p>
    <p class="one-specialist__profession">{{ profession }}</p>
  </fragment>
</template> 

<script>
import { Fragment } from 'vue-fragment';
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
        return (
          value !== ""
        )
      },
    },
    profession: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          value !== ""
        )
      },
    },
  },
}
</script>