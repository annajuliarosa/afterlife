<template>
  <Navbar></Navbar>
  <div class="container mb-4">
    <p class="text-start">Armazenamento</p>
    <div class="d-flex justify-content-end">
      <button type="button" class="btnNovaPasta" data-bs-target="#createFolder"
                  data-bs-toggle="modal">NOVA PASTA</button>
      <input type="text" class="pesquisarPasta" placeholder="Pesquisar"/>
    </div>
    <div class="row mt-3">
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder 
          titulo="IMAGENS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToDocumentFile"
        ></Folder>
      </div>
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="DOCUMENTOS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToDocumentFile"
        ></Folder>
      </div>
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="SENHAS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToSenhas"
        ></Folder>
      </div>
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="ÁUDIOS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToAudio"
        ></Folder>
      </div>
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="TEXTOS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToText"
        ></Folder>
      </div>
      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="VÍDEOS"
          descricao="loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est. loremIncididunt dolor nostrud laborum ullamco est."
          @click="goToVideo"
        ></Folder>
      </div>
    </div>
  </div>
  <ModalNovaPasta></ModalNovaPasta>
  <ModalEditarPasta></ModalEditarPasta>
  <ModalExcluirPasta></ModalExcluirPasta>
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Folder from "../components/Folder.vue";
import ModalNovaPasta from "../components/CreateFolder.vue";
import ModalEditarPasta from "../components/EditFolder.vue";
import ModalExcluirPasta from "../components/DeleteFolder.vue";

export default {
  name: "viewArmazenamento",
  components: { 
    Navbar, 
    Footer, 
    Folder, 
    ModalNovaPasta, 
    ModalEditarPasta, 
    ModalExcluirPasta 
  },
  methods: {
    goToDocumentFile() {
      this.$router.push({ name: 'DocumentFile' });
    },
    goToSenhas() {
      this.$router.push({ name: 'viewSenhas' });
    },
    goToAudio() {
      this.$router.push({ name: 'viewAudios' });
    },
    goToText() {
      this.$router.push({ name: 'viewText' });
    },
    goToVideo() {
      this.$router.push({ name: 'viewVideo' });
    }
  }
};
</script>

<style scoped>
p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  display: inline-block;
}

.tituloPagina {
  display: inline-block;
  margin: 0;
}

.wrapperNovaPastaPesquisa {
  float: right;
}

.container {
  padding: 20px;
}

.btnNovaPasta {
  background-color: #91c141 !important;
  color: #fff;
  font-weight: bold;
  width: 120px;
  padding: 5px 10px;
  border: none;
  border: 1px solid #fff;
  transition: all 0.25s;
}

.btnNovaPasta:hover {
  border-color: black;
}

.pesquisarPasta {
  height: 34px;
  margin-left: 10px;
}
</style>
