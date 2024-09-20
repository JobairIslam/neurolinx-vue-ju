<template>
  <div
    class="bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bg.jpg')]"
  >
    <div class="py-24 md:pt-[164px]">
      <div class="container px-5 mx-auto xl:px-0">
        <div class="flex flex-col items-center justify-center">
          <span
            class="inline-block px-4 py-2 text-sm font-medium border rounded-full border-b-400 bg-b-600 text-tropical-indigo"
            >Neurolinx Deep Dive AI Search</span
          >
          <h1
            class="gd-title mt-4 mb-6 tracking-[-0.02em] text-center text-3xl md:text-5xl lg:text-8xl lg:leading-[112px] font-semibold"
          >
            Delve Deep to Discover
            <span class="inline-block lg:block">Your True Desires</span>
          </h1>
          <p class="mb-8 text-base text-center md:text-xl text-w-100">
            Introducing a Revolutionary Recommendation AI Harnessing Collective
            Insights <span class="inline-block lg:block"></span> to Power
            Industry-specific Decision Support Systems
          </p>
          <router-link
            to="/signin"
            class="flex justify-center items-center gap-2 mb-8 lg:mb-16 px-6 py-[14px] rounded-full border btn-border text-base font-medium bg-gd-secondary text-w-900"
          >
            Get Started Now
            <img src="/img/icons/arrow-right.svg" alt="arrow" />
          </router-link>
          <img src="/img/hero-dash.png" alt="dash-board" />
          <span
            class="inline-block mt-8 mb-8 text-sm font-medium lg:mt-16 text-w-100"
            >Endorsed by Premier Brands Globally</span
          >
          <div
            class="hero-brand overflow-hidden whitespace-nowrap relative w-full lg:max-w-[1000px]"
          >
            <div class="inline-flex logo_items animate-slides">
              <img src="/img/brand/1.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/2.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/3.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/4.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/5.svg" alt="brand" class="mx-4" />
            </div>
            <div class="inline-flex lg:ml-20 logo_items animate-slides">
              <img src="/img/brand/1.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/2.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/3.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/4.svg" alt="brand" class="mx-4" />
              <img src="/img/brand/5.svg" alt="brand" class="mx-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
