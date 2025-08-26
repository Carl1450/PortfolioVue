<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form class="space-y-8" @submit="sendEmail">
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
            :name="item.id"
          />
        </div>
        <div class="flex justify-between">
          <Button label="Send" :disabled="sending" />

          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a
              href="https://www.linkedin.com/in/carl-christian-rasmussen/"
              class="text-gray-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a
              href="https://github.com/Carl1450"
              class="text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
import { ref } from "vue";
import emailjs from "emailjs-com";

const sending = ref(false);

const inputs = ref([
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "email@example.com",
    rows: undefined,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Let us know how we can help you",
    rows: undefined,
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave a comment",
    rows: 6,
  },
]);

const sendEmail = (e) => {
  e.preventDefault();
  sending.value = true;
  emailjs
    .sendForm(
      "service_9v2zpr8",
      "template_zr45x3w",
      e.target,
      "RfWRTCtEFNA5ME1xo"
    )
    .then(
      () => {
        alert("Message sent!");
        e.target.reset();
        sending.value = false;
      },
      (error) => {
        alert("Failed to send: " + error.text);
        sending.value = false;
    }
    );
};
</script>
