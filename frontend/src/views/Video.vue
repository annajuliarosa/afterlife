<template>
  <v-app>
    <Navbar />
      <div class="container">
        <DataTableVideo />
      </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTableVideo from '../components/DataTableVideo.vue';

export default {
  name: 'viewVideo',
  components: { Navbar, Footer, DataTableVideo }
}
</script>

<style scoped>
.container {
  padding: 30px 10px;
}
</style>