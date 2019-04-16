<template>
    <div id="table4">
        <ExcelExportButton :data_column="columns" data_id="table4"></ExcelExportButton>
        <a-table :columns="columns"
                 :rowKey="record => record.id"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 @change="handleTableChange"
        >
            <template slot="name" slot-scope="name">
                {{name.first}} {{name.last}}
            </template>
        </a-table>
    </div>
</template>
<script>
    import reqwest from 'reqwest';
    import ExcelExportButton from "../ExcelExportButton";

    const columns = [{
        title: 'Id',
        dataIndex: 'id',
        sorter: true,
        width: '20%',
    }, {
        title: 'componentId',
        dataIndex: 'componentId',
        width: '20%',
    }, {
        title: 'componentName',
        dataIndex: 'componentName',
    }, {
        title: "componentNameEnglish",
        dataIndex: "componentNameEnglish"
    },
        {
            title: "componentType",
            dataIndex: "componentType"
        }];

    export default {
        components: {ExcelExportButton},
        mounted() {
            this.fetch();

        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
            }
        },

        methods: {
            columnsChange() {
                console.log(this.columns);
            },
            handleTableChange(pagination, filters, sorter) {
                // console.log(pagination);
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });
            },
            fetch(params = {}) {
                // console.log('params:', params);
                this.loading = true
                reqwest({
                    url: 'http://localhost:8088/unit/getAll',
                    method: 'get',
                    data: {
                        results: 10,
                        ...params,
                    },
                    type: 'json',
                }).then((data) => {
                    const pagination = {...this.pagination};
                    // Read total count from server
                    // pagination.total = data.totalCount;
                    pagination.total = 200;
                    this.loading = false;
                    this.data = data;
                    // debugger;
                    this.pagination = pagination;
                });
            }
        },
    }
</script>
