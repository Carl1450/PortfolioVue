<template>
    <section id="whyme" class="mt-32">
        <SectionHeader title="Why Me?" />
        <div class="grid grid-cols-1 lg:grid-cols-2 p-12 overflow-hidden">
            <Education data-aos="fade-left" />
            <Experience data-aos="fade-right" />
        </div>
    </section>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Education from "@/components/layout/Education.vue";
import Experience from "@/components/layout/Experience.vue";
</script>