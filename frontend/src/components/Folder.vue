<template>
  <div class="wrapperPasta" @click="handleClick">
    <h3 class="tituloPasta mt-2">
      {{ titulo }}
      <span class="iconesPasta">
        <i 
          class="fa-solid fa-pencil me-3"
          data-bs-target="#editFolder" 
          data-bs-toggle="modal"
          @click.stop="openEditModal"
        ></i>
        <i 
          class="fa-solid fa-trash" 
          data-bs-target="#excluirPasta" 
          data-bs-toggle="modal"
          @click.stop="openDeleteModal"
        ></i>
      </span>
    </h3>
    <p class="descricaoPasta">{{ descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "FolderVue",
  props: {
    titulo: String,
    descricao: String,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    openEditModal(event) {
      // Lógica para abrir o modal de edição
      console.log('Abrir modal de edição', event);
    },
    openDeleteModal(event) {
      // Lógica para abrir o modal de exclusão
      console.log('Abrir modal de exclusão', event);
    }
  }
};
</script>

<style>
.iconesPasta {
  float: right;
}

.fa-trash:hover, .fa-pencil:hover {
  background-color: black;
}

.wrapperPasta {
  padding: 5px 10px !important;
  height: 200px;
  background-color: #617a95;
  position: relative;
  cursor: pointer;
}

.tituloPasta {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.descricaoPasta {
  color: white;
  margin: auto 10px auto 0 !important;
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
}
</style>
