<template>
    <!-- Modal -->
    <div class="modal fade" id="gravarAudio" tabindex="-1" aria-labelledby="gravarAudioLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="gravarAudioLabel">Gravar Áudio</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="text-center">
                <button type="button" class="btnMicrofone"><i class="fa-solid fa-microphone fa-lg"></i></button>
                <p class="mt-3">Clique no microfone para começar a gravar</p>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btnConfirmar">SALVAR</button>
            <div class="espacoBotoes"></div>
            <button type="button" class="btnCancelar" data-bs-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'modalRecordAudio',
    components: {
  
    },
  }
  </script>
  
  <style scoped>
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

  .btnMicrofone{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #617A95;
    border: none;
    transition: all 0.25s;
  }

.btnMicrofone:hover{
    background-color: #425264;
}

.btnMicrofone:active{
    background-color: red;
}

  .fa-microphone{
    color: #fff;
  }
  </style>