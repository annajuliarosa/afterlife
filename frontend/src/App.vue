<template>
  <RouterView></RouterView>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
  font-family: Roboto;
  src: url('assets/fonts/Roboto-Regular.ttf');
}

* {
  font-family: Roboto;
}

html {
  height: 100vh;
  box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  min-height: 100vh;
  padding-bottom: 70px;
  box-sizing: inherit;
}

</style>