import { BaseWorld } from "@/utils/three/world/BaseWorld"
import { loadBirds } from './birds'

const createWorld = async (container: HTMLElement) => {
    const world = new BaseWorld(container)

    await world.init(async ( { controls, scene } ) => {
        const { parrot, flamingo, stork } = await loadBirds()

        controls.target.copy(parrot.position)

        scene.add(parrot, flamingo, stork)
    })

    world.start()

    return world
}

export {
    createWorld
}
