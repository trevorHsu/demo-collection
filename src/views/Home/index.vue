<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { createWorld } from './world'


const ContainerRef = ref()
let world: ReturnType<typeof createWorld> extends Promise<infer T> ? T : any


onMounted(async () => {
    world = await createWorld(ContainerRef.value)
})

onBeforeUnmount(() => {
    world && world.stop()
})
</script>


<template>
    <div :class="[PREFIX_NAME_WRAPPER('home')]" >
        <div class="container" ref="ContainerRef"></div>
    </div>
</template>


<style scoped lang="scss">
.#{PREFIX_NAME_WRAPPER(home)} {
    width: 100%;
    height: 100%;

    .container {
        width: 100%;
        height: 100%;
    }
}
</style>
