<template>
  <div>
    <Navbar />
    <div class="container">
      <p>
        <i class="bi bi-chevron-left iconBack" @click="goToFolders"></i>
        Arquivo: Vídeos
      </p>
      <DataTableVideo />
      <div class="buttonWrapper">
        <ButtonBlue :text="videoAdd" :data-bs-toggle="'modal'" :data-bs-target="target" />
      </div>
      <ModalAddVideo />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ButtonBlue from '../components/ButtonBlue.vue';
import DataTableVideo from '../components/DataTableVideo.vue';
import ModalAddVideo from '../components/ModalAddVideo.vue';

export default {
  name: 'viewVideo',
  components: {
    Navbar,
    Footer,
    ButtonBlue,
    DataTableVideo,
    ModalAddVideo
  },
  data() {
    return {
      videoAdd: '+ adicionar vídeo',
      target: '#addVideoModal'
    }
  },
  methods: {
    goToFolders() {
      this.$router.push({ name: 'viewArmazenamento' });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px 10px;
}

p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.iconBack {
  cursor: pointer;
}

.buttonWrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}

@media screen and (max-width: 767px) {
  p {
    text-align: center;
  }
  .buttonWrapper {
    justify-content: center;
  }
}
</style>
