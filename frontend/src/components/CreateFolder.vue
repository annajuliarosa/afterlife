<template>
<div
    class="modal fade"
    id="createFolder"
    data-bs-backdrop="static"
    aria-hidden="true"
    aria-labelledby="createFolderLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="createFolderLabel">
            Criar Pasta
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <form class="row">
              <div class="col-12 mt-2">
                <label for="tituloPasta" class="form-label"
                  >Título</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="tituloPasta"
                />
              </div>
              <div class="col-12 mt-2">
                <label for="tipoPasta" class="form-label">Tipo</label>
                <select class="form-select" aria-label="Tipo">
  <option selected>Selecione o tipo de arquivo</option>
  <option value="imagens">Imagens</option>
  <option value="documentos">Documentos</option>
  <option value="textos">Textos</option>
  <option value="senhas">Senhas</option>
  <option value="audios">Áudios</option>
  <option value="videos">Vídeos</option>
</select>
              </div>
              <div class="col-12 mt-2">
                <label for="descricaoPasta" class="form-label"
                  >Descrição</label
                >
                <textarea class="form-control" id="descricaoPasta" rows="3"></textarea>
              </div>
              <div class="modal-footer justify-content-center">
          <button type="button" class="btnSalvar">SALVAR</button>
          <div class="espacoBotoes"></div>
          <button type="button" class="btnCancelar" data-bs-dismiss="modal">
            CANCELAR
          </button>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalNovaPasta",
  components: {},
};
</script>

<style scoped>
.modal-header {
  border-bottom: none !important;
}

.modal-footer {
  border-top: none !important;
}
</style>