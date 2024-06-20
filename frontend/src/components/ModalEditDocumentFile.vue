<template>
  <div class="row justify-content-end" id="btnDoc">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModalDocument" id="btnDocument"><i class="bi bi-plus-lg"></i> 
      ADICIONAR ARQUIVO
      </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="editModalDocument" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar Documentos</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Título</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Documento">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descrição sobre o documento"></textarea>
            </div>
          </div>
          <div class="modal-footer">
          <div class="container text-center" id="btnSaveClean">            
            <button type="button" class="btn btn-primary" id="btnSave">SALVAR</button>
            <button type="button" class="btn btn-primary" id="btnClear">CANCELAR</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
.v-card{
  background-color: white !important;
}

#btnDocument {
    background-color: #6D808F;
    border: 1px solid #6D808F;
    color: white;
    border-radius: 0;
    font-size: 10pt;
    font-weight: bold;
    height: 2.5rem;
    width: 12rem;
    margin-left: 1%;
}

#btnSaveClean{
  justify-content: center;
  display: flex;
  border-radius: none;
}

button{
  border-radius: 0%;
  font-weight: bolder;
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