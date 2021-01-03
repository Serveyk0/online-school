<template>
  <div class="specialists">
    <h3>{{SPECIALISTS}}</h3>
    <div
      class="one-specialist"
      v-for="(specialist, index) in specialists"
      :key="index"
    >
      <!-- <img
        class="one-specialist__image"
        :src="require(`~/static/images/${specialist.img}`)"
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

      <input
        type="file"
        id="file"
        ref="file"
        v-on:change="(event) => handleFileUpload(event, index)"
      />
      
      <button v-if="specialists.length > 1" v-on:click="deleteSpecialist(index)">{{DELETE}}</button>
    </div>
  </div>
</template> 

<script>
import infoCourses from './constant'
export default {
  name: 'Specialists',
  props: ['specialists', 'file', 'files'],
  methods: {
    changeField(event, field, index) {
      this.specialists.forEach((e, i) => {
        if (i === index) {
          this.specialists[i][field] = event.target.value
        }
      })
    },
    handleFileUpload(e, index) {
      const file = e.target.files[0];
      this.specialists.forEach((e, i) => {
        if (i === index) {
          this.files.push(file);
          this.specialists[i].img=file.name;
        }
      })
    },
    deleteSpecialist(index) {
      this.specialists.splice(this.specialists.indexOf(index));
    }
  },
  data() {
    return {
      DELETE: infoCourses.DELETE,
      SPECIALISTS: infoCourses.SPECIALISTS,
    }
  },
}
</script>