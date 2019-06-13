<template>
    <div class="A">
        <div class="B">你
            <div class="C">好</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Less"
    }
</script>

<style scoped lang="less">
    .TableStyle{
        color:blue;
        .B{
            color:red;
            .C{
                color:yellow;
            }
        }
    }
    .A{
        .TableStyle;
    }

</style>
