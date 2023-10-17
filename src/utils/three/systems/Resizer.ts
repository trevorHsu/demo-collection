import {  WebGLRenderer } from 'three'


const setSize = (container: HTMLElement, camera: any, renderer: WebGLRenderer) => {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()

  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

class Resizer {
  resizeHandler: () => void

  constructor(container: HTMLElement, camera: any, renderer: WebGLRenderer) {
    // set initial size
    setSize(container, camera, renderer)

    this.resizeHandler = () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer)
      // perform any custom actions
      this.onResize()
    }

    window.addEventListener('resize', this.resizeHandler)
  }

  onResize() {}

  stop() {
    window.removeEventListener('resize', this.resizeHandler)
  }
}

export { Resizer }
