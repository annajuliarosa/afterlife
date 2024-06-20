<template>
 <div class="documentFile">
    <Navbar />
       <div class="tableDocument">
            <p class="h4">Arquivo: Documentos</p>    
            <DataTableDoumentFile />
            <div class="row justify-content-end" id="btnDoc">                
                <ModalEditDocumentFile />
            </div>         
       </div>     
    <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DataTableDoumentFile from '../components/DataTableDoumentFile.vue'

import ModalEditDocumentFile from '../components/ModalEditDocumentFile.vue'


export default {
    name: "DocumentFile",
    components: {
        Navbar,
        Footer,
        DataTableDoumentFile,
        ModalEditDocumentFile
     },
    
}
</script>

<style>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.tableDocument{
  margin: 2% 10%;
}

.tableDocument p{
    margin-bottom: 2%;
}


.bi-plus-lg{    
    font-weight: bold;
}


</style>