<template>
    <div style="width: 256px">
        <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['2']"
                mode="inline"
                theme="dark"
                :inlineCollapsed="collapsed"
        >
            <template v-for="item in list">
                <a-menu-item v-if="!item.children" :key="item.entity.key">
                    <a-icon :type="item.entity.icon" />
                    <span>{{item.entity.title}}</span>
                </a-menu-item>
                <sub-menu v-else :menu-info="item" :key="item.entity.key"/>
            </template>
        </a-menu>
    </div>
</template>

<script>
    /*
     * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
     * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
     * */
    import SubMenu from './SubMenu'
    import data from '../../../public/data/data.json'
    export default {
        components: {
            'sub-menu': SubMenu,
        },

        data () {
            return {
                collapsed: false,
                list:data.children
                // list: [
                //     {
                //         key: '1',
                //         title: 'Option 1',
                //     }, {
                //         key: '2',
                //         title: 'Navigation 2',
                //         children: [
                //             {
                //                 key: '2.1',
                //                 title: 'Navigation 3',
                //                 children: [
                //                     { key: '2.1.1',
                //                         title: 'Option 2.1.1',
                //                     },
                //                 ],
                //             },
                //         ],
                //     }],
            }
        },
        methods: {
            toggleCollapsed () {
                this.collapsed = !this.collapsed
            },
        },
    }
</script>
