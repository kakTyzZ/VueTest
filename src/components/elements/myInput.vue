<script setup>
const props = defineProps(['modelValue', 'label'])
const emit = defineEmits(['update:modelValue'])
</script>


<template>
    <div class="flex gap-2 items-center justify-between">
        <div>{{ label }}</div>
        <input
      v-bind="$attrs"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class=" px-5 py-2 width-[300px] rounded-xl border-2"
      
    />
    </div>
    
  </template>