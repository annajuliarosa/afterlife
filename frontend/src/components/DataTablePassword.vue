<template>
    <ModalEditUser></ModalEditUser>
    <ModalDeleteUser></ModalDeleteUser>
        <DataTable :data="data" class="table table-hover table-striped nowrap table-bordered" :options="options">
            <thead class="collapsed">
                <tr>
                    <th class="text-center"></th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Senha</th>
                    <th class="text-center"></th>
                    <th class="text-center"></th>
                    <th class="text-center"></th>
                </tr>
            </thead>
        </DataTable>
</template>

<script setup>
import { DataTable } from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

const banco = '<i class="fa-solid fa-building-columns"></i>'
const outros = '<i class="fa-solid fa-share-nodes"></i>';
const visivel = '<i class="fa-solid fa-eye"></i>';
const naoVisivel = '<i class="fa-solid fa-eye-slash"></i>';
const excluir = '<i class="fa-solid fa-trash"></i>';
const editar = '<i class="fa-solid fa-pencil"></i>';

const data = [
    [banco, "Senha Banco do Brasil", "Banco", "******", naoVisivel, editar, excluir],
    [banco, "Senha do Nubank", "Banco", "1234", visivel, editar, excluir],
    [outros, "Senha do Google", "Redes sociais", "senha1234", visivel, editar, excluir],
    [outros, "Senha do facebook", "Redes sociais", "teste123", visivel, editar, excluir],
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
    scrollY: true,
    scrollCollapse: true,
    fixedHeader: true,
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

li.dt-paging-button.page-item.active a {
    background-color: #91C141;
    border-color: #91C141;
    color: white !important;
}

li.dt-paging-button.page-item a.page-link {
    color: #000000;
}

.page-item.active .page-link:focus, .page-link:focus-within {
    box-shadow: 0 0px 0px 3px #90c1417e !important;
}

table.dataTable th, table.dataTable td{
    box-sizing: unset;
}

.fa-microphone{
    color: black;
}

</style>