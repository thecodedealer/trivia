export const resolveDynamicRequestType = (originalType: string, target: 'INIT' | 'SUCCESS' | 'FAILED' | 'CANCELED') => {
    return `${originalType}_REQ_${target}`
}
