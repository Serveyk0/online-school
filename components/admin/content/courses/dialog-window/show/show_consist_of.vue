<template>
  <div class="consists-of">
    <h3>{{ CONSISTS_OF }}</h3>
    <div class="consist-block">
      <div class="consist-one" v-for="(consist, index) in consists" :key="index">
        <input
          class="before-text"
          :v-model="consist.before_text"
          :value="consist.before_text"
          v-on:input="(event) => changeField(event, 'before_text', index)"
        />
        <input
          class="after-text"
          :v-model="consist.text"
          :value="consist.text"
          v-on:input="(event) => changeField(event, 'text', index)"
        />
        
      <button v-if="consists.length > 1" v-on:click="deleteConsist(index)">{{DELETE}}</button>
      </div>
    </div>
  </div>
</template> 

<script>
import consist from './constant'
export default {
  name: 'ShowConsistsOf',
  props: {
    consists: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length !== 0
      },
    },
  },
  methods: {
    changeField(event, field, index) {
      this.consists.forEach((e, i) => {
        if (i === index) {
          this.consists[i][field] = event.target.value
        }
      })
    },
    deleteConsist(index) {
      this.consists.splice(this.consists.indexOf(index));
    }
  },
  data() {
    return {
      CONSISTS_OF: consist.CONSISTS_OF,
      DELETE: consist.DELETE,
    }
  },
}
</script>