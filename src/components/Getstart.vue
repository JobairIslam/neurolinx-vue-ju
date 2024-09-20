<template>
  <div
    class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/getstart-bg.png')]"
  >
    <div class="container px-5 mx-auto xl:px-0">
      <div class="flex flex-col items-center justify-center">
        <img src="/img/brand-logo.svg" alt="brand-logo" />
        <h2
          class="gd-title mt-8 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Elevate Your Exploration <span class="block"></span> with AI Deep
          Search
        </h2>
        <p class="mt-4 mb-8 text-base text-center md:text-xl text-w-100">
          Enhance Your Discoveries Unleash the Power of AI Neurolinx Deep Search
        </p>
        <router-link
          to="/signin"
          class="flex justify-center items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo capitalize text-base font-medium bg-gd-secondary text-w-900"
        >
          Get Started Now
          <img src="/img/icons/arrow-right.svg" alt="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>
