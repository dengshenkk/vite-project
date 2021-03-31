import { getCurrentInstance } from 'vue'


export function useGlobalConfig() {
  const vm: any = getCurrentInstance()
  if ('$G' in vm.proxy) {
    return vm.proxy.$G
  }
  return {}
}


export function userInject() {
 return
}
