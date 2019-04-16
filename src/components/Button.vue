<template>
    <div id="button">
        <a-button id="button_template">dd</a-button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        mounted() {
            let button_template=document.getElementById('button_template');
            let button_clone=button_template.cloneNode(true);
            button_clone.removeAttribute('id');
            document.getElementById('button').appendChild(button_clone);
            document.getElementById('button').removeChild(button_template);
        }
    }
</script>

<style scoped>

</style>
