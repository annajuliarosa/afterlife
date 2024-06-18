<template>
  <div>
    <ModalEditVideo />
    <ModalDeleteVideo />
    <DataTable :options="options" :data="data" search=false class="display nowrap tableVideo" width="100%">
      <thead class="collapsed">
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th class="colDate">Última Alteração</th>
          <th class="colEdit">Editar</th>
          <th class="colDelete">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td class="tdVideo">{{ row[1] }}</td>
          <td class="tdVideo">{{ row[2] }}</td>
          <td class="tdVideo">{{ row[3] }}</td>
        </tr>
      </tbody>
    </DataTable>
  </div>
</template>

<script setup>
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';
  import ModalEditVideo from './ModalEditVideo.vue';
  import ModalDeleteVideo from './ModalDeleteVideo.vue';
  import 'datatables.net-buttons';
  import 'datatables.net-buttons/js/buttons.html5';
  import 'datatables.net-responsive';
  import 'datatables.net-select';
  import 'bootstrap-icons/font/bootstrap-icons.css';

  DataTable.use(DataTablesCore);

  const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editVideoModal"></i>';
  const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#deleteVideoModal"></i>';

  const data = [
    ['Instruções', 'Instruções importantes', '03/04/2024 - 21:48', editar, excluir],
    ['Instruções 2', 'Instruções importantes', '03/04/2024 - 21:47', editar, excluir],
    ['Recordações', 'Recordações importante', '03/04/2024 - 21:46', editar, excluir],
  ];
  const options = {
      language: {
          decimal: "",
          emptyTable: "Sem dados disponíveis",
          infoPostFix: "",
          thousands: ",",
          lengthMenu: "_MENU_ entradas por página",
          zeroRecords: "Nenhum resultado encontrado",
      },
      layout: {
        topStart: {},
        topEnd: {},
        bottomStart: {
          pageLength: {
            menu: [5, 10, 25, 50, 100],
          },
        },
        bottomEnd: {
          paging: {
            numbers: 3,
          },
        },
      },
      fixedHeader: false,
      order: [],
      lengthMenu: [
          [5, 10, 25, 50, 100],
          [5, 10, 25, 50, 100],
      ],
      pageLength: 5,
      autoWidth: true,
      responsive: true,
  }
</script>

<style scoped>
@import 'datatables.net-dt';
@import 'datatables.net-buttons-dt';
@import 'datatables.net-responsive-dt';
@import 'datatables.net-select-dt';
@import '~bootstrap-icons/font/bootstrap-icons.css';

table.dataTable th.dt-type-numeric,
table.dataTable th.dt-type-date,
table.dataTable td.dt-type-numeric,
table.dataTable td.dt-type-date {
    text-align: center;
}
.fa-pencil:hover,
.fa-trash:hover {
    cursor: pointer;
}
table.dataTable th, table.dataTable td{
    box-sizing: unset;
}
.colEdit, .colDelete {
    width: 50px; 
    text-align: center;
}
.colDate {
  width: 150px;
}
.img {
    height: 100px;
}
</style>