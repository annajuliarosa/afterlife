<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="Adm">
          <img src="../assets/imgs/AfterlifeLogoCompleta.jpeg" alt="Afterlife Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <div class="row gx-3">
              <div class="col-6">
                <button class="btnNav btnRegistrar" href="#" data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal">REGISTRAR</button>
              </div>
              <div class="col-6">
                <button class="btnNav btnEntrar" href="#" data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal">ENTRAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Modal></Modal>
    <article>
      <section class="intro">
        <div class="container row text-center m-auto">
          <div class="col-md-6 m-auto intro-texto">
            <h1 class="tituloIntro mb-3">Segurança para suas informações</h1>
            <h2 class="subtituloIntro mb-4">Gerenciamento seguro de dados pessoais, garantindo tranquilidade para o
              amanhã.
            </h2>
            <button class="btnRegistrar btnIntro" href="#" data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal">CRIAR CONTA</button>
          </div>
          <div class="col-md-6 m-auto">
            <img class="img-fluid" src="../assets/imgs/ComputadorComEscudo.png" alt="imgPlaceholder">
          </div>
        </div>
      </section>
      <section class="infoAdicional">
        <h1 class="text-center fw-bold">Conheça nossos serviços</h1>
        <div class="container row gx-5 text-center m-auto">
          <div class="col-md-4">
            <div class="container-icons">
              <div class="border-icons">
                <img src="../assets/imgs/Chave.png" alt="chave">
              </div>
            </div>
            <p>
              Armazene de forma protegida e confiável documentos, senhas e quaisquer dados importantes para o presente e
              o
              futuro.
            </p>
          </div>
          <div class="col-md-4">
            <div class="container-icons">
              <div class="border-icons">
                <img src="../assets/imgs/UsuarioVerificado.png" alt="chave">
              </div>
            </div>
            <p>
              Na ausência do titular da conta, os dependentes pré-definidos receberão autorização por email para acesso
              aos dados armazenados.
            </p>
          </div>
          <div class="col-md-4" style="padding-bottom:150px">
            <div class="container-icons">
              <div class="border-icons">
                <img src="../assets/imgs/Dispositivos.png" alt="chave">
              </div>
            </div>
            <p>
              Acesse facilmente em diversos dispositivos, desfrutando de uma experiência consistente e intuitiva.
            </p>
          </div>
        </div>
      </section>
    </article>
    <footer>
      <div class="container align-items-center">
        <div class="row">
          <div class="col-md-12 col-lg-3 my-auto">
            <img src="../assets/imgs/AfterlifeLogoSimples.png" alt="logo AfterLife">
          </div>
          <div class="col-12 col-md-4 col-lg-3 my-auto">
            <div class="col-md-12">
              <p class="fw-bold">INSTITUCIONAL</p>
            </div>
            <a href="#" class="footer-link">Quem somos</a>
          </div>
          <div class="col-12 col-md-4 col-lg-3 my-auto">
            <div class="col-md-12">
              <p class="fw-bold">CONTATO</p>
            </div>
            <a href="#" class="footer-link">contato@afterlife.com.br</a>
          </div>
          <div class="col-12 col-md-4 col-lg-3 my-auto">
            <div class="col-md-12">
              <p class="fw-bold">REDES SOCIAIS</p>
            </div>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <p class="footer-link text-center copyright">&copy;AFTERLIFE | TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import Modal from '../components/ModalHome.vue';

export default {
  name: 'viewHome',
  components: { Modal }
}
</script>

<style scoped>

/* Navbar */

.navbar {
  background-color: #fff;
}

.navbar-brand img {
  max-width: 314px;
}

@media screen and (max-width: 767px) {
  .navbar-brand img {
    max-width: 220px;
  }
}

.btnNav {
  display: block;
  color: #fff;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  min-width: 98px;
  padding: 5px;
  transition: all 0.25s ease;
}

.btnRegistrar {
  background-color: #91C141;
  padding: 5px 10px;
}

.btnRegistrar:hover {
  background-color: #6d9232;
}

.btnEntrar {
  background-color: #6D808F;
}

.btnEntrar:hover {
  background-color: #515f69;
}

@media (max-width: 991px) {
  .btnRegistrar {
    margin: 10px 0 10px 0;
    width: 100%;
  }

  .btnEntrar {
    margin: 10px 0 10px 0;
    width: 100%;
  }
}

/* Conteúdo da página */

article {
  flex: 1;
}

.intro {
  background-color: #F1F1F1;
  width: 100%;
  padding-top: 45px;
  padding-bottom: 45px;
}

.intro-texto {
  max-width: 514px !important;
}

@media screen and (max-width:767px) {
  .intro-texto {
    padding-top: 10px;
    order: 1;
  }
}

@media screen and (max-width:991px) and (min-width:768px) {
  .intro-texto {
    transform: scale(0.85);
  }
}

.tituloIntro {
  text-align: end;
  font-weight: bold;
  font-size: 32px;
}

.subtituloIntro {
  text-align: end;
  font-size: 20px;
  font-style: italic;
}

.btnIntro {
  display: block;
  color: #fff;
  background-color: #91C141;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  min-width: 100px;
  padding: 5px 20px;
  transition: all 0.25s ease;
  margin-left: auto;
}

@media screen and (max-width: 767px) {
  .tituloIntro {
    text-align: center;
  }

  .subtituloIntro {
    text-align: center;
    font-style: normal;
    margin-bottom: 16px;
  }

  .btnIntro {
    margin: 0 auto;
  }
}


.btnIntro:hover {
  background-color: #6d9232;
}

.infoAdicional {
  margin-top: 35px;
}

.infoAdicional h1 {
  font-size: 32px;
  margin-bottom: 35px;
}

.infoAdicional p {
  font-size: 16px;
}

.infoAdicional img {
  padding: 15px;
  max-width: 65px;
  height: 65px;
}

.border-icons {
  border: 1px solid black;
  border-radius: 100%;
  width: fit-content;
  margin: 0 auto;
}

.container-icons {
  padding-bottom: 20px;
}

@media screen and (max-width:991px) and (min-width:768px) {
  article {
    margin-bottom: 35px;
  }
}

@media screen and (max-width:767px) {
  article {
    margin-bottom: 170px;
  }
}

/* Footer */

footer {
  background-color: #6D808F;
  padding: 0px 0 20px 0;
  text-align: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

footer .container {
  margin-top: 20px;
  text-align: center;
}

footer p {
  color: #fff;
  margin-bottom: 0;
  margin-top: 20px;
  letter-spacing: 0.5px;
  font-size: 12px;
}

footer a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.5px;
}

.footer-link {
  padding: 0;
  font-size: 12px;
}

@media screen and (min-width:992px) {
  footer .container {
    flex-direction: column;
    max-width: 650px !important;
  }

  footer a {
    position: relative;
    padding: 0 10px;
  }

  footer a::after {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 3px;
    width: 100%;
    opacity: 0;
    left: 0;
    bottom: -3px;
    transition: all 0.25s;
  }

  footer a:hover::after {
    opacity: 1;
  }
}

.my-auto {
  padding-bottom: 5px;
}

.fa-instagram {
  color: #fff;
}

.fa-instagram:hover {
  cursor: pointer;
}

.copyright {
  font-size: 10px;
}
</style>