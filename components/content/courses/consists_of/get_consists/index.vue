<template>
  <fragment>
    <p class="before-text">{{ before_text }}</p>
    <p class="after-text">{{ text }}</p>
  </fragment>
</template> 

<script>
import { Fragment } from 'vue-fragment';
export default {
  name: 'GetConsists',
  components: {
    Fragment
  },
  props: {
    before_text: {
      type: String,
      required: true,
      validator: function (value) {
        return value !== ''
      },
    },
    text: {
      type: String,
      required: true,
      validator: function (value) {
        return value !== ''
      },
    },
  },
}
</script>