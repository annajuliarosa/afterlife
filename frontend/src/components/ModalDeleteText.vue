<template>
  <div class="modal fade" id="deleteTextModal" tabindex="-1" aria-labelledby="deleteTextModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content rounded-2 modalText">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editTextModalLabel">Excluir</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container_form">
            <form class="row" id="form">
              <p>Deseja realmente excluir o texto? Essa ação não poderá ser desfeita.</p>
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
import ButtonGreen from './ButtonGreen.vue'
import ButtonCancel from './ButtonCancel.vue'

export default {
  name: 'ModalDeleteText',
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
  padding: 5px;
}
</style>