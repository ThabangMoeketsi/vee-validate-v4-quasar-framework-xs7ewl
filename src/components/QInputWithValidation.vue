<template>
  <q-input
    v-model="value"
    :error-message="errorMessage"
    :error="!!errorMessage"
  />
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const { errorMessage, value } = useField(toRef(props, 'name'));
</script>
