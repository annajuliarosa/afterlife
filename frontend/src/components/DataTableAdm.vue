<template>
    <ModalEditUser></ModalEditUser>
    <ModalDeleteUser></ModalDeleteUser>
        <DataTable :data="data" class="table table-hover table-striped nowrap table-bordered" :options="options">
            <thead class="collapsed">
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
        </DataTable>
</template>

<script setup>
//npm install --save datatables.net-vue3
//npm install --save datatables.net-bs5
//https://datatables.net/forums/discussion/comment/223982/#Comment_223982
//https://datatables.net/reference/option/layout
//https://datatables.net/reference/feature/pageLength

import { DataTable } from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import ModalDeleteUser from './ModalDeleteUser.vue';
import ModalEditUser from './ModalEditUser.vue';

DataTable.use(DataTablesCore);

const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editarUsuario"></i>';
const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#excluirUsuario"></i>';

const data = [
    ['Joaquim Lucas César', '626.759.075-53', '20/08/1983', 'joaquim_lucas_ramos@gmail.com', '(95) 2718-4213', 'Inativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
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
<style>
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
    z-index: 0!important;
}

li.dt-paging-button.page-item a.page-link {
    color: #000000;
    z-index: 0!important;
}

.page-item.active .page-link:focus, .page-link:focus-within {
    box-shadow: 0 0px 0px 3px #90c1417e !important;
}

table.dataTable th, table.dataTable td{
    box-sizing: unset;
}

div.dt-container .dt-paging .dt-paging-button {
    padding: 0!important;
    margin-left:0!important;
}

</style>

<!-- <template>
    <div class="container">
        <DataTable :data="data" :options="options" class="display" >
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
        </DataTable>
    </div>
</template>
<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

const editar = '<i class="fa-solid fa-pencil" type="button" data-bs-toggle="modal" data-bs-target="#editUser"></i>';
const excluir = '<i class="fa-solid fa-trash" type="button" data-bs-toggle="modal" data-bs-target="#deleteUser"></i>';

const options = {
    language: {
        search: "Pesquisar",
        decimal: "",
        emptyTable: "Sem dados disponíveis",
        infoPostFix: "",
        thousands: ",",
        lengthMenu: " _MENU_ entradas por página",
        zeroRecords: "Nenhum resultado encontrado",
    },
    layout: {
        topStart: 'pageLength',
        bottomStart: null,
    },
    scrollX: false,
    scrollCollapse: true,
    // fixedHeader: false,
    order: [],
    lengthMenu: [
        [5, 10, 25, 50, 100],
        [5, 10, 25, 50, 100],
    ],
    pageLength: 5,
    autoWidth: true,
}

const data = [
    ['Joaquim Lucas César', '626.759.075-53', '20/08/1983', 'joaquim_lucas_ramos@gmail.com', '(95) 2718-4213', 'Inativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', editar, excluir],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', editar, excluir],
];

</script>
<style scoped>
@import 'datatables.net-dt';    
@import 'datatables.net-responsive-dt';

</style> -->