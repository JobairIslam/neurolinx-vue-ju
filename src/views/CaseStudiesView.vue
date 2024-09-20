<script setup>
import Getstart from '../components/Getstart.vue';
</script>

<template>
  <div class="font-normal bg-b-900">
    <div
      class="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h1
          class="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
        >
          Case Studies
          <span class="block"></span>by Neurolinx
        </h1>
        <p class="mt-6 text-base text-center md:text-xl text-w-100">
          Explore our customer case studies to delve into the practical
          applications
          <span class="inline-block lg:block"></span>of Neurolinx and its
          transformative impact on various industries.
        </p>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/discover-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Discover Business Grow
          <span class="inline-block lg:block"></span>Faster with Neurolinx
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mb-[30px]">
          <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
            <img
              src="/img/case-studies1.jpg"
              alt="case studies"
              class="rounded-lg"
            />
            <h3 class="mt-8 mb-6 text-2xl font-medium text-w-500">
              KakaoPage Increases Long-Tail Consumption by 70% and Daily
              Transaction Value by 200&percnt;
            </h3>
            <router-link
              to="/casestudiessingle"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >Read Case Study
              <img src="/img/icons/arrow-right.svg" alt="arrow"
            /></router-link>
          </div>
          <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
            <img
              src="/img/case-studies2.jpg"
              alt="case studies"
              class="rounded-lg"
            />
            <h3 class="mt-8 mb-6 text-2xl font-medium text-w-500">
              Optimized Travel Experiences through AI-driven Recommendations
            </h3>
            <router-link
              to="/casestudiessingle"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >Read Case Study
              <img src="/img/icons/arrow-right.svg" alt="arrow"
            /></router-link>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
            <img
              src="/img/case-card1.png"
              alt="case studies"
              class="rounded-lg"
            />
            <h3 class="mt-8 mb-6 text-2xl font-medium text-w-500">
              Global Personalized Product Discovery Platform for 360+ Beauty
              Brands
            </h3>
            <router-link
              to="/casestudiessingle"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >Read Case Study
              <img src="/img/icons/arrow-right.svg" alt="arrow"
            /></router-link>
          </div>
          <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
            <img
              src="/img/case-card2.png"
              alt="case studies"
              class="rounded-lg"
            />
            <h3 class="mt-8 mb-6 text-2xl font-medium text-w-500">
              Fan-Powered Dynamic Music Chart Using Online Social Data
            </h3>
            <router-link
              to="/casestudiessingle"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >Read Case Study
              <img src="/img/icons/arrow-right.svg" alt="arrow"
            /></router-link>
          </div>
          <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
            <img
              src="/img/case-card3.png"
              alt="case studies"
              class="rounded-lg"
            />
            <h3 class="mt-8 mb-6 text-2xl font-medium text-w-500">
              AI Voice Search Leaders: Transforming the Duty-Free Industry
            </h3>
            <router-link
              to="/casestudiessingle"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo"
              >Read Case Study
              <img src="/img/icons/arrow-right.svg" alt="arrow"
            /></router-link>
          </div>
        </div>
      </div>
    </div>

    <Getstart />
  </div>
</template>
