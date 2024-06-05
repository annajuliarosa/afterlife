<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editarUsuario"
    tabindex="-1"
    aria-labelledby="editarUsuarioLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editarUsuarioLabel">Dependentes</h1>
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
              <p class="align-start tituloDependente col-9">DEPENDENTE 1</p>
              <i
                class="col-3 fa-solid fa-trash text-end align-self-center m-0"
              ></i>
              <div class="col-lg-6 col-md-12 mt-2">
                <label for="nomeCompleto1" class="form-label"
                  >Nome completo</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="nomeCompleto1"
                  placeholder="Lucas Vinícius Marques"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="email1" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email1"
                  placeholder="lucas@gmail.com"
                />
              </div>
              <div class="col-lg-4 col-md-6 mt-2">
                <label for="parentesco1" class="form-label"
                  >Grau de parentesco</label
                >
                <input type="text" class="form-control" id="parentesco1" />
              </div>
              <div class="col-lg-4 col-md-6 mt-2">
                <label for="cpf1" class="form-label">CPF</label>
                <input
                  type="text"
                  class="form-control"
                  id="cpf1"
                  placeholder="000.000.000-00"
                />
              </div>
              <div class="col-lg-4 col-md-6 mt-2">
                <label for="telefone1" class="form-label">Telefone</label>
                <input
                  type="text"
                  class="form-control"
                  id="telefone1"
                  placeholder="(DDD) 00000-0000"
                />
              </div>
              <div class="w-100 text-center">
                <button type="button" class="mt-2 btnAdicionar">
                  <i class="fa-solid fa-plus"></i> Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btnSalvar">SALVAR</button>
          <div class="espacoBotoes"></div>
          <button type="button" class="btnCancelar" data-bs-dismiss="modal">
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalEditUser",
  components: {},
};
</script>

<style>
.tituloDependente {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0;
}

input {
  text-overflow: ellipsis;
}

.btnAdicionar {
  width: 110px;
  background-color: #fff;
  border: 1px solid #fff;
  transition: all 0.25s;
}

.btnAdicionar:hover {
  border-color: black;
}

.btnSalvar {
  background-color: #91c141 !important;
  color: #fff;
  font-weight: bold;
  width: 110px;
  padding: 5px 0;
  border: none;
  border: 1px solid #fff;
  transition: all 0.25s;
}

.btnSalvar:hover {
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

.btnCancelar:hover {
  border-color: black;
}

.espacoBotoes {
  width: 20px;
}
</style>
