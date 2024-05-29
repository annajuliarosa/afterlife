<template>
  <div>
    <Navbar/>
    <div class="container">
      <h2>Arquivo: Vídeos</h2>
      <DataTableVideo/>
      <div class="buttonWrapper">
        <ButtonBlue :text="videoAdd" :data-bs-toggle="'modal'" :data-bs-target="target"/> 
      </div>
      <ModalAddVideo />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ButtonBlue from '../components/buttons/ButtonBlue.vue';
import DataTableVideo from '../components/DataTableVideo.vue';
import ModalAddVideo from '../components/modals/ModalAddVideo.vue';

export default {
  name: 'viewVideo',
  components: { Navbar, Footer, ButtonBlue, DataTableVideo, ModalAddVideo },
  data() {
    return {
      videoAdd: '+ adicionar vídeo',
      target: '#addVideoModal'
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px 10px;
}

h2 {
  font-size: 18px;
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}

@media screen and (max-width: 767px) {
  h2 {
    text-align: center;
  }

  .buttonWrapper {
    justify-content: center;
  }
}
</style>