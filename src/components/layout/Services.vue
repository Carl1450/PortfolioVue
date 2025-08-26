<template>
  <section id="experience" class="relative text-white mt-32">
    <SectionHeader title="My Experience" />
    <div
      class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        class="px-[12px] mb-[24px]"
        v-for="element in services"
        :key="element.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[ffffff29] bg-primary"
          data-aos="fade-up"
          :data-aos-delay="element.id * 50"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div class="mt-[-7px] p-[20px] relative bg-primary rounded-[50%]">
              <span
                class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-secondary absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"
              ></span>
              <img
                :src="element.icon"
                alt="services"
                class="h-[35px] w-[35px] relative z-[1]"
              />
            </div>
          </div>
          <div class="p-[30px]">
            <h3 class="uppercase font-bold text-secondary text-base mb-1">
              {{ element.name }}
            </h3>
            <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">
              {{ element.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";

const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/B2B0E8/google-code.png",
    name: "Web Development",
    description:
      "I build modern, responsive websites and web applications using Vue, Vite, HTML, CSS, and JavaScript. My focus is on creating user-friendly interfaces and seamless experiences that work well on any device. I enjoy turning ideas into interactive, high-quality digital products.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/?size=100&id=15888&format=png&color=B2B0E8",
    name: "Game Development",
    description:
      "I create engaging games and interactive experiences, primarily using Godot and GDScript. My game development work includes designing gameplay mechanics, building levels, and implementing features that make games fun and rewarding for players.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/?size=100&id=5zO4D0wewNlS&format=png&color=B2B0E8",
    name: "Backend Development",
    description:
      "I have experience building robust backend systems with C#, .NET, and Java, as well as working with databases like MSSQL and PostgreSQL. I design and implement APIs, manage data storage, and ensure secure, scalable server-side solutions.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/100/B2B0E8/bug.png",
    name: "Testing & Debugging",
    description:
      "I am dedicated to writing reliable code and maintaining high standards through thorough testing and debugging. I use a variety of tools and techniques to identify issues, optimize performance, and ensure that applications run smoothly and without errors.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/100/B2B0E8/internet-of-things.png",
    name: "Web Development",
    description:
      "I develop and connect smart devices and embedded systems for IoT solutions. My experience includes integrating sensors, managing device communication, and building applications that bring physical devices online for automation and data collection.",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/ios-filled/100/B2B0E8/paint-palette.png",
    name: "UI/UX Design",
    description:
      "I design user interfaces that are both visually appealing and easy to use. My approach to UI/UX focuses on understanding user needs, creating intuitive layouts, and improving the overall experience through thoughtful design choices.",
  },
]);
</script>
