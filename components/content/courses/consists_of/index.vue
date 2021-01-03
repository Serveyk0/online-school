<template>
  <div class="consists-of grid">
    <h3 class="consists-of__title">{{ CONSISTS_OF }}</h3>
    <div class="consist-block grid margin-0-auto">
      <div class="consist-block__text grid">
        <div
          class="consist-one grid-align-center"
          v-for="consist in consists"
          :key="consist.text"
        >
          <GetConsists
            :before_text="consist.before_text"
            :text="consist.text"
          />
        </div>
      </div>
      <div class="consists-one__image">
        <img alt="course image" src="~~/static/images/course.jpg" />
      </div>
      <img class="sun" alt="sun" src="~~/static/images/sun_3.png" />
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>


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
    GetConsists,
  },
  data() {
    return {
      CONSISTS_OF: consist.CONSISTS_OF,
    }
  },
}
</script>