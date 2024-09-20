<template>
  <div
    class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/FAQ-bg.png')]"
  >
    <div class="container px-5 mx-auto xl:px-0">
      <div class="flex flex-col items-center justify-center">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Frequently Asked
          <span class="inline-block lg:block"></span>Questions
        </h2>
        <div class="flex flex-col gap-4 w-full lg:max-w-[850px]">
          <div
            v-for="(item, index) in accordions"
            :key="index"
            class="p-6 border rounded-lg according border-b-600 bg-gd-tertiary"
          >
            <div
              class="flex items-start gap-2 text-base font-medium cursor-pointer according-header text-w-500 text-[20px]"
              @click="toggleAccordion(index)"
            >
              <img
                :src="item.icon"
                alt="icon"
                :class="{ 'rotate-90': activeAccordion === index }"
              />
              {{ item.title }}
            </div>
            <div
              v-if="activeAccordion === index"
              class="according-content pl-[40px]"
            >
              <p class="pt-4 text-base text-w-100">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAccordion: 0,
      accordions: [
        {
          title: 'What do our Subscription Plans and Add-ons offer?',
          content:
            'Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.',
          icon: '/img/faq-icon.svg',
        },
        {
          title: 'What is the Mechanism Behind Functionality?',
          content:
            'Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.',
          icon: '/img/faq-icon.svg',
        },
        {
          title: 'What Advantages Does Search Offer? ',
          content:
            'Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.',
          icon: '/img/faq-icon.svg',
        },
        {
          title: 'icon What Advantages Does Personalization Offer?',
          content:
            'Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations. ',
          icon: '/img/faq-icon.svg',
        },
        {
          title: 'How is it utilized for personalization?',
          content:
            'Neurolinx is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations. ',
          icon: '/img/faq-icon.svg',
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
    },
  },
};
</script>

<style scoped>
.according-header img {
  transition: transform 0.3s ease;
}
.according-header img.rotate-90 {
  transform: rotate(90deg);
}
</style>
