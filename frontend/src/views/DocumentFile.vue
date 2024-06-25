<template>
  <div class="documentFile">
    <Navbar />
    <div class="tableDocument"> 
      <p>
        <i class="bi bi-chevron-left iconBack" @click="goToFolders"></i>
        Arquivo: Documentos
      </p>  
      <DataTableDoumentFile />
      <div class="row justify-content-end" id="btnDoc">                
        <ModalEditDocumentFile />
      </div>         
    </div>     
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DataTableDoumentFile from '../components/DataTableDoumentFile.vue';
import ModalEditDocumentFile from '../components/ModalEditDocumentFile.vue';

export default {
  name: "DocumentFile",
  components: {
    Navbar,
    Footer,
    DataTableDoumentFile,
    ModalEditDocumentFile
  },
  methods: {
    goToFolders() {
      this.$router.push({ name: 'viewArmazenamento' });
    }
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.iconBack {
  cursor: pointer;
}

.tableDocument {
  margin: 2% 10%;
}

.tableDocument p {
  margin-bottom: 2%;
}

#btnDoc {
  margin-top: 3%;
}

.bi-plus-lg {    
  font-weight: bold;
}

#btnSave {
  margin-top: 2%;
  font-weight: bolder;
  border: 1px solid #91C141;
  color: white;
  background-color: #91C141;
  width: 8rem;
  height: 2rem;
}

#btnClear {
  border: 1px solid white;
  color: black;
  font-weight: bolder;
  background-color: white;
  width: 8rem;
  height: 2rem;
}

@media screen and (max-width: 767px) {
  p {
    text-align: center;
  }
} 
</style>
