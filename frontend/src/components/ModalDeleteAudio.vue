<template>
    <!-- Modal -->
    <div class="modal fade" id="excluirAudio" tabindex="-1" aria-labelledby="excluirAudioLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="excluirAudioLabel">Excluir</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Deseja realmente excluir este áudio? Essa ação não poderá ser desfeita.
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btnConfirmar">CONFIRMAR</button>
            <div class="espacoBotoes"></div>
            <button type="button" class="btnCancelar" data-bs-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'modalDeleteAudio',
    components: {
  
    },
  }
  </script>
  
  <style>
  .btnConfirmar {
    background-color: #91C141 !important;
    color: #FFF;
    font-weight: bold;
    width: 110px;
    padding: 5px 0;
    border: none;
    border: 1px solid #fff;
    transition: all 0.25s;
  }
  
  .btnConfirmar:hover{
    border-color: black;
  }
  
  .btnCancelar {
    background-color: transparent;
    color: black;
    font-weight: bold;
    width: 110px;
    padding: 5px 0;
    border: 1px solid #fff;
    transition: all 0.25s;
  }
  
  .btnCancelar:hover{
    border-color: black;
  }
  
  .espacoBotoes {
    width: 20px;
  }
  </style>