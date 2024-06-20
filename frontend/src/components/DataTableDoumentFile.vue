<template>
    <ModalEditUser></ModalEditUser>
    <ModalDeleteDocument></ModalDeleteDocument>
        <DataTable :data="data" class="table table-hover table-striped nowrap table-bordered" :options="options">
            <thead class="collapsed">
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Data de Criação</th>
                    <th>Última Alteração</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
        </DataTable>
</template>

<script setup>

import { DataTable } from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import ModalDeleteDocument from './ModalDeleteDocument.vue';

DataTable.use(DataTablesCore);

const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editModalDocument"></i>';
const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#excluirDocumento"></i>';

const data = [
    ['Documento de Identidade', 'Identidade', '20/08/1983', '20/08/1983', editar, excluir],
    ['Documento de Identidade', 'Identidade', '20/08/1983', '20/08/1983', editar, excluir],
    ['Documento de Identidade', 'Identidade', '20/08/1983', '20/08/1983', editar, excluir],
    ['Documento de Identidade', 'Identidade', '20/08/1983', '20/08/1983', editar, excluir],
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
        topStart: 'pageLength',
        bottomStart: null,
    },
    scrollX: true,
    // scrollY: 180,
    scrollCollapse: true,
    fixedHeader: false,
    order: [],
    lengthMenu: [
        [5, 10, 25, 50, 100],
        [5, 10, 25, 50, 100],
    ],
    pageLength: 5,
    autoWidth: true,
}

</script>
<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';

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

li.dt-paging-button.page-item.active a {
    background-color: #91C141;
    border-color: #91C141;
    color: white !important;
}

/* li.dt-paging-button.page-item a.page-link {
    color: #000000;
} */

.page-item.active .page-link:focus, .page-link:focus-within {
    box-shadow: 0 0px 0px 3px #90c1417e !important;
}

table.dataTable th, table.dataTable td{
    box-sizing: unset;
}

</style>