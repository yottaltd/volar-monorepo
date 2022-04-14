<template>
  <button
    :disabled="disabled"
    :title="properties.title"
    type="button"
    @click="onInteract"
  >
    {{ properties.title }}
  </button>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import { VButtonProperties } from './VButtonProperties';

export default defineComponent({
  name: 'VButton',
  props: {
    properties: {
      type: VButtonProperties,
      required: true,
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    const disabled: ComputedRef<boolean> = computed(() => {
      return props.properties.disabled;
    });

    const onInteract = (e: UIEvent): void => {
      if (!disabled.value) {
        emit('click');
      }
    };

    return {
      disabled,
      onInteract,
    };
  },
});
</script>
