<template>
  <div
    class="modal fade"
    id="exampleModalToggle"
    data-bs-backdrop="static"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
            Acesse sua Conta
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
            <form @submit.prevent="handleSubmit" class="row justify-content-center">
              <div class="col-lg-9 col-md-12 mt-2">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="emailLogin"
                  placeholder="Email*"
                />
              </div>
              <div class="col-lg-9 col-md-12 mt-2">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="senhaLogin"
                  placeholder="Senha*"
                />
              </div>
              <div class="col-lg-9 col-md-12">
                <button type="submit" class="btnSalvar w-100 mt-3 mb-3">
                  ENTRAR
                </button>
              </div>
              <a class="text-center mb-3 esqueceuSenha" href="#"
                >Esqueceu sua senha?</a
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModalToggle2"
    data-bs-backdrop="static"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
            Cadastro
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
              <p class="align-start tituloDependente col-9">Titular</p>
              <div class="col-lg-12 col-md-12 mt-2">
                <label for="nomeCompletoTitular" class="form-label"
                  >Nome completo</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="nomeCompletoTitular"
                  placeholder="Lucas Vinícius Marques"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="cpfTitular" class="form-label">CPF</label>
                <input
                  type="text"
                  class="form-control"
                  id="cpfTitular"
                  placeholder="000.000.000-00"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="telefoneTitular" class="form-label">Telefone</label>
                <input
                  type="text"
                  class="form-control"
                  id="telefoneTitular"
                  placeholder="(DDD) 00000-0000"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="nascimentoTitular" class="form-label"
                  >Data de nascimento</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="nascimentoTitular"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="emailTitular" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailTitular"
                  placeholder="lucas@gmail.com"
                />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="senhaTitular" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senhaTitular" />
              </div>
              <div class="col-lg-6 col-md-6 mt-2">
                <label for="repeteSenhaTitular" class="form-label"
                  >Confirmação da senha</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="repeteSenhaTitular"
                />
              </div>
              <p class="align-start tituloDependente col-9 mt-5">DEPENDENTE 1</p>
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
                <button type="button" class="mt-4 btnAdicionar">
                  <i class="fa-solid fa-plus"></i> Adicionar
                </button>
                <div class="col-lg-12 col-md-12 mt-4 mb-4 justify-content-center d-flex">
                  <button type="submit" class="btnSalvar">CADASTRAR</button>
                  <div class="espacoBotoes"></div>
                  <button
                    type="button"
                    class="btnCancelar"
                    data-bs-dismiss="modal"
                  >
                    CANCELAR
                  </button>
                </div>
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
  name: "modalHome",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      const actionUrl = this.email === 'admin@email.com' ? '/adm' : '/armazenamento';
      const form = document.createElement('form');
      form.action = actionUrl;

      const emailInput = document.createElement('input');
      emailInput.name = 'email';
      emailInput.value = this.email;

      const passwordInput = document.createElement('input');
      passwordInput.name = 'password';
      passwordInput.value = this.password;

      form.appendChild(emailInput);
      form.appendChild(passwordInput);
      document.body.appendChild(form);
      form.submit();
    },
  },
};
</script>

<style scoped>
.modal-header {
  border-bottom: none !important;
}

.modal-footer {
  border-top: none !important;
}

.esqueceuSenha {
  text-decoration: none;
  color: black;
}

.btnSalvar {
  color: #fff;
  border: none;
}
</style>
