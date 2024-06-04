<template>
    <Navbar></Navbar>
    <div class="container mb-4">
        <p class="text-start">Arquivo: Senhas</p>
        <DataTable></DataTable>
        <div class="wrapperBotaoAudio mt-3">
            <button type="button" class="btnCadastrarSenha" data-bs-toggle="modal" data-bs-target="#subirAudio"><i class="fa-solid fa-plus"></i> CADASTRAR SENHA</button>
        </div>
        <ModalEditAudio></ModalEditAudio>
        <ModalDeleteAudio></ModalDeleteAudio>
        <ModalRecordAudio></ModalRecordAudio>
        <ModalUploadAudio></ModalUploadAudio>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTable from '../components/DataTableAudio.vue';
import ModalEditAudio from '../components/ModalEditAudio.vue';
import ModalDeleteAudio from '../components/ModalDeleteAudio.vue';
import ModalRecordAudio from '../components/ModalRecordAudio.vue';
import ModalUploadAudio from '../components/ModalUploadAudio.vue';

export default {
  name: 'viewSenhas',
  components: { Navbar, Footer, DataTable, ModalEditAudio, ModalDeleteAudio, ModalRecordAudio, ModalUploadAudio }
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

.fa-microphone{
color: black;
}

.btnCadastrarSenha{
  font-size: 14px;
    background-color: #617A95;
    /* width: 130px; */
    padding: 5px 10px;
    font-weight: bold;
    border: 1px solid black;
    transition: all 0.25s;
    color: #fff;
}

.btnCadastrarSenha:hover{
    background-color: #425264;
    color: #fff;
    border-color: black;
}

</style>