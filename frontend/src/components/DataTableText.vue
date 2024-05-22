<template>
        <DataTable :data="data" class="display nowrap table-bordered" :options="options">
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

</template>

<script setup>
// https://stackblitz.com/edit/datatables-net-vue3-extensions?file=src%2FApp.vue
import { DataTable } from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);


const data = [
    ['Joaquim Lucas César', '626.759.075-53', '20/08/1983', 'joaquim_lucas_ramos@gmail.com', '(95) 2718-4213', 'Inativo', 'botao', 'botao2'],
    ['Samuel Igor Jorge Souza', '064.677.356-92', '05/10/1990', 'samuel_souza@gmail.com', '(27) 99564-0484', 'Ativo', 'botao', 'botao2'],
    ['Aparecida da Costa', '621.506.150-61', '01/12/1985', 'aparecida_costa@gmail.com', '(37) 98468-5369', 'Ativo', 'botao', 'botao2'],
];

const options = {
    language: {
        search: 'Buscar'
    },
    layout: {
        bottomStart: 'pageLength',
        topStart: null
    },
    scrollX: true,
    scrollY: 150,
    scrollCollapse: true,
    fixedHeader: true,
    order: []
}
</script>

<style>
@import 'datatables.net-bs5';
</style>


