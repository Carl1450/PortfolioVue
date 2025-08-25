<template>
  <div class="relative z-10">
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :id="id"
      :name="name"
      :rows="type === 'textarea' ? rows : undefined"
      :placeholder="placeholder"
      class="shadow-sm text-white text-sm rounded-lg block w-full p-2.5 focus:ring-primary-500 focus:border-primary-500 border border-secondary dark:bg-[#ffffff29] bg-primary"
    />
  </div>
</template>
<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  rows: { type: Number, default: 4 },
  name: { type: String, required: true },
});
</script>
