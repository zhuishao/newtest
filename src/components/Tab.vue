<template>
    <a-tabs defaultActiveKey="2">
        <a-tab-pane key="1">
      <span slot="tab">
        <a-icon type="apple" />
        表单联动
      </span>
            <Form1></Form1>
        </a-tab-pane>
        <a-tab-pane key="2">
      <span slot="tab">
        <a-icon type="android" />
        动态校验规则
      </span>
            <Form2></Form2>
        </a-tab-pane>
    </a-tabs>
</template>
<script>
    import Form1 from '@/components/Form1.vue'
    import Form2 from '@/components/Form2.vue'
    export default {
        data () {
        },
        components:{
          Form1, Form2
        },
        methods: {

        },
    }
</script>
