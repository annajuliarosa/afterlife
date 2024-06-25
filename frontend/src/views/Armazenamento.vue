<template>
<!-- BARRA DE CIMA -->
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
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToDocumentFile"
        ></Folder>
      </div>

      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="DOCUMENTOS"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToDocumentFile"
        ></Folder>
      </div>

      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="SENHAS"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToSenhas"
        ></Folder>
      </div>

      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="ÁUDIOS"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToAudio"
        ></Folder>
      </div>

      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="TEXTOS"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToText"
        ></Folder>
      </div>

      <div class="col-lg-4 col-md-6 col-12 p-1">
        <Folder
          titulo="VÍDEOS"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales."
          @click="goToVideo"
        ></Folder>
      </div>
    </div>
  </div>
  <ModalNovaPasta></ModalNovaPasta>
  <ModalEditarPasta></ModalEditarPasta>
  <ModalExcluirPasta></ModalExcluirPasta>

  <!-- BARRA DE BAIXO -->
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
  components: { Navbar, Footer, Folder, ModalNovaPasta, ModalEditarPasta, ModalExcluirPasta },
};
</script>

<style scoped>
p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  display: inline-block;
}

.p-1 {
  padding: 1rem!important;
}

.tituloPagina{
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

.pesquisarPasta{
  height: 34px;
  margin-left: 10px;
}
</style>