<template>
  <section class="p-16">
    <header class="text-center">
      <h3 class="text-4xl font-bold text-primary dark:text-white">
        Experience
      </h3>
    </header>
    <ul class="mt-10 space-y-8 y-8">
      <li
        class="w-full rounded-xl shadow-lg border border-secondary dark:border-primary bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99]"
        v-for="(item, index) in Experience"
        :key="index"
      >
        <article
          class="flex flex-col lg:flex-row items-center lg:items-start rounded-[12px] bg-primary mt-[3px] mx-[3px] p-6 md:p-8 lg:p-10"
        >
          <figure
            class="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0"
          >
            <Icon
              icon="material-symbols-light:work"
              class="text-4xl md:text-6xl lg:text-7xl text-secondary"
            />
          </figure>

          <section class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left">
            <header>
              <h3
                class="text-xl md:text-2xl font-semibold uppercase text-secondary"
              >
                {{ item.Title }}
              </h3>
            </header>
            <p class="text-sm md:text-base text-white">{{ item.company }}</p>
            <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
          </section>
        </article>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from "vue";
const Experience = ref([
  {
    duration: "12/2021-03/2023",
    Title: "Security Screener",
    company: "Aalborg Lufthavn",
  },
  {
    duration: "03/2025-05/2025",
    Title: "Game Developer Intern",
    company: "CEGO",
  },
]);
</script>
