<template>
    <div class="container">
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
    </div>
</template>

<script setup>
//npm install --save datatables.net-vue3
//npm install --save datatables.net-bs5
//https://datatables.net/forums/discussion/comment/223982/#Comment_223982
//https://datatables.net/reference/option/layout
//https://datatables.net/reference/feature/pageLength

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

// export default {
//     name: 'dataTable',
//     components: {}
// }

</script>
<style>
@import 'datatables.net-bs5';
</style>