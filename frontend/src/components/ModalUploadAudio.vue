<template>
    <!-- Modal -->
    <div class="modal fade" id="subirAudio" tabindex="-1" aria-labelledby="subirAudioLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="subirAudioLabel">Adicionar Áudios</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <form class="row multipartForm" enctype="multipart/form-data">
                <div class="col-12 mt-2">
                  <label for="tituloAudio" class="form-label">Título</label>
                  <input type="text" class="form-control" id="tituloAudio" placeholder="Áudio 1">
                </div>
                <div class="col-12 mt-2">
                  <label for="descricaoAudio" class="form-label">Descrição</label>
                  <textarea class="form-control" id="descricaoAudio" placeholder="Áudio importante sobre X"></textarea>
                </div>
                <!-- enviar áudio -->
            <fieldset>
              <div class="dadosUpdate mt-2">
                <legend>Áudios</legend>
                <div class="col-12 col-md-6 col-lg-6">
                  <label for="usuarioAudios" class="col-form-label"><i class="fas fa-cloud-upload-alt"></i> Buscar áudios</label>
                  <div class="upload-container">
                    <input type="file" class="form-control" name="usuarioAudios[]" id="file-input" multiple required>
                  </div>
                  <ul class="file-list" id="file-list"></ul>
                </div>
              </div>
            </fieldset>
            <!-- fim enviar áudio -->
              </form>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btnSalvar">SALVAR</button>
            <div class="espacoBotoes"></div>
            <button type="button" class="btnCancelar" data-bs-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'modalSubirAudio',
    components: {
  
    },
  }
  </script>
  
  <style scoped>
  .tituloDependente{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0;
  }
  
  input{
    text-overflow: ellipsis;
  }
  
  .btnAdicionar{
    width: 90px;
    background-color: #FFF;
    border: 1px solid #fff;
    transition: all 0.25s;
  }
  
  .btnAdicionar:hover{
    border-color: black;
  }
  
  .btnSalvar {
    background-color: #91C141 !important;
    color: #FFF;
    font-weight: bold;
    width: 110px;
    padding: 5px 0;
    border: none;
    border: 1px solid #fff;
    transition: all 0.25s;
  }
  
  .btnSalvar:hover{
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