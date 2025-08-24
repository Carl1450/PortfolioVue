<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 text-white dark:bg-secondary bg-primary p-4 rounded-full z-10"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 text-white dark:bg-secondary bg-primary p-4 rounded-full z-10"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <swiper
      ref="swiperRef"
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOptions"
      loop
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide
        class="max-w-[400px]"
        v-for="(project, index) in projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'src/assets/images' + project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import ProjectCard from "@/components/UI/ProjectCard.vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ref } from "vue";

const navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};

const projects = ref([
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/Project1.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/Project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/Project1.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/Project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/Project1.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "/",
    codeLink: "/",
  },
]);
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
