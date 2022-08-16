<template>
  <div class="q-pl-md">
    <h1 class="text-h4 text-weight-bold">Quasar + vee-validate v4</h1>
    <div class="q-mt-md q-gutter-md" style="max-width: 300px">
      <Form :validation-schema="schema" @submit="onSubmit">
        <Field
          name="interests"
          rules="required"
          v-slot="{ errorMessage, value, field, handleChange }"
        >
          <q-select
            outlined
            dense
            :options="interests"
            :label="'Select'"
            emit-value
            use-chips
            use-input
            multiple
            :model-value="value"
            @update:model-value="handleChange"
            :error-message="errorMessage"
            :error="!!errorMessage"
          />
        </Field>

        <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import QInputWithValidation from './components/QInputWithValidation.vue';
import QCheckboxWithValidation from './components/QCheckboxWithValidation.vue';
import QSelectWithValidation from './components/QSelectWithValidation.vue';

const schema = yup.object({
  interests: yup.array().min(1, 'Must select at least 1 option').required(),
});

function onSubmit(values, actions) {
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
}

const options = ['Enterprise', 'Pro', 'Freelance'];

const interests = ['Code', 'Design', 'Business', 'Management'];
</script>
