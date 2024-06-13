<template>
  <v-app>
    <Navbar />
      <div class="container">
        <DataTableText />
      </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTableText from '../components/DataTableText.vue';

export default {
  name: 'viewText',
  components: { Navbar, Footer, DataTableText }
}
</script>

<style scoped>
.container {
  padding: 30px 10px;
}
</style>
