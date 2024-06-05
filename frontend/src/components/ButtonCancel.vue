<template>
 <button type="button" class="btn btnCancel rounded-0" :data-bs-dismiss="dismiss">{{text}}</button>
</template>


<script>
export default {
    name: 'ButtonCancel',
    props: {
        text: String,
        dismiss: String
    },

}
</script>


<style scoped>
.btnCancel {
  display: block;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  padding: 5px 15px;
  transition: all 0.25s ease;
  text-transform: uppercase;
}

</style>