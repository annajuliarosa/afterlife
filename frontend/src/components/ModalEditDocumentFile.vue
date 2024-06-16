<template>
<v-dialog max-width="1000">
  <template v-slot:activator="{ props: activatorProps }">
    <div class="text-right">
        <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-plus"
        color="#6D808F"
        rounded="0"
        id="btnDocument"
        data-bs-toggle="modal"
        data-bs-target="#modalDocument">
            <template v-slot:prepend>
            <v-icon color="white"></v-icon>
            </template>
            ADICIONAR ARQUIVO
        </v-btn>
    </div>
  </template>
  <template v-slot:default="{ isActive }">
    <v-card title="Adicionar Documentos"  class="modalEdit">
      <v-card-text>
       <div class="modal-body">
         <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Título</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Documento">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descrição sobre o documento"></textarea>
      </div>
      <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
        <!-- <UploadDocument/> -->
      </v-flex>
      </div>
      </v-card-text>
    <div class="container text-center" id="btnSaveClean">
      <v-card-actions>
          <v-btn
            text="Fechar"
            @click="isActive.value = false"
            color="black"
            rounded="0"
            id="btnClear">
          </v-btn>
          <v-btn
            text="Salvar"
            color="white"
            rounded="0"
            id="btnSave">
          </v-btn>
      </v-card-actions>
    </div>
    </v-card>
  </template>
</v-dialog>
</template>


<script>
// import UploadDocument from './UploadDocument.vue';
export default {
//   components: {
//     UploadDocument
//   }  
}
</script>

<style>
.v-card{
  background-color: white !important;
}

.v-card-text, .v-card-title {
    color: black;
}

button.v-btn{
  background-color: #6D808F;
}

#btnSaveClean{
  justify-content: center;
  display: flex;
}

#btnSave{
    border: 1px solid #91C141 !important;
    color: white;
    background-color: #91C141;

}

#btnClear{
    border: 1px solid white;
    color: black;
    background-color: white;
}



</style>