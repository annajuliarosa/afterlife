<template>
  <div>
    <ModalEditText />
    <ModalDeleteText />
    <DataTable :options="options" :data="data" search class="display nowrap" width="100%">
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
          <td>{{ row[0] }}</td>
          <td>{{ row[1] }}</td>
          <td class="colEdit">{{ row[2] }}</td>
          <td class="colDelete">{{ row[3] }}</td>
        </tr>
      </tbody>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import ModalEditText from './ModalEditText.vue';
import ModalDeleteText from './ModalDeleteText.vue';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-responsive';
import 'datatables.net-select';
import 'bootstrap-icons/font/bootstrap-icons.css';

DataTable.use(DataTablesCore);

const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editTextModal"></i>';
const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#deleteTextModal"></i>';

const data = [
  ['Texto 1', 'Texto sobre x', '03/04/2024 - 21:48', editar, excluir],
  ['Texto 2', 'Texto sobre x', '03/04/2024 - 21:47', editar, excluir],
  ['Texto 3', 'Texto sobre x', '03/04/2024 - 21:46', editar, excluir],
];

const options = {
  language: {
    search: "Pesquisar",
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
        menu: [10, 25, 50, 100],
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
  pageLength: 10,
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
table.dataTable th, table.dataTable td {
  box-sizing: unset;
}
.colEdit,
.colDelete {
  width: 50px;
  text-align: center;
}
.colDate {
  width: 150px;
}
</style>
