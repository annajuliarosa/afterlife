<template>
  <div class="wrapperPasta">
    <h3 class="tituloPasta mt-2">{{ titulo }}<span class="iconesPasta"><i class="fa-solid fa-pencil me-3"></i><i class="fa-solid fa-trash"></i></span></h3>
    
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

.iconesPasta{
  float: right;
}

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
  margin: auto 10px auto 0 !important;
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
}
</style>
