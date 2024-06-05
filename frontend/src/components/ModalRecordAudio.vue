<template>

  <!-- Modal -->
  <div
    class="modal fade"
    id="gravarAudio"
    tabindex="-1"
    aria-labelledby="gravarAudioLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="gravarAudioLabel">Gravar Áudio</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <button type="button" class="btnMicrofone" @click="gravando">
              <i class="fa-solid fa-microphone fa-lg"></i>
            </button>
            <p class="mt-3 instrucao">
              Clique no microfone para começar a gravação
            </p>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btnConfirmar">SALVAR</button>
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
  name: "modalRecordAudio",
  components: {},
  methods: {
    gravando() {
      var microfone = document.querySelector(".btnMicrofone");
      var instrucao = document.querySelector(".instrucao");
      if (microfone.classList.contains("gravando")) {
        microfone.classList.remove("gravando");
        instrucao.innerHTML = "Clique no microfone para começar a gravação";
      } else {
        microfone.classList.add("gravando");
        instrucao.innerHTML = "Clique no microfone para parar a gravação";
      }
    },
  },
};
</script>

<style scoped>
.btnConfirmar {
  background-color: #91c141 !important;
  color: #fff;
  font-weight: bold;
  width: 110px;
  padding: 5px 0;
  border: none;
  border: 1px solid #fff;
  transition: all 0.25s;
}

.btnConfirmar:hover {
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

.btnMicrofone {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #617a95;
  border: none;
  transition: all 0.25s;
}

.btnMicrofone:hover {
  filter: brightness(70%);
}

.gravando {
  background-color: red;
}

.fa-microphone {
  color: #fff;
}
</style>

