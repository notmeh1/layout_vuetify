<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  }
};
</script>
