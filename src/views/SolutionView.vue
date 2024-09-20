<script setup>
import SolutionHero from '../components/SolutionHero.vue';
import Enhancing from '../components/Enhancing.vue';
import Leverage from '../components/Leverage.vue';
import CustomAI from '../components/CustomAI.vue';
import Accordion from '../components/Accordion.vue';
import Getstart from '../components/Getstart.vue';
</script>

<template>
  <div class="overflow-x-hidden font-normal bg-b-900">
    <SolutionHero />

    <Enhancing />

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/solves-bg.png')]"
    >
      <div class="mx-auto px-5 xl:px-0 container">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Neurolinx Solves Industry
          <span class="inline-block lg:block"></span>Specific Problems
        </h2>
        <div
          class="pt-4 md:pt-8 lg:pt-16 px-4 md:px-8 lg:px-16 rounded-lg bg-gd-tertiary"
        >
          <img
            src="/img/specific-problems.jpg"
            class="rounded-t-lg lg:rounded-t-xl w-full"
            alt="specific-problems"
          />
        </div>
      </div>
    </div>

    <Leverage />

    <CustomAI />

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/unlocking-bg.png')]"
    >
      <div class="mx-auto px-5 xl:px-0 container">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Unlocking Unparalleled

          <span class="inline-block lg:block"></span>Semantic Capabilities
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div class="p-6 lg:p-12 flex gap-6 bg-gd-tertiary">
            <h3 class="leading-[52px] text-40x font-medium text-w-900">
              16M&plus;
            </h3>
            <span class="inline-block w-[1px] h-full bg-tropical-indigo"></span>
            <p class="text-base text-w-100">Revolutionizing AI Integration</p>
          </div>
          <div class="p-6 lg:p-12 flex gap-6 bg-gd-tertiary">
            <h3 class="leading-[52px] text-40x font-medium text-w-900">
              64T&plus;
            </h3>
            <span class="inline-block w-[1px] h-full bg-tropical-indigo"></span>
            <p class="text-base text-w-100">Advanced AI Solutions</p>
          </div>
          <div class="p-6 lg:p-12 flex gap-6 bg-gd-tertiary">
            <h3 class="leading-[52px] text-40x font-medium text-w-900">
              248&plus;
            </h3>
            <span class="inline-block w-[1px] h-full bg-tropical-indigo"></span>
            <p class="text-base text-w-100">
              Global <span class="block"></span> Integration
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/stepbystep-bg.png')]"
    >
      <div class="mx-auto px-5 xl:px-0 container">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Step-by-Step Guide
          <span class="inline-block lg:block"></span>to Integrating Neurolinx
        </h2>
        <img src="/img/stepby.png" class="w-full" alt="" />
      </div>
    </div>

    <Accordion />

    <Getstart />
  </div>
</template>
