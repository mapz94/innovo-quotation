<template>
  <div id="app">
    <v-app>
      <Page :top_strip="true" />
    </v-app>
  </div>
</template>

<script>
import Page from "./components/Page.vue";

export default {
  name: "App",
  components: {
    Page,
  },
};
</script>

<style>
</style>
