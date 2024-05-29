<template>
    <Navbar></Navbar>
    <div class="container">
        <p class="text-start">Usuários Cadastrados</p>
        <DataTable></DataTable>
    </div>
    <Footer></Footer>
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