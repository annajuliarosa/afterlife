<template>
  <div>
      <Navbar/>
      <h1 class="text-center">tela de adm</h1>
      <DataTable/>
      <Footer/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTable from '../components/DataTable.vue';

export default {
  name: 'viewAdm',
  components: { Navbar, Footer, DataTable }
}
</script>

<style>

</style>