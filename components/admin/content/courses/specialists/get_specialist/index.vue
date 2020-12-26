<template>
  <fragment>
    <!-- <img
      v-if="img != 0"
      class="one-specialist__image"
      :src="require(`~/static/images/${img}.jpg`)"
      :alt="img"
    /> -->
    <p class="one-specialist__name">{{ name }}</p>
    <p class="one-specialist__profession">{{ profession }}</p>
  </fragment>
</template> 

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
  mounted() {
  }
}
</script>