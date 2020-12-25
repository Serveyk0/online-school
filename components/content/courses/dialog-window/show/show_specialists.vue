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
      <input
        class="one-specialist__name"
        :v-model="specialist.name"
        :value="specialist.name"
        v-on:input="(event) => changeField(event, 'name', index)"
      />
      <input
        class="one-specialist__profession"
        :v-model="specialist.profession"
        :value="specialist.profession"
        v-on:input="(event) => changeField(event, 'profession', index)"
      />
    </div>
  </div>
</template> 

<script>
export default {
  name: 'Specialists',
  props: ['specialists'],
  methods: {
    changeField(event, field, index) {
      this.specialists.forEach((e, i) => {
        if (i === index) {
          this.specialists[i][field] = event.target.value
        }
      })
    },
  },
}
</script>