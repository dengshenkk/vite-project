<template>
  <button :class="classes" :disable="disable || loading" :type="nativeType">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useGlobalConfig } from '../utils/common'
import { isValidComponentSize } from '../utils/validate'

type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>
type IButtonType = PropType<'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>
type IButtonSize = PropType<'mini' | 'small' | 'medium' | 'large'>

interface IButtonProps {
  type: string
  size: string
  icon: string
  nativeType: string
  loading: boolean
  disable: boolean
  plain: boolean
  autofocus: boolean
  round: boolean
  circle: boolean
}

export default defineComponent({
  name: 'GButton',
  props: {


    type: {
      type: String as IButtonType,
      default: 'default',
      validator(value: string): Boolean {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text'].includes(value)
      }
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String as IButtonNativeType,
      default: 'button',
      validator(value: string): Boolean {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
  },
  setup(props, ctx) {
    const $G = useGlobalConfig()
    const { type, size, disable, loading, plain, round, circle } = props
    const classes = computed(() => {
      return `
      g-button,
      ${ type ? 'g-button--' + type : '' }
      ${ size ? 'g-button--' + size : '' }
      ${ disable && 'is-disable' }
      ${ loading && 'is-loading' }
      ${ plain && 'is-plain' }
      ${ round && 'is-round' }
      ${ circle && 'is-circle' }
      `
    })
    console.log('classes: ', classes)


    const buttonSize = computed(() => {
      return props.size || gFormItem.size || $G.size
    })


    return {
      classes
    }
  }
})
</script>

