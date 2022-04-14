<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <VButton :properties="buttonProps" @click="count++" />
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<preview msg="Hello Volar!"></preview>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import VButton from '@ui/button/VButton.vue'
import { VButtonProperties } from '@ui/button/VButtonProperties'

defineProps<{ msg: string }>()

const count = ref(0)

const buttonProps = computed(() => new VButtonProperties({
  title: `${count.value}`,
  disabled: false,
}))
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
