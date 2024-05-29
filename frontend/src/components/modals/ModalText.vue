<template>
  <div class="modal fade" id="addTextModal" tabindex="-1" aria-labelledby="addTextModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content rounded-2 modalText">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addTextModalLabel">Criar Texto</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container_form">
            <form class="row g-2" id="form">
              <div class="col-12">
                <label for="title" class="form-label">Título</label>
                <input type="text" class="form-control rounded-0" id="title" />
              </div>
              <div class="col-12">
                <label for="description" class="form-label">Descrição</label>
                <textarea  class="form-control rounded-0" rows="2" id="description" />
              </div>
              <div class="col-12">
                <label for="text" class="form-label">Texto</label>
                <textarea class="form-control rounded-0" rows="10" id="text" />
              </div>
              <div class="col-12 text-center pt-3 d-flex justify-content-center">
                <ButtonCancel :text="textCancel" :dismiss="dismiss" />
                <ButtonGreen :text="textSave" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonGreen from '../buttons/ButtonGreen.vue'
import ButtonCancel from '../buttons/ButtonCancel.vue'

export default {
  name: 'ModalText',
  components: { ButtonGreen, ButtonCancel }, 
  data() {
    return {
      textSave: 'Confirmar',
      textCancel: 'Cancelar',
      dismiss: 'modal'
    }
  }
}
</script>

<style scoped>
.modalText {
  width: 1500px;
}
</style>
