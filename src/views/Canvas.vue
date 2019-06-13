<template>
    <div class="container">
        <canvas class="canvas"></canvas>
    </div>
</template>

<script>

    export default {
        name: "Canvas",
        data(){
          return {
              width:100
          }
        },
        mounted() {
            const drawing=document.querySelector('canvas');
            if(drawing.getContext()){
                let context=drawing.getContext('2d');
            }
        }
    }
</script>

<style scoped>
    .container{
        height: 100vh;
        position: relative;
    }
    .canvas{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }

</style>
