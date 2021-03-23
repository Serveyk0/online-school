<template>
  <div class="health_baby grid">
    <h2 class="modules_block_title">Модулі курсу «Здоровий малюк»</h2>
    <div class="modules_block">
      <div class="module_block_first grid">
        <div class="module_block_first_left grid">
          <img class="sun" alt="sun" src="~~/static/images/sun_3.jpg" />
          <p class="module_block_first_left_text padding_0 margin_0">
            Наша школа подарує Вам впевненість в собі та майбутньому. На наших
            заняттях Ви дізнаєтесь багато нового та цікавого не тільки про
            вагітність та пологи, а й як правильно доглядати за малюком від
            народження до року.
          </p>
        </div>
        <div class="module_block_first_right">
          <p class="module_block_first_right_text">
            Курс «Здоровий малюк» це on-line курс спілкування із спеціалістами,
            а не заздалегідь записане відео.
          </p>
        </div>
      </div>
      <div
        class="parent_school_modules"
        v-for="(item, index) in MODULES"
        :key="index"
      >
        <div class="titles_grid grid">
          <h3 class="modules_title_1 margin_0">
            {{ 'Модуль ' + (index + 1) }}
          </h3>
          <h4 class="modules_title_2 margin_0">
            {{ MODULES_TITLES_ARRAY[index] }}
          </h4>
          <div
            :id="'clickme' + (index + 1)"
            class="modules_plus grid grid-justify-center grid-align-center"
            :class="{ rotate: rotates[index] }"
            v-on:click="() => changeRotate(index)"
          ></div>
        </div>
        <ul class="padding_0 margin_0" :id="'module' + (index + 1)">
          <li
            v-for="(item2, index) in item"
            :key="index"
            class="parent_school_modules_item"
          >
            {{ item2 }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/courses'
</style>

<script>
import courseProgram from './constant'
import $ from 'jquery'
export default {
  name: 'courseProgram',
  data() {
    return {
      rotates: [false, false, false, false],
      MODULES_TITLE: courseProgram.MODULES_TITLE,
      MODULE_TITLE_TEXT: courseProgram.MODULE_TITLE_TEXT,
      MODULE_TEXT: courseProgram.MODULE_TEXT,
      MODULES: courseProgram.MODULES,
      MODULES_TITLES_ARRAY: courseProgram.MODULES_TITLES_ARRAY,
    }
  },
  mounted() {
    for (let i = 1; i < 5; i++) {
      $('#clickme' + i).click(function () {
        $('#module' + i).slideToggle('slow')
      })
    }
  },
  methods: {
    changeRotate(index) {
      this.$set(this.rotates, index, !this.rotates[index])
    },
  },
}
</script>