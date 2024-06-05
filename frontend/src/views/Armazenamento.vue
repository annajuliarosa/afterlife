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

</style>