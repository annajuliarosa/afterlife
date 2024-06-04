<template>
    <Navbar></Navbar>
    <div class="container mb-4">
        <p class="text-start">Arquivo: Senhas</p>
        <DataTable></DataTable>
        <div class="wrapperBotaoAudio mt-3">
            <button type="button" class="btnCadastrarSenha"><i class="fa-solid fa-plus"></i> CADASTRAR SENHA</button>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTable from '../components/DataTablePassword.vue';

export default {
  name: 'viewSenhas',
  components: { Navbar, Footer, DataTable }
}
</script>

<style scoped>
 p{
    font-size: 24px;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media screen and (min-width:768px){
    .wrapperBotaoAudio{
        text-align: right!important;
    }
}

@media screen and (max-width:767px){
    .wrapperBotaoAudio{
        text-align: center!important;
    }
} 

.btnCadastrarSenha{
  font-size: 14px;
    background-color: #617A95;
    /* width: 130px; */
    padding: 5px 10px;
    /* font-weight: bold; */
    border: 1px solid black;
    transition: all 0.25s;
    color: #fff;
}

.btnCadastrarSenha:hover{
    background-color: #425264;
    color: #fff;
    border-color: black;
}


.fa-pencil:hover,
.fa-trash:hover,
.fa-eye:hover, .fa-eye-slash:hover, .fa-share-nodes:hover, .fa-building-columns:hover {
    cursor: pointer;
}

</style>