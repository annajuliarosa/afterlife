<template>
 <div class="documentFile">
    <Navbar />
       <div class="tableDocument">
            <p class="h4">Arquivo: Documentos</p>    
            <DataTableDoumentFile />
            <div class="row justify-content-end" id="btnDoc">
                <button id="btnDocument"><i class="bi bi-plus-lg"></i> ADICIONAR ARQUIVO</button>
            </div>
            <div class="container text-center" id="btnSaveClean">
                <div class="row justify-content-md-center">
                        <button id="btnSave">SALVAR</button>
                        <button type="" id="btnClear">LIMPAR</button>
                </div>
            </div>
       </div>     
    <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DataTableDoumentFile from '../components/DataTableDoumentFile.vue'


export default {
    name: "DocumentFile",
    components: {
        Navbar,
        Footer,
        DataTableDoumentFile
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

#btnDocument {
    background-color: #6D808F;
    border: 1px solid #6D808F;
    color: white;
    font-size: 10pt;
    font-weight: bold;
    height: 2.5rem;
    width: 12rem;
    margin-left: 1%;
}

#btnDoc{
    margin-top: 5%;
    margin-right: 0.02rem;
}

.bi-plus-lg{    
    font-weight: bold;
}

#btnSaveClean{
    display: flex;
    
    font-size: 10pt;
    height: 2rem;    
    font-weight: bolder;
    width: 7rem;
}

#btnSave{
    border: 1px solid #91C141;
    color: white;
    background-color: #91C141;

}

#btnClear{
    border: 1px solid white;
    color: black;
    background-color: white;
}

</style>