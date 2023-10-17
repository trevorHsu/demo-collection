<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'
import { h, ref, onMounted } from 'vue';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { circleAnimation } from '@/utils/three/animation/circle'

const MenuRef = ref()
const HeaderCanvas = ref()

const showMenu = () => {
    MenuRef.value.showMenu()
}

const goToHome = () => {
    MenuRef.value.clearSelectedMenu()
}

onMounted(() => {
    circleAnimation(HeaderCanvas.value)  
})

</script>

<template>
    <div :class="[PREFIX_NAME_WRAPPER('header')]">
        <div ref="HeaderCanvas" class="header-canvas"></div>

        <a-button class="base-btn" type="text" :icon="h(MenuOutlined)" 
            @click="showMenu"
        />

        <a-button class="base-btn home-btn" type="text" :icon="h(HomeOutlined)" 
            @click="goToHome"
        />
    </div>

    <Menu ref="MenuRef" />
</template>

<style lang="scss" scoped>
.#{PREFIX_NAME_WRAPPER(header)} {
    width: 100%;
    height: $header-height;
    box-sizing: border-box;
    border-bottom: 1px solid $base-border-color;
    background: #010409;
    position: relative;

    box-sizing: border-box;
    padding: 0 10px;

    .header-canvas {
        position: absolute;
        width: calc(100% - 20px);
        height: 100%;
    }

    .base-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 30px;
        color: #fff;

        &.home-btn {
            left: 50px;
        }
    }
}
</style>
@/utils/three/animation/circle