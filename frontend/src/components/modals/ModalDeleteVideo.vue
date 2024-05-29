<template>
  <div class="modal fade" id="deleteVideoModal" tabindex="-1" aria-labelledby="deleteVideoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content rounded-2 modalVideo">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editTextModalLabel">Excluir</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container_form">
            <form class="row" id="form">
              <p>Deseja realmente excluir os vídeos? Essa ação não poderá ser desfeita.</p>
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
.modalVideo {
  padding: 5px;
}
</style>
