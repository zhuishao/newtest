<template>
    <div>
        <Table1></Table1>
        <Table2></Table2>
        <Table3></Table3>
        <Table4></Table4>
    </div>
</template>
<script>
    import Table1 from '@/components/table/Table1'
    import Table2 from '@/components/table/Table2'
    import Table3 from '@/components/table/Table3'
    import Table4 from '@/components/table/Table4'
    export default {
        name: "Table",
        components:{
            Table1,
            Table2,
            Table3,
            Table4
        }
    }
</script>

<style scoped>

</style>
