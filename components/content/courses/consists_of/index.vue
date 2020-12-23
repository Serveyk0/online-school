<template>
  <div class="consists-of">
    <h3>{{ CONSISTS_OF }}</h3>
    <div class="consist-block">
      <div
        class="consist-one"
        v-for="consist in consists"
        :key="consist.text"
      >
        <GetConsists :before_text="consist.before_text" :text="consist.text" />
      </div>
    </div>
  </div>
</template> 

<script>
import consist from './constant'
import GetConsists from './get_consists'
export default {
  name: 'ConsistsOf',
  props: {
    consists: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length !== 0
      },
    },
  },
  components: {
    GetConsists
  },
  data() {
    return {
      CONSISTS_OF: consist.CONSISTS_OF,
    }
  },
}
</script>