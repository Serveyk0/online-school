<template>
  <div class="specialists">
    <h3 class="specialists__title">
      {{ SPECIALISTS + QUOTE_LEFT + name + QUOTE_RIGHT }}
    </h3>
    <div
      class="one-specialist"
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
</template> 

<script>
import specialists from './constant';
import GetSpecialist from './get_specialist';
export default {
  name: 'Specialists',
  components: { GetSpecialist },
  props: {
    course_specialists: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
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