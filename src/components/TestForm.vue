<template>
  <FormKit id="newForm" type="form" submit-label="Create" @submit="submitForm">
    <FormKit
      type="text"
      label="Name"
      name="name"
      validation="required|whitespace"
      :validation-messages="whitespaceMessage" />
    <FormKit
      type="email"
      label="Email"
      name="email"
      validation="required|whitespace"
      :validation-messages="whitespaceMessage" />
    <FormKit
      type="number"
      label="Number"
      name="number"
      validation="required|whitespace"
      :validation-messages="whitespaceMessage" />
    <FormKit
      id="description"
      name="description"
      type="textarea"
      label="Description"
      maxlength="100"
      input-class="h-24"
      validation="required|whitespace"
      :validation-messages="{
        ...requiredMessage,
        ...whitespaceMessage,
      }" />
  </FormKit>
</template>

<script setup>
import { requiredMessage, whitespaceMessage } from '@/theme';

const submitForm = async (data) => {
  console.log(data);
};
</script>
