<template>
    <Navbar></Navbar>
    <div class="container">
        <p class="text-start">Arquivo: Áudios</p>
        <DataTable></DataTable>
        <div class="wrapperBotaoAudio mt-3">
            <button type="button" class="btnGravarAudio" data-bs-toggle="modal" data-bs-target="#gravarAudio"><i class="fa-solid fa-microphone"></i> GRAVAR ÁUDIO</button>
            <button type="button" class="btnNovoAudio" data-bs-toggle="modal" data-bs-target="#subirAudio"><i class="fa-solid fa-plus"></i> NOVO ÁUDIO</button>
        </div>
        <ModalSubirAudio></ModalSubirAudio>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTable from '../components/DataTableAudio.vue';
import ModalSubirAudio from '../components/ModalSubirAudio.vue';

export default {
  name: 'viewAudios',
  components: { Navbar, Footer, DataTable, ModalSubirAudio }
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

.btnGravarAudio{
    background-color: #fff;
    border: 2px solid black;
    margin-right: 20px;
    transition: all 0.25s;
    width: 150px;
}

.btnGravarAudio:hover{
    background-color: rgb(185, 185, 185);
    color: black;
    border-color: black;
}

.btnNovoAudio{
    background-color: #617A95;
    width: 150px;
    border: 2px solid black;
    transition: all 0.25s;
    color: #fff;
}

.btnNovoAudio:hover{
    background-color: #425264;
    color: #fff;
    border-color: black;
}
</style>