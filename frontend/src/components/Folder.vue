<template>
  <div class="wrapperPasta">
    <h3 class="tituloPasta mt-2">{{ titulo }}</h3>
    <p class="descricaoPasta">{{ descricao }}</p>
  </div>
</template>

<script>
export default {
  name: "FolderVue",
  components: {},
  props: {
    titulo: String,
    descricao: String,
  },
};
</script>

<style>
.wrapperPasta {
  padding: 5px 10px!important;
  height: 200px;
  background-color: #617a95;
  position: relative;
}

.tituloPasta {
  color: white;
  font-weight: bold;
}

.descricaoPasta {
  color: white;
  margin: auto !important;
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
}
</style>
