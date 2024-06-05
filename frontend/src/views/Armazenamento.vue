<template>
  <div class="main-container">
    <div class="rectangle">
      <button class="logo-afterlife"><a href="/index.html"></a></button>
      <button class="vector"></button>
      <button class="polygon"></button>
    </div>
    <span class="armazenamento">Armazenamento</span>
    <div class="flex-row-bca">
      <button type="button" class="botaoNP" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Nova Pasta</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Criar Nova Pasta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Título da Pasta:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected="">Selecione o Tipo de Pasta</option>
                <option value="1">Imagens</option>
                <option value="2">Documentos</option>
                <option value="3">Senhas</option>
                <option value="4">Áudios</option>
                <option value="5">Textos</option>
                <option value="6">Vídeos</option>
              </select>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Descrição da Pasta:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Criar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-2"><span class="pesquisar">Pesquisar</span>
    </div>
    <div class="flex-row-c">
      <button class="rectangle-3">
        <div class="flex-column-bf">
          <span class="span">IMAGENS</span
          ><span class="span-4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec
            urna sodales, blandit est eget, eleifend nibh.</span>
        </div>
        <button class="trash"></button>
        <button class="edit"></button>
      </button>
      <div class="rectangle-5">
        <div class="flex-column-ddd">
          <span class="span-6">DOCUMENTOS</span
          ><span class="span-7"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec
            urna sodales, blandit est eget, eleifend nibh.</span
          >
        </div>
        <div class="trash-8"></div>
        <div class="edit-9"></div>
      </div>
      <div class="rectangle-a">
        <div class="flex-column-dc">
          <span class="senhas">SENHAS</span
          ><span class="lorem-ipsum"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec
            urna sodales, blandit est eget, eleifend nibh.</span
          >
        </div>
        <div class="trash-b"></div>
        <div class="edit-c"></div>
      </div>
    </div>
    <div class="flex-row">
      <div class="rectangle-d">
        <div class="trash-e"></div>
        <div class="flex-column-b">
          <span class="audios">ÁUDIOS</span
          ><span class="lorem-ipsum-f"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec
            urna sodales, blandit est eget, eleifend nibh.</span
          >
        </div>
        <div class="edit-10"></div>
      </div>
      <div class="rectangle-11">
        <div class="trash-12"></div>
        <div class="edit-13"></div>
        <div class="flex-column">
          <span class="textos">TEXTOS</span
          ><span class="lorem-ipsum-14"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque imperdiet turpis non mi rhoncus sollicitudin. Ut nec
            urna sodales, blandit est eget, eleifend nibh.</span
          >
        </div>
      </div>
      <div class="rectangle-15">
        <div class="flex-row-d">
          <span class="videos">VÍDEOS</span>
          <div class="regroup">
            <div class="edit-16"></div>
            <div class="trash-17"></div>
          </div>
        </div>
        <span class="lorem-ipsum-18"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          imperdiet turpis non mi rhoncus sollicitudin. Ut nec urna sodales,
          blandit est eget, eleifend nibh.</span
        >
      </div>
    </div>
    <div class="rectangle-19">
      <div class="line"></div>
      <span class="copy-right"> © AFTERLIFE | TODOS OS DIREITOS RESERVADOS</span
      ><span class="contact-email">contato@afterlife.com.br</span
      ><span class="contact">CONTATO</span>
    </div>
  </div>
</template>

<script setup lang="javascript"></script>

<script>

</script>

<style scoped>
.modal-backdrop {
  --bs-backdrop-zindex: 1050;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--bs-backdrop-bg);
}
:root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
}

.main-container {
  overflow: hidden;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

input,
select,
textarea,
button {
  outline: 0;
}

.main-container {
  position: relative;
  width: 1728px;
  height: 1024px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #000000;
  overflow: hidden;
}
.rectangle {
  position: relative;
  width: 1728px;
  height: 90px;
  margin: 0 0 0 0;
  background: #f1f1f1;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
}
.logo-afterlife {
  position: absolute;
  width: 314px;
  height: 50px;
  top: 20px;
  left: 183px;
  background: url(../assets/images/5b0c0f5d26a7be09c825148b9e175a85af768a0b.png)
    no-repeat center;
  background-size: cover;
  z-index: 45;
  border: none;
}
.vector {
  position: absolute;
  width: 1.79%;
  height: 34.44%;
  top: 32.22%;
  left: 84.84%;
  background: url(../assets/images/d6d039f6-8250-430f-8653-8fc2b295c85b.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
  border: none;
}
.polygon {
  position: absolute;
  width: 16px;
  height: 8px;
  top: 45px;
  left: 1508px;
  background: url(../assets/images/5f4ac9ee-64c9-4dbf-8694-22978ce296af.png)
    no-repeat center;
  background-size: cover;
  z-index: 2;
  border: none;
}
.armazenamento {
  display: block;
  position: relative;
  height: 28px;
  margin: 64px 0 0 190px;
  color: #000000;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  white-space: nowrap;
  z-index: 20;
}
.flex-row-bca {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 470px;
  height: 50px;
  margin: -9px 0 0 1071px;
  z-index: 16;
}
.rectangle-1 {
  flex-shrink: 0;
  position: relative;
  width: 180px;
  height: 50px;
  cursor: pointer;
  background: #91c141;
  border: none;
  z-index: 16;
}
/* .nova-pasta {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 23px;
  top: 13px;
  left: 30px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  white-space: nowrap;
  z-index: 18;
} */

button.botaoNP {
  color: white;
  background-color: #91c141 !important;
  border: none;
}

#message-text {
  min-width: 465px;
  min-height: 165px;
  max-width: 465px;
  max-height: 165px;
}

.rectangle-2 {
  flex-shrink: 0;
  position: relative;
  width: 270px;
  height: 50px;
  background: no-repeat center;
  background-size: cover;
  z-index: 15;
  overflow: hidden;
}
.pesquisar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 21px;
  top: 12px;
  left: 19px;
  color: #666666;
  font-family: Roboto, var(--default-font-family);
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  white-space: nowrap;
  z-index: 19;
}
.flex-row-c {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 1353px;
  height: 200px;
  margin: 23px 0 0 189px;
  z-index: 7;
}
.rectangle-3 {
  flex-shrink: 0;
  position: relative;
  width: 410px;
  height: 200px;
  background: #617a95;
  z-index: 3;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.21);
  border: none;
}
.flex-column-bf {
  position: absolute;
  height: 172px;
  top: 13px;
  right: 147px;
  left: 13px;
  font-size: 0px;
  z-index: 21;
}
.span {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 106px;
  height: 28px;
  margin: 0 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 4;
}
.span-4 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 88px 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 21;
}
.trash {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 14px;
  left: 366px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 32;
  border: none;
}
.edit {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 16px;
  left: 333px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 31;
  border: none;
}
.rectangle-5 {
  flex-shrink: 0;
  position: relative;
  width: 416px;
  height: 206px;
  background: url(../assets/images/0cba6680-81bd-474d-8c6c-33b8714a1a4f.png)
    no-repeat center;
  background-size: cover;
  z-index: 5;
}
.flex-column-ddd {
  position: absolute;
  height: 172px;
  top: 13px;
  right: 149px;
  left: 17px;
  font-size: 0px;
  z-index: 22;
}
.span-6 {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 161px;
  height: 28px;
  margin: 0 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 6;
}
.span-7 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 88px 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 22;
}
.trash-8 {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 14px;
  left: 364px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 38;
}
.edit-9 {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 16px;
  left: 331px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 37;
}
.rectangle-a {
  flex-shrink: 0;
  position: relative;
  width: 410px;
  height: 200px;
  background: #617a95;
  z-index: 7;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.21);
}
.flex-column-dc {
  position: absolute;
  height: 172px;
  top: 13px;
  right: 144px;
  left: 16px;
  font-size: 0px;
  z-index: 23;
}
.senhas {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 94px;
  height: 28px;
  margin: 0 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 14;
}
.lorem-ipsum {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 88px 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 23;
}
.trash-b {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 14px;
  left: 364px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 44;
}
.edit-c {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 16px;
  left: 331px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 43;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 1353px;
  height: 200px;
  margin: 43px 0 0 189px;
  z-index: 10;
}
.rectangle-d {
  flex-shrink: 0;
  position: relative;
  width: 410px;
  height: 200px;
  background: #617a95;
  z-index: 8;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.21);
}
.trash-e {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 12px;
  left: 366px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 29;
}
.flex-column-b {
  position: absolute;
  height: 169px;
  top: 13px;
  right: 146px;
  left: 14px;
  font-size: 0px;
  z-index: 24;
}
.audios {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 86px;
  height: 28px;
  margin: 0 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 11;
}
.lorem-ipsum-f {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 85px 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 24;
}
.edit-10 {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 14px;
  left: 333px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 28;
}
.rectangle-11 {
  flex-shrink: 0;
  position: relative;
  width: 416px;
  height: 206px;
  background: url(../assets/images/ffe47c30-50d4-438d-b7b5-faa724ea24b7.png)
    no-repeat center;
  background-size: cover;
  z-index: 9;
}
.trash-12 {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 12px;
  left: 364px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 35;
}
.edit-13 {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 14px;
  left: 331px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 34;
}
.flex-column {
  position: absolute;
  height: 166px;
  top: 16px;
  right: 145px;
  left: 21px;
  font-size: 0px;
  z-index: 25;
}
.textos {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 90px;
  height: 28px;
  margin: 0 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 12;
}
.lorem-ipsum-14 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 82px 0 0 0;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 25;
}
.rectangle-15 {
  flex-shrink: 0;
  position: relative;
  width: 410px;
  height: 200px;
  background: #617a95;
  z-index: 10;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.21);
}
.flex-row-d {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 383px;
  height: 32px;
  margin: 10px 0 0 11px;
  z-index: 41;
}
.videos {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 84px;
  height: 28px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  z-index: 13;
}
.regroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  width: 63px;
  height: 32px;
  z-index: 41;
}
.edit-16 {
  flex-shrink: 0;
  position: relative;
  width: 25px;
  height: 25px;
  background: url(../assets/images/9afe9529dbd7608ab5540c7486a9da00b210908f.png)
    no-repeat center;
  background-size: contain;
  z-index: 40;
}
.trash-17 {
  flex-shrink: 0;
  position: relative;
  width: 30px;
  height: 30px;
  background: url(../assets/images/6787047c60d4207ecb3c51795f7e68a82be109dc.png)
    no-repeat center;
  background-size: contain;
  z-index: 41;
}
.lorem-ipsum-18 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 250px;
  height: 56px;
  margin: 84px 0 0 16px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.063px;
  text-align: left;
  z-index: 26;
}
.rectangle-19 {
  position: relative;
  width: 1728px;
  height: 45px;
  margin: 295px 0 0 1px;
  background: #617a95;
  z-index: 47;
}
.line {
  position: absolute;
  width: 0.5px;
  height: 23px;
  top: 11px;
  left: 832.75px;
  background: url(../assets/images/ed50fbc1-d550-42f9-85e6-dd6cfeb17ee2.png)
    no-repeat center;
  background-size: cover;
  z-index: 59;
}
.copy-right {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  width: 271px;
  height: 14px;
  top: 15px;
  left: 867px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  white-space: nowrap;
  z-index: 51;
}
.contact-email {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  width: 134px;
  height: 14px;
  top: 15px;
  left: 653px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  white-space: nowrap;
  z-index: 54;
}
.contact {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  width: 54px;
  height: 14px;
  top: 16px;
  left: 589px;
  color: #ffffff;
  font-family: Roboto, var(--default-font-family);
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  white-space: nowrap;
  z-index: 53;
}

</style>