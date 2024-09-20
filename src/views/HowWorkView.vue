<script setup>
import NextGeneration from '../components/NextGeneration.vue';
import Getstart from '../components/Getstart.vue';
</script>

<template>
  <div class="overflow-x-hidden font-normal bg-b-900">
    <div
      class="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')]"
    >
      <div class="mx-auto px-5 xl:px-0 container">
        <h1
          class="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
        >
          How It Works
          <span class="inline-block lg:block"></span> Service Automation
          Solution
        </h1>
        <p class="mt-6 text-center text-base md:text-xl text-w-100">
          Service automation is the next generation of factory automation,
          enabling prompt <span class="inline-block lg:block"></span>and
          immediate implementation of AI solutions.
        </p>
      </div>
    </div>

    <NextGeneration />

    <Getstart />
  </div>
</template>
