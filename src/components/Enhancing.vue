<template>
  <div class="lg:py-24 bg-[url('../img/bc/enhancing-bg.png')]">
    <div class="mx-auto px-5 xl:px-0 container">
      <h2
        class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
      >
        Enhancing Context-Aware
        <span class="inline-block lg:block"></span>Natural Language
        Understanding
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="p-6 md:p-12 rounded-lg bg-gd-tertiary border border-b-600"
        >
          <div class="inline-block p-4 rounded-full bg-primary btn-border">
            <img :src="card.icon" :alt="card.title" />
          </div>
          <h3 class="mt-6 md:mt-12 mb-4 text-2xl font-medium text-w-500">
            {{ card.title }}
          </h3>
          <p class="text-base text-w-100">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: '/img/icons/1.svg',
          title: 'Streamlined Setup',
          description:
            'Automate data preprocessing, learning updates, and load balancing without extra infrastructure or manpower.',
        },
        {
          icon: '/img/icons/2.svg',
          title: 'Seamless Integration',
          description:
            'Easily integrate Neurolinx with your data catalogue and connect it to your existing search, recommendation, or AI systems.',
        },
        {
          icon: '/img/icons/3.svg',
          title: 'Recent Outcomes',
          description:
            'Utilize real-time updates to incorporate recent data changes seamlessly, without additional operational costs.',
        },
        {
          icon: '/img/icons/4.svg',
          title: 'Revenue Generation',
          description:
            'Drive revenue growth through Neurolinx by integrating its units into your ad system or offering valuable data insights to other businesses.',
        },
        {
          icon: '/img/icons/5.svg',
          title: 'Reducing Workload',
          description:
            "Neurolinx's data analytics expedite decision-making and time-to-market, minimizing workload and boosting efficiency.",
        },
        {
          icon: '/img/icons/6.svg',
          title: 'Customizable Outcomes',
          description:
            'Overcome the limitations of opaque AI products with our flexible platform, allowing easy adjustments to align results with your business strategy.',
        },
        {
          icon: '/img/icons/7.svg',
          title: 'Long-tail Recs',
          description:
            'Enhance the value of your data by leveraging social-powered recommendation data to deliver more personalized and relevant results.',
        },
        {
          icon: '/img/icons/8.svg',
          title: 'Tailored Outcomes',
          description:
            'Kick-start user profiling with social-based datasets to resolve the cold start problem and deliver personalized results.',
        },
        {
          icon: '/img/icons/9.svg',
          title: 'Voice Search Upgrade',
          description:
            "Optimize voice search with Neurolinx's NLP units that understand colloquial terms and phrases, ensuring precise and intuitive interactions.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
