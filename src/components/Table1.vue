<template>
    <div>
        <div>
            <a-collapse accordion>
                <a-collapse-panel v-for="(item,index) in data" :key="index" :header="'用户：'+item.name">
                    <p>{{item.email}}  {{item.gender}}</p>
                </a-collapse-panel>

            </a-collapse>
        </div>
        <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>
<script>

    export default {
        el:'#demo',
        data() {
            return {
                data:null,
                show:true

            }
        },
        mounted() {
            this.axios.get('http://localhost:8080/data/create.json',{}).then(response => {
                this.data=response.data.people;
            })


        }
    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>