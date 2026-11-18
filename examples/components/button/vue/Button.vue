<script setup lang="ts">
withDefaults(defineProps<{ disabled?: boolean }>(), { disabled: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button type="button" :disabled="disabled" @click="emit('click')">
    <slot />
  </button>
</template>

<!-- Example: <Button :disabled="isSaving" @click="save">Save</Button> -->
