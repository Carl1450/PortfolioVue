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
          :image="project.image"
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
    description: "A personal portfolio built with Vue and TailwindCSS, showcasing my skills, projects, and experience. Responsive design, smooth animations, and a contact form for collaboration.",
    image: "/portfolioProject.png",
    tags: ["Vue", "TailwindCSS"],
    liveLink: "https://portfolio-carl-dev.netlify.app/",
    codeLink: "https://github.com/Carl1450/PortfolioVue",
  },
  {
    title: "Weather App",
    description: "A mobile-friendly React app using the OpenWeather API. Search for any city to view the current temperature and date. Built for fast, simple weather checks on the go.",
    image: "/weatherapp.png",
    tags: ["React", "CSS"],
    // liveLink: "/",
    codeLink: "https://github.com/Carl1450/weather-app",
  },
  {
    title: "FoosballProLeague",
    description: "A real-time foosball tracker built with WEXO A/S as a 4th semester project. Using an ESP32 to detect goals, it updates a live leaderboard via WebSockets and combines IoT, real-time APIs, and a responsive frontend to gamify workplace matches.",
    image: "/foosballproleague.jpg",
    tags: ["C#", "IoT", "C++", "ESP-32"],
    //liveLink: "/",
    codeLink: "https://github.com/RadenDK/4.Semester/tree/main",
  },
  {
    title: "Casino Bonus Game",
    description: "A Unity bonus game inspired by board games. Players roll dice to navigate a maze, collect prizes, and avoid a monster that moves on its own rolls. Built in Unity 2022.3, it mixes chance and strategy for a fun challenge.",
    image: "/bonusgame.png",
    tags: ["Unity", "C#"],
    liveLink: "https://play.unity.com/en/games/4de58bd2-9c3c-4bb1-b185-f47f97ec3436/gamebuildswebgl",
    //codeLink: "/",
  },
  {
    title: "IronPlay",
    description: "A 3rd semester project on concurrency in multiplayer systems. We built a web-based lobby where multiple players could try to join limited spots at once, ensuring consistent state and preventing race conditions in real time.",
    image: "/ironplay.jpg",
    tags: ["C#", ".NET", "Razor Pages"],
    //liveLink: "/",
    codeLink: "https://github.com/RadenDK/ThirdSemesterProject",
  },
  {
    title: "Mystical Springs Dungeon",
    description: "A 5th semester collaboration with JellySide Studios, creating a prototype for their dungeon generation system and visual components. Each dungeon was randomly generated with a unique seed for reproducibility, and included basic enemy behavior to follow players when approached.",
    image: "/MysticalSprings.png",
    tags: ["GDScript", "Godot"],
    //liveLink: "/",
    //codeLink: "/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Vue and TailwindCSS, showcasing my skills, projects, and experience. Responsive design, smooth animations, and a contact form for collaboration.",
    image: "/portfolioProject.png",
    tags: ["Vue", "TailwindCSS"],
    liveLink: "https://portfolio-carl-dev.netlify.app/",
    codeLink: "https://github.com/Carl1450/PortfolioVue",
  },
  {
    title: "Weather App",
    description: "A mobile-friendly React app using the OpenWeather API. Search for any city to view the current temperature and date. Built for fast, simple weather checks on the go.",
    image: "/weatherapp.png",
    tags: ["React", "CSS"],
    // liveLink: "/",
    codeLink: "https://github.com/Carl1450/weather-app",
  },
  {
    title: "FoosballProLeague",
    description: "A real-time foosball tracker built with WEXO A/S as a 4th semester project. Using an ESP32 to detect goals, it updates a live leaderboard via WebSockets and combines IoT, real-time APIs, and a responsive frontend to gamify workplace matches.",
    image: "/foosballproleague.jpg",
    tags: ["C#", "IoT", "C++", "ESP-32"],
    //liveLink: "/",
    codeLink: "https://github.com/RadenDK/4.Semester/tree/main",
  },
  {
    title: "Casino Bonus Game",
    description: "A Unity bonus game inspired by board games. Players roll dice to navigate a maze, collect prizes, and avoid a monster that moves on its own rolls. Built in Unity 2022.3, it mixes chance and strategy for a fun challenge.",
    image: "/bonusgame.png",
    tags: ["Unity", "C#"],
    liveLink: "https://play.unity.com/en/games/4de58bd2-9c3c-4bb1-b185-f47f97ec3436/gamebuildswebgl",
    //codeLink: "/",
  },
  {
    title: "IronPlay",
    description: "A 3rd semester project on concurrency in multiplayer systems. We built a web-based lobby where multiple players could try to join limited spots at once, ensuring consistent state and preventing race conditions in real time.",
    image: "/ironplay.jpg",
    tags: ["C#", ".NET", "Razor Pages"],
    //liveLink: "/",
    codeLink: "https://github.com/RadenDK/ThirdSemesterProject",
  },
  {
    title: "Mystical Springs Dungeon",
    description: "A 5th semester collaboration with JellySide Studios, creating a prototype for their dungeon generation system and visual components. Each dungeon was randomly generated with a unique seed for reproducibility, and included basic enemy behavior to follow players when approached.",
    image: "/MysticalSprings.png",
    tags: ["GDScript", "Godot"],
    //liveLink: "/",
    //codeLink: "/",
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
