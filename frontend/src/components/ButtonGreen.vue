<template>
 <v-btn type="button" class="btn btnGreen rounded-0" href="" data-bs-target="" data-bs-toggle="">{{text}}</v-btn>
</template>


<script>
export default {
    name: 'ButtonGreen',
    props: {
        text: String
    },

}
</script>


<style scoped>
.btnGreen {
  display: block;
  color: #fff;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  padding: 5px 15px;
  transition: all 0.25s ease;
  text-transform: uppercase;
  background-color: #91C141;
}

.btnGreen:hover {
  color: #fff;
  background-color: #6d9232;
}

</style>