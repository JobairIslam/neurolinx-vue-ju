<template>
  <div
    class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/leverage-bg.png')]"
  >
    <div class="mx-auto px-5 xl:px-0 container">
      <h2
        class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
      >
        {{ title }}
        <span class="inline-block lg:block"></span>{{ subtitle }}
      </h2>
      <div class="flex flex-col">
        <div class="flex flex-col gap-[30px]">
          <div
            v-for="(section, index) in sections"
            :key="index"
            :class="[
              'flex flex-col-reverse',
              section.reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
              'justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary',
            ]"
          >
            <div class="flex flex-col items-start justify-center">
              <h3
                class="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500"
              >
                {{ section.heading }}
                <span class="inline-block lg:block"></span
                >{{ section.subheading }}
              </h3>
              <p class="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                {{ section.content }}
              </p>
            </div>
            <div class="rounded-lg">
              <img
                class="rounded-lg w-full"
                :src="section.imageSrc"
                :alt="section.imageAlt"
              />
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
      title: 'Leverage Any Data Source',
      subtitle: 'No Matter How Diverse',
      sections: [
        {
          heading: 'Ensure Pristine Data Quality',
          subheading: 'for Optimal Performance',
          content:
            'These sources collectively cater to different requirements, from academic research and professional analysis to staying informed on current affairs and exploring nuanced opinions.',
          imageSrc: '/img/diverse1.png',
          imageAlt: 'diverse',
          reverseLayout: false,
        },
        {
          heading: 'Strategies for Enhancing',
          subheading: 'Data Quality',
          content:
            '"Noisy" texts, like those from social networks and online communities, contain typos, slang, and informal language, reflecting dynamic online interactions and user sentiment.',
          imageSrc: '/img/diverse2.png',
          imageAlt: 'diverse',
          reverseLayout: true,
        },
        {
          heading: 'Data Management Leveraging',
          subheading: 'Internal Resources',
          content:
            'This approach not only enhances the quality of insights derived but also supports real-time decision-making and operational efficiency across different domains.',
          imageSrc: '/img/diverse3.png',
          imageAlt: 'diverse',
          reverseLayout: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Include your Tailwind CSS styles or any other additional styling here. */
</style>
