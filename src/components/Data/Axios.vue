<template>
    <div>{{data}}</div>
</template>

<script>
    export default {
        data() {
            return {
                data: null
            }
        },
        name: "Axios",
        mounted() {
            this.axios.get('http://localhost:8088/getClass', {}).then(response => {this.data=response.data}
            )
        }
    }
</script>

<style scoped>

</style>
