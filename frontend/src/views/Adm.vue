<template>
<<<<<<< HEAD
    <Navbar></Navbar>
    <div class="container">
        <p class="text-start">Usuários Cadastrados</p>
        <DataTable></DataTable>
    </div>
    <Footer></Footer>
=======
  <div>
      <Navbar/>
      <h1 class="text-center">tela de adm</h1>
      <DataTable/>
      <Footer/>
  </div>
>>>>>>> 2cb4376adc8092a92a7d49c5889a0b50893a13dc
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTable from '../components/DataTableAdm.vue';

export default {
  name: 'viewAdm',
  components: { Navbar, Footer, DataTable }
}
</script>

<style scoped>
  p{
    font-size: 24px;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
</style>