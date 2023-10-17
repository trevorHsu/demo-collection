// 和类前缀相关
const APP_PREFIX = 'demo-collection'

const PREFIX_NAME_WRAPPER = (name: string) => {
    return `${APP_PREFIX}-${name}`
}

export {
    APP_PREFIX, PREFIX_NAME_WRAPPER
}
