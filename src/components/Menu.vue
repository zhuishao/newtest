<template>
    <div>
        <a-menu
                style="width: 240px"
                mode="vertical"
                @click="handleClick"
        >
            <a-menu-item key="1">
                <a-icon type="mail" />
                表格<router-link to="/table/table"></router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="calendar" />
                表单<router-link to="/"></router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="appstore" /><span>Button</span></span>
                <a-menu-item key="3">点我<RouterLink to="/button"></RouterLink></a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
                <a-sub-menu key="sub1-2" title="Submenu">
                    <a-menu-item key="5">Menu<RouterLink to="/menu"></RouterLink></a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick (e) {
                console.log('click ', e)
            },
        },
    }

</script>
