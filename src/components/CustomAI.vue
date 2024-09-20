<template>
  <div
    class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/customaI-bg.png')]"
  >
    <div class="mx-auto px-5 xl:px-0 container">
      <h2
        class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
      >
        Custom AI Solutions
        <span class="inline-block lg:block"></span>Across Industries
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div
          v-for="(caseStudy, index) in caseStudies"
          :key="index"
          class="p-6 rounded-lg bg-gd-tertiary"
        >
          <img :src="caseStudy.image" class="w-full" :alt="caseStudy.title" />
          <h3 class="mt-8 mb-6 text-2xl text-w-500">
            {{ caseStudy.title }}
          </h3>
          <router-link
            :to="{ path: '/ourteam' }"
            class="inline-block px-4 py-2 capitalize rounded-full border border-tropical-indigo text-sm font-medium bg-transparent text-w-900 hover:bg-tropical-indigo"
          >
            Read Case Study
            <img
              class="inline-block ms-2"
              src="/img/icons/arrow-right.svg"
              alt="arrow"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseStudies: [
        {
          image: '/img/case-card1.png',
          title:
            'Global Personalized Product Discovery Platform for 360+ Beauty Brands',
        },
        {
          image: '/img/case-card2.png',
          title: 'Fan-Powered Dynamic Music Chart Using Online Social Data',
          link: 'team.html',
        },
        {
          image: '/img/case-card3.png',
          title: 'AI Voice Search Leaders: Transforming the Duty-Free Industry',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
