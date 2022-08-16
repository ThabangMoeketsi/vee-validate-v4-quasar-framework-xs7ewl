<template>
  <q-field
    :borderless="true"
    :error="!!errorMessage"
    :error-message="errorMessage"
  >
    <q-checkbox :label="label" v-model="value" />
  </q-field>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const { errorMessage, value } = useField(toRef(props, 'name'), undefined, {
  type: 'checkbox',
  uncheckedValue: false,
  valueProp: true, // the checkbox "checked" value
});
</script>
