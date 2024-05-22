<template>
  <button type="button" class="btn btnBlue rounded-0" :data-bs-target="dataBsTarget" :data-bs-toggle="dataBsToggle">{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonBlue',
  props: {
    text: String,
    'data-bs-toggle': String,
    'data-bs-target': String
  }
}
</script>

<style scoped>
.btnBlue {
  display: block;
  color: #fff;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  padding: 5px 15px;
  transition: all 0.25s ease;
  text-transform: uppercase;
  background-color: #617A95;
}

.btnBlue:hover {
  color: #fff;
  background-color: #4d6279;
}
</style>
