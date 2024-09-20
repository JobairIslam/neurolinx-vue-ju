<template>
  <div
    class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/central-tenets-bg.png')]"
  >
    <div class="mx-auto px-5 xl:px-0 container">
      <h2
        class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
      >
        {{ title }}
        <span class="block"></span> {{ subtitle }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        <div
          v-for="(value, index) in coreValues"
          :key="index"
          class="p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
        >
          <h3
            class="text-2xl md:text-32x font-medium leading-[42px] text-w-500"
          >
            {{ value.title }}
          </h3>
          <p class="mt-4 mb-6 md:mb-12 text-base text-w-100">
            {{ value.description }}
          </p>
          <img :src="value.imageSrc" :alt="value.imageAlt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Central Tenets',
      subtitle: '& Core Values',
      coreValues: [
        {
          title: 'Clear Communication',
          description:
            'Our distinctive approach enables users to explore and comprehend the underlying workings of our algorithms, fostering credibility through social validation.',
          imageSrc: '/img/core-values1.png',
          imageAlt: 'core-values',
        },
        {
          title: 'Streamlined Approach',
          description:
            'Our continuously updated automated solutions are presented in everyday language that feels natural to humans. Integration, usage, and maintenance are all simplified for ease of use.',
          imageSrc: '/img/core-values2.png',
          imageAlt: 'core-values',
        },
        {
          title: 'Empowering Individuals',
          description:
            'Through co-creation and interaction, our clients are consistently impressed by the novel, enriching user experiences that offer invaluable insights for informed decision-making.',
          imageSrc: '/img/core-values3.png',
          imageAlt: 'core-values',
        },
        {
          title: 'Variety and Inclusion',
          description:
            'We aid audiences in discovering their niche by recognizing long tail preferences, delivering diverse and inclusive results from all verticals using open-source social data.',
          imageSrc: '/img/core-values4.png',
          imageAlt: 'core-values',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Include your Tailwind CSS or additional styles here */
</style>
