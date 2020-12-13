<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~~/components/static/header";
import Footer from "~~/components/static/footer";
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: "title",
      meta: [{ hid: "description", name: "description", content: "content" }],
      link: [{ rel: "canonical", href: `http://localhost:3000${this.$route.path}` }],
    };
  },
};
</script>