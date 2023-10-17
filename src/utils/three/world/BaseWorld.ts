import { createCamera } from '../components/camera'
import { createLights } from '../components/lights'
import { createScene } from '../components/scene'

import { createControls } from '../systems/controls'
import { createRenderer } from '../systems/renderer'
import { Resizer } from '../systems/Resizer'
import { Loop } from '../systems/Loop'


class BaseWorld {
  camera: ReturnType<typeof createCamera>
  controls: ReturnType<typeof createControls>
  renderer: ReturnType<typeof createRenderer>
  scene: ReturnType<typeof createScene>
  loop: Loop
  resizer: Resizer

  constructor(container: HTMLElement) {
    const camera = this.camera = createCamera()
    const renderer = this.renderer = createRenderer()
    const scene = this.scene = createScene()
    const loop = this.loop = new Loop(camera, scene, renderer)
    const controls = this.controls = createControls(camera, renderer.domElement)
    const { ambientLight, mainLight } = createLights()

    loop.updatables.push(controls)
    scene.add(ambientLight, mainLight)
    container.append(renderer.domElement)

    this.resizer = new Resizer(container, camera, renderer)
  }

  async init(fn: (arg: {
    controls: ReturnType<typeof createControls>,
    scene: ReturnType<typeof createScene>
  }) => Promise<any>) {
    if (fn) {
      await fn({
        controls: this.controls,
        scene: this.scene
      })
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  start() {
    this.loop.start()
  }

  stop() {
    this.loop.stop()
    this.resizer.stop()
  }
}

export { BaseWorld }
