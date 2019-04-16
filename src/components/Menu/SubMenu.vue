<template functional>
    <a-sub-menu
            :key="props.menuInfo.entity.key"
    >
    <span slot="title">
      <a-icon :type="props.menuInfo.entity.icon" /><span>{{ props.menuInfo.entity.title }}</span>
    </span>
        <template v-for="item in props.menuInfo.children">
            <a-menu-item
                    v-if="!item.children"
                    :key="item.entity.key"
            ><RouterLink :to="item.entity.value">
                <a-icon type="item.entity.icon" />
                <span>{{ item.entity.title }}</span>
               </RouterLink>
            </a-menu-item>
            <sub-menu
                    v-else
                    :key="item.entity.key"
                    :menu-info="item"
            />
        </template>
    </a-sub-menu>
</template>
<script>
    export default {
        props: ['menuInfo'],
    };
</script>
