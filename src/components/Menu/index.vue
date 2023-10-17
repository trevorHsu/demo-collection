<script setup lang="ts">
import { h, ref } from 'vue';
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

type MenuItem = {
    id: string,
    name: string,
    path: string
}


let menuList: MenuItem[] = reactive([])
let selectedMenu = ref('')

let show = ref(false)


const showMenu = () => {
    show.value = true
}

const closeMenu = () => {
    show.value = false
}

const handleMenuItemClick = (menuItem: MenuItem) => {
    if (selectedMenu.value === menuItem.id) {
        return
    }

    selectedMenu.value = menuItem.id
}

const clearSelectedMenu = () => {
    selectedMenu.value = ''
}

const getMenuList = () => {
    menuList.splice(0)
    menuList.push(
        ...[
            { name: 'test 1', path: 'test 1', id: 'test 1' },
            { name: 'test 2', path: 'test 2', id: 'test 2' },
            { name: 'test 3', path: 'test 3', id: 'test 3' },
            { name: 'test 4', path: 'test 4', id: 'test 4' },
            { name: 'test 5', path: 'test 5', id: 'test 5' }
        ]
    )
}


const init = () => {
    getMenuList()
}

init()

defineExpose({
    showMenu,
    closeMenu,
    clearSelectedMenu
});
</script>


<template>
<a-config-provider
    :theme="{
        token: {
            colorPrimary: '#5c6065',
        },
    }"
>
    <div :class="PREFIX_NAME_WRAPPER('menu-cloak')" v-show="show" @click="closeMenu"></div>

    <div :class="[PREFIX_NAME_WRAPPER('menu'), show ? 'show' : '']">
        <div class="filter-div">
            <div class="header-part">
                <a-button class="close-btn" type="primary" shape="circle" :icon="h(CloseCircleOutlined)" 
                    @click="closeMenu"
                />
            </div>

            <div class="content-part vertical-scroll">
                <div :class="['menu-item', selectedMenu === menuItem.id && 'active']" v-for="menuItem in menuList" :key="menuItem.id"
                    @click="() => handleMenuItemClick(menuItem)"
                >
                    {{ menuItem.name }}
                </div>
            </div>
        </div>
    </div>
</a-config-provider>
</template>


<style scoped lang="scss">
.#{PREFIX_NAME_WRAPPER(menu-cloak)} {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(114, 112, 112, .3);
    top: 0;
    backdrop-filter: blur(20px);
}

.#{PREFIX_NAME_WRAPPER(menu)} {
    position: absolute;
    height: 100%;
    width: 300px;
    left: -300px;
    background-color: $menu-background-color;
    border: 1px solid $base-border-color;
    top: 0;
    border-radius: 0 8px 8px 0;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    $header-part-height: 80px;
    $content-part-height: calc(100% - #{$header-part-height});

    .filter-div {
        content: ""; 
        width: 100%;
        height: 100%;
        position: relative;
        backdrop-filter: blur(20px);
    }
    
    &.show {
        left: 0;
    }

    .header-part {
        width: 100%;
        height: $header-part-height;

        .close-btn {
            float: right;
        }
    }

    .content-part {
        width: 100%;
        height: $content-part-height;

        .menu-item {
            $menu-item-height: 50px;
            $active-box-shadow: inset 0px 0px 12px -1px rgba(255,255,255,0.15);
            $active-box-shadow-light: inset 0px 0px 12px -1px rgba(255,255,255,0.5);

            width: 100%;
            height: $menu-item-height;
            line-height: $menu-item-height;
            text-indent: 10px;
            cursor: pointer;
            border: 1px solid rgba(0,0,0,0);
            border-bottom: 1px solid $base-border-color;
            transition: .1s;
            user-select: none;

            &:hover {
                background: rgba(189, 189, 189, .12);
                box-shadow: $active-box-shadow;
                border-radius: 4px;
            }

            &.active {
                animation: menu-item-active 4s ease-in-out infinite;
                border-radius: 4px;
                background: rgba(189, 189, 189, .12);
            }

            @keyframes menu-item-active {
                0% {
                    box-shadow: $active-box-shadow;
                }

                35% {
                    box-shadow: $active-box-shadow-light;
                }

                80% {
                    box-shadow: $active-box-shadow;
                }

                100% {
                    box-shadow: $active-box-shadow;
                }
            }


        }
    }
}
</style>
