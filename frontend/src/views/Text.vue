<template>
  <div>
    <Navbar/>
    <div class="container">
      <h2>Arquivo: Textos</h2>
      <DataTableText/>
      <div class="buttonWrapper">
        <ButtonBlue :text="textAdd" :data-bs-toggle="'modal'" :data-bs-target="target"/> 
      </div>
      <ModalAddText />
    </div>
    <Footer/>
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
  components: { Navbar, Footer, ButtonBlue, ModalAddText, DataTableText },
  data() {
    return {
      textAdd: '+ novo texto',
      target: '#addTextModal'
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
