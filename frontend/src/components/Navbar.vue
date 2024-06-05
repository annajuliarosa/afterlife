<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/imgs/AfterlifeLogoCompleta.png" alt="Afterlife Logo">
      </a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-user"></i>
          </a>
          <ul class="dropdown-menu position-absolute dropdown-menu-end">
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i>&#160;&#160;&#160;Configurar conta</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-right-from-bracket"></i>&#160;&#160;&#160;Sair</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'myNavbar',
  components: {

  },
}
</script>

<style scoped>
.navbar {
  background-color: #f1f1f1;
}

.navbar-brand img {
  max-width: 314px;
}

@media screen and (max-width: 767px) {
  .navbar-brand img {
    max-width: 220px;
  }
}

.dropdown-toggle::after{
  vertical-align: 0.5em!important;
}

.fa-user{
  font-size: 31px!important;
}

</style>