<template>
  <div class="specialists grid grid-gap">
    <h3 class="specialists__title">
      {{ SPECIALISTS + QUOTE_LEFT + name + QUOTE_RIGHT }}
    </h3>
    <div class="specialists-all grid grid-align-center grid-justify-center">
      <div
        class="one-specialist grid grid-align-center grid-justify-center"
        v-for="(specialist, index) in course_specialists"
        :key="index"
      >
        <GetSpecialist
          :img="specialist.img"
          :name="specialist.name"
          :profession="specialist.profession"
        />
      </div>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import specialists from './constant'
import GetSpecialist from './get_specialist'
export default {
  name: 'Specialists',
  components: { GetSpecialist },
  props: {
    course_specialists: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length !== 0
      },
    },
    name: {
      type: String,
      required: true,
      validator: function (value) {
        return value !== ''
      },
    },
  },
  data() {
    return {
      QUOTE_LEFT: specialists.QUOTE_LEFT,
      QUOTE_RIGHT: specialists.QUOTE_RIGHT,
      SPECIALISTS: specialists.SPECIALISTS,
    }
  },
}
</script>