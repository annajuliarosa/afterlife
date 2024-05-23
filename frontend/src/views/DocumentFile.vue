<template>
 <div class="documentFile">
    <Navbar />
       <div class="tableDocument">
            <p class="h4">Arquivo: Documentos</p>    
        <TableDocument />
       </div>
        
      
    <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import TableDocument from '../components/TableDocument.vue'
export default {
    name: "DocumentFile",
    components: {
        Navbar,
        Footer,
        TableDocument
     },
    
}
</script>

<style scoped>

.tableDocument{
  margin: 2% 10%;
}

.tableDocument p{
    margin-bottom: 2%;
}

</style>