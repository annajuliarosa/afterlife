<template>
  <div>
    <Navbar />
    <div class="container">
      <p>
        <i class="bi bi-chevron-left iconBack" @click="goToFolders"></i>
        Arquivo: Textos
      </p>
      <DataTableText />
      <div class="buttonWrapper">
        <ButtonBlue :text="textAdd" :data-bs-toggle="'modal'" :data-bs-target="target" />
      </div>
      <ModalAddText />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import ButtonBlue from '../components/ButtonBlue.vue';
import ModalAddText from '../components/ModalAddText.vue';
import DataTableText from '../components/DataTableText.vue';

export default {
  name: 'viewText',
  components: {
    Navbar,
    Footer,
    ButtonBlue,
    ModalAddText,
    DataTableText
  },
  methods: {
    goToFolders() {
      this.$router.push({ name: 'viewArmazenamento' });
    }
  },
  data() {
    return {
      textAdd: '+ novo texto',
      target: '#addTextModal'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 24px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.iconBack {
  cursor: pointer;
}

.container {
  padding: 30px 10px;
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
