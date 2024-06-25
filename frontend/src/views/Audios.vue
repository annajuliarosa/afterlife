<template>
  <Navbar></Navbar>
  <div class="container mb-4">
    <p>
      <i class="bi bi-chevron-left iconBack" @click="goToFolders"></i>
      Arquivo: Áudios
    </p>
    <DataTable></DataTable>
    <div class="wrapperBotaoAudio mt-3">
      <button type="button" class="btnGravarAudio" data-bs-toggle="modal" data-bs-target="#gravarAudio">
        <i class="fa-solid fa-microphone"></i> GRAVAR ÁUDIO
      </button>
      <button type="button" class="btnNovoAudio" data-bs-toggle="modal" data-bs-target="#subirAudio">
        <i class="fa-solid fa-plus"></i> NOVO ÁUDIO
      </button>
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
  name: 'viewAudios',
  components: {
    Navbar,
    Footer,
    DataTable,
    ModalEditAudio,
    ModalDeleteAudio,
    ModalRecordAudio,
    ModalUploadAudio
  },
  methods: {
    goToFolders() {
      this.$router.push({ name: 'viewArmazenamento' });
    }
  }
}
</script>

<style scoped>
@import 'bootstrap';

p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.iconBack {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .wrapperBotaoAudio {
    text-align: right !important;
  }
}

@media screen and (max-width: 767px) {
  .wrapperBotaoAudio {
    text-align: center !important;
  }

  p {
    text-align: center;
  }
}

.fa-microphone {
  color: black;
}

.btnGravarAudio {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid black;
  margin-right: 20px;
  transition: all 0.25s;
  width: 130px;
}

.btnGravarAudio:hover {
  background-color: rgb(185, 185, 185);
  color: black;
  border-color: black;
}

.btnNovoAudio {
  font-size: 14px;
  background-color: #617A95;
  width: 130px;
  border: 1px solid black;
  transition: all 0.25s;
  color: #fff;
}

.btnNovoAudio:hover {
  background-color: #425264;
  color: #fff;
  border-color: black;
}
</style>
