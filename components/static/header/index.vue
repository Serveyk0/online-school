<template>
  <header class="header text-center">
    <img class="logo" src="~/static/images/logo.jpg" alt="logo" />
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template> 

<style lang="sass" scoped>
@import '~~/assets/sass/header'
</style>

<script>
import Header from './constant'
export default {
  name: 'Header',
  data() {
    return {
      title: Header.TITLE,
    }
  },
}
</script>