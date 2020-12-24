<template>
  <div class="specialists">
    <div
      class="one-specialist"
      v-for="(specialist, index) in specialists"
      :key="index"
    >
      <!-- <img
        class="one-specialist__image"
        :src="require(`~/static/images/${specialist.img}.jpg`)"
        :alt="specialist.img"
      /> -->
      <input class="one-specialist__name"       :value="specialist.name" />
      <input class="one-specialist__profession" :value="specialist.profession" />
    </div>
  </div>
</template> 

<script>
export default {
  name: 'Specialists',
  props: ['specialists'],
//   data() {
//       return {
//           specialists = "",
//       }
//   },
//   mounted() {
//       this.specialists = this.get_specialists;
//   }
}
</script>