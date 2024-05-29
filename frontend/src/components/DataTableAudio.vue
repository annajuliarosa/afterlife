<template>
    <ModalEditUser></ModalEditUser>
    <ModalDeleteUser></ModalDeleteUser>
        <DataTable :data="data" class="table table-hover table-striped nowrap table-bordered" :options="options">
            <thead class="collapsed">
                <tr>
                    <th class="text-center"></th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Data de Criação</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
        </DataTable>
        <div class="wrapperBotaoAudio mt-3">
            <button type="button" class="btnGravarAudio"><i class="fa-solid fa-microphone"></i> GRAVAR ÁUDIO</button>
            <button type="button" class="btnNovoAudio"><i class="fa-solid fa-plus"></i> NOVO ÁUDIO</button>
        </div>
</template>

<script setup>
import { DataTable } from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editUser"></i>';
const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#deleteUser"></i>';
const audio = '<i class="fa-solid fa-microphone" type="button"></i>';

const data = [
    [audio, "Áudio 1", "Áudio importante sobre x", "03/04/2024 - 21:45", editar, excluir],
    [audio, "Áudio 2", "Áudio importante sobre x", "12/05/2024 - 14:23", editar, excluir],
    [audio, "Áudio 3", "Áudio importante sobre x", "25/05/2024 - 12:34", editar, excluir],
    [audio, "Áudio 4", "Áudio importante sobre x", "26/05/2024 - 23:41", editar, excluir],
    [audio, "Áudio 5", "Áudio importante sobre x", "28/05/2024 - 05:32", editar, excluir]
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

.fa-pencil:hover,
.fa-trash:hover {
    cursor: pointer;
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

@media screen and (min-width:768px){
    .wrapperBotaoAudio{
        text-align: right!important;
    }
}

@media screen and (max-width:767px){
    .wrapperBotaoAudio{
        text-align: center!important;
    }
}

.btnGravarAudio{
    background-color: #fff;
    border: 2px solid black;
    margin-right: 20px;
    transition: all 0.25s;
    width: 150px;
}

.btnGravarAudio:hover{
    background-color: rgb(185, 185, 185);
    color: black;
    border-color: black;
}

.btnNovoAudio{
    background-color: #617A95;
    width: 150px;
    border: 2px solid black;
    transition: all 0.25s;
    color: #fff;
}

.btnNovoAudio:hover{
    background-color: #425264;
    color: #fff;
    border-color: black;


}
</style>